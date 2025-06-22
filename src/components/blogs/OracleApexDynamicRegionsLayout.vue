<template>
    <div class="blog-main">
        <div class="row">
            <div class="col-lg-2">

            </div>
            <div class="col-lg-8">
                <info-box
                :title="'Introduction'"
                :noHoverAnim="true">
                    <p class="paragraph">
                        Oracle APEX is a very powerful tool for wrapping an Oracle Database into a user-friendly interface and has a lot of useful built-in functionalities
                        for inserting, editing and displaying data, session management, reporting and many other needs. But no tool is perfect, and you would 
                        expect such a versatile tool to have plenty of downsides and restrictions. One of such restrictions is how APEX handles page layout.
                    </p>
                    <p class="paragraph">
                        APEX regions layout is pretty straightforward and simplistic: each region's container's internal layout - region content, page section, sub regions - 
                        contains containers with class "row", representing rows, they are stacked on top of each other. Inside these rows, there are columns.
                        A row is divided into 12 equal pieces, and a single column's width has a scale of 1 to 12 units, 1 unit takes up 1/12 of row's width,
                        12 units take up 100%.
                    </p>
                    <p class="paragraph">
                        Here is an example layout:
                    </p>

                    <table>
                        <tr>
                            <td class="example-row-name">
                                Row 1
                            </td>
                            <td>
                                <div class="row layout-example-row">
                                    <div class="col-4 layout-example-col">
                                        <div class="layout-example-col-inner">Column - width 4</div>
                                    </div>
                                    <div class="col-8 layout-example-col">
                                        <div class="layout-example-col-inner">Column - width 8</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="example-row-name">
                                Row 2
                            </td>
                            <td>
                                <div class="row layout-example-row">
                                    <div class="col-6 layout-example-col">
                                        <div class="layout-example-col-inner">Column - width 6</div>
                                    </div>
                                    <div class="col-6 layout-example-col">
                                        <div class="layout-example-col-inner">Column - width 6</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    
                    <p class="paragraph">
                        The code for that layout would look like this:
                    </p>

                    <pre class="code">{{ layoutExampleHTML }}</pre>

                    <p class="paragraph">
                        You may find this similar to the Bootstrap approach - in Bootstrap, you also have rows and columns, and column width
                        can have a value from 1 to 12 - and you will be absolutely right. Not only structures are the same, even class names
                        and the underlying CSS is similar to that of Bootstrap. And there is nothing wrong with such approach - it works and works
                        great, the problem is that all the region sizes are set by a developer in the workspace, and there is no way to rearrange
                        regions from the application. Imagine a home page or a dashboard in an application - if the application is big enough
                        and there are many business objects and data metrics, users may want to customize their dashboards to have different
                        charts/tables/reports.
                    </p>
                    
                </info-box>
                <info-box
                :title="'Requirements for the solution'"
                :noHoverAnim="true">
                    <p class="paragraph">
                        Well, obviously, the solution should consist of at least 2 user interfaces: an interface for the layout configuration,
                        and an interface this configuration is applied to. If there is a possibility to utilize APEX's layout
                        system, I'm fine with using it too.
                        I see a couple of key requirements for such system:
                    </p>
                    <ul>
                        <li>
                            The user interface should be at least not frustrating to use. This is more of my requirement,
                            for some it may be fine if it just works and functions and some may be fine with just a 1-1
                            grid mapped to the config table, but I want something a little more fancy and user-friendly.
                        </li>
                        <li>
                            There should be validations on the frontend and on the backend that will validate the layout
                            and will not allow user to place duplicates, non-existing regions, and manipulate the input
                            in any way. We want to prevent user from making data anomalies and breaking their dashboards.
                        </li>
                        <li>
                            It would be nice if there was a possibility to have many configurable dashboards in a single application
                            and to apply a default layout to the dashboard if the user hasn't configured one yet.
                        </li>
                        <li>
                            All the regions that are not selected for the dashboard, should not be rendered anywhere. There
                            should be no additional requests to the server for these regions.
                        </li>
                        <li>
                            All the standard APEX functionality (refreshes, filters, inner items) for the regions should work.
                        </li>
                    </ul>
                </info-box>
                <info-box
                :title="'Database tables'"
                :noHoverAnim="true">
                    <p class="paragraph">
                        There are 3 entities that can be clearly defined based on the requirements:
                        layout, region, and assignment; layout holding regions possible for assignment, 
                        regions assignments to users. Since we want to have a default config for each 
                        dashboard, a 4th entity being region to default config assignment can be added 
                        to keep the configs. I have chosen uiut prefix (UI UTilities) to differentiate these tables:
                    </p>
                    <img class="full-image" src="/src/assets/uiut_scheme.png">
                    <ul>
                        <li>
                            uiut_layouts - layouts to be able to have multiple dashboards in the same application, identified by name
                            in this example.
                        </li>
                        <li>
                            uiut_regions - one entry for a single region, assigning it to a layout means it can be placed on that dashboard.
                            region_name and description are informational, region_width_cols holds region width in Bootstrap/APEX columns
                            1 to 12. The reason why it is there will be revealed later
                        </li>
                        <li>
                            uiut_user_section_regions - holds dashboard configurations per user, a single entry being a combination of region
                            assigned to a user. There is no need to store layouts here, as regions are already assigned to it and I want 
                            to have them isolated from other layouts. section_num is a row number the region will be inserted into.
                        </li>
                        <li>
                            uiut_default_layout_regions is a copy of uiut_user_section_regions but without the user_name, for getting
                            default dashboard layouts if user hasn't yet created any.
                        </li>
                    </ul>
                </info-box>
                <info-box
                :title="'Dashboard configuration interface'"
                :noHoverAnim="true">
                    <p class="paragraph">
                        The interface that immediately came into my mind when thinking about dashboard customization 
                        is drag and drop from the regions 'bucket' onto the layout. This type of interface would require
                        you to create a custom dashboard miniature as Oracle APEX doesn't feature any built-in solution
                        for such functionality. The drag-and-drop itself has to be also created from scratch with the 
                        underlying JS structure to keep all the data organized and be able to send it to the database on
                        user request. 
                    </p>
                    <p>
                        Here I will briefly explain what the JS handling the drag and drop does, the full script can 
                        be found on my <a href="https://github.com/YLashko/oracle-apex-afree-general/blob/main/uiut/uiut_dynamic_layout.js">Github</a>.
                    </p>
                    <p>
                        The dashboard data is stored in the DashBoardMiniatureRow objects, 1 per row, each containing potentially 
                        any amount of regions, which are stored as DOM element references. The miniature can potentially include any number of rows,
                        in the testing example I created three. The UI looks like this in the application:
                    </p>
                        <img src="/src/assets/uiut_dashboard_miniature.jpg" class="full-image">
                    <p>
                        <br>
                        On the left side, there is a 'bucket' of regions that can be dragged onto the dashboard miniature. It is essentially just an
                        APEX's interactive report showing the uiut_regions table, with a custom template for the resion column to allow dragging and 
                        style it properly.
                        The class has the following methods, which represent all the actions you can do with the dashboard miniature from the frontend:
                        <ul>
                            <li>add_region_for_add_el - add new region at the end of the row (When hovered over the 'plus dummy region', or empty row space).</li>
                            <li>add_region_before_another - insert a region before another region 
                                (currently is called when a region is hovered over another region).</li>
                            <li>remove_region - deletes region from the row. Used on drag start, so 
                                dragging a region off the miniature deletes it.</li>
                            <li>can_fit Checks if a region is contained in the row and if the region can fit into the row.</li>
                        </ul>
                        There are also functions to load dashboard layout into the specified element, utilities for
                        constructing DOM elements, like region miniatures, as we need those when we move elements from
                        a table onto the dashboard, and a function to construct a JSON object for the dashboard.
                        In action, the dashboard miniature looks like this:
                    </p>
                        <img src="/src/assets/uiut_dashboard_miniature_animation.gif" class="full-image">
                    <p>
                        <br>
                        Fun fact, because you have to use plain text with escaping off to retain the attached events to the regions,
                        the filter for the column also shows them rendered, and the dragging even works. Dropping the 11th region,
                        however, placed 14th region onto the miniature for me, and I haven't checked why, just turned the filter off.
                    </p>
                        <img src="/src/assets/uiut_dashboard_ir_filters.jpg" class="full-image">
                </info-box>
                <info-box
                :title="'Communication with the backend'"
                :noHoverAnim="true">
                    <p class="paragraph">
                        To communicate with the backend, we need to write displaying and saving functions, 
                        Displaying will load a JSON string into an item on PL/SQL side and display it on JS side,
                        and backwards for the saving function, only adding the PL/SQL validation.
                    </p>
                    <p>
                        <br>
                        On save, we will be passing a JSON object that is composed like this to the database:
                        <pre class="code">{{ jsonObjectFuncCode }}</pre>
                        row_num is needed here as JSON arrays have no order, the same goes for reg_order.
                        And just a single reg_id, from which we can extract all the information we need
                        on the backend.
                    </p>
                    <p class="paragraph">
                        The result from a 'collect_layout_data' function gets insterted into an item on 
                        Save layout button click, then the page is submitted, and the PL/SQL code validates the layout,
                        which is basically INNERJOIN-ing the ids to the uiut_regions to get the width, and verifying if
                        the number of rows having all 12 columns filled is equal to 3, the validation is rows returned:
                        <pre class="code">{{ saveValidationCode }}</pre>
                        The code here doesn't check for duplicate ids as this is secured by the frontend, to be completely
                        safe from the user replacing the functions or inserting some values into the variables they weren't
                        supposed to, you could add a duplicates check to the validation code or make a separate validation for it
                        <pre class="code">{{ saveValidationAdditionalCheck }}</pre>
                        The saving code is packed into a PL/SQL procedure, which inserts the same parsed json:
                        <pre class="code">{{ saveInsertCode }}</pre>
                    </p>
                    <p class="paragraph">
                        For loading on PL/SQL side, I select a JSON_ARRAYAGG of nested JSON_OBJECT to create a json
                        similar to the one we are sending back from the frontend just with more columns.
                        Then it gets passed to a JS dynamic action, which sorts the rows and loads them into the row
                        objects, not forgetting to sort ('rows' array is the global array of DashBoardMiniatureRow objects):
                        <pre class="code">{{ jsLoadingCode }}</pre>
                    </p>
                    <p class="paragraph">
                        And that's it, the dashboard miniature is ready to be used. The next step is to shuffle the dashboard
                        regions accordingly.
                    </p>
                </info-box>
                <info-box
                :title="'Attaching the dashboard'"
                :noHoverAnim="true">
                    <p class="paragraph">
                        On the dashboard side, moving the resions around is actually pretty simple:
                        APEX's regions by design are independent of the structure around them and usually
                        events on them don't depend on the parent they are attached to or the siblings, so moving them around
                        by just reattaching the region to a different parent should work.
                    </p>
                    <p class="paragraph">
                        Here, I've decided to load the regions as a flattened array for the sake of simplicity, and the strategy
                        for loading the regions is to have them all loaded in a single 'bucket' region each having a server-side 
                        condition, to not load the unnecessaty regions. After the regions are loaded, we manually go through
                        the rows first, create the rows, then go through filtered (again!) regions, and append them to their row,
                        this is done in a load_dashboard function:
                        <pre class="code">{{ loadDashboardFunction }}</pre>
                    </p>
                    <p class="paragraph">
                        Actually, this is not all and there are a couple of additional points:
                        <ul>
                            <li>
                                We also need to have a backup to load the default layout if the user haven't configured
                                one yet, but that is done with a simple if statement.
                            </li>
                            <li>
                                The server-side condition for regions. There are multiple regions on a dashboard, so instead
                                of a simple equals condition it has to be a LISTAGG item with IN APEX_STRING.SPLIT_NUMBERS()
                                to check for each region if its ID is contained in the list of user chosen regions (again, 
                                rows returned type). Regions are moved by their hardcoded ids, which are calculated using reg_id_fn:
                            </li>
                            <pre class="code">{{ serverSideCondition }}</pre>
                            <li>
                                The regions have to be hidden on page load as the js magic happens after the page is fully 
                                loaded and the initial layout flashes for a split second. This can't be done with a simple
                                CSS class with display:none, because for Cards region (and maybe other types, I haven't 
                                checked them all) it checks if the region is visible on the screen to detemine if it needs
                                to load its contents. visibility:hidden works fine, but it leaves the space for the region,
                                so we also need to add height: 0 to completely get rid of the footprint.
                            </li>
                        </ul>
                    </p>
                </info-box>
                <info-box
                :title="'Tests'"
                :noHoverAnim="true">
                    <p class="paragraph">
                        The final result looks something like this:
                        <img src="/src/assets/UIUT_dashboard_app.jpg" class="full-image">
                    </p>
                    <p class="paragraph">
                        The page loads with an unnoticeable delay, there is no flickering, all the regions are loaded at
                        once. There is almost no performance impact on the backend side of the page except for server-side conditions,
                        which should not be an issue with a reasonable number of regions.
                    </p>
                    <p class="paragraph">
                        I've also tested some examples, things that definitely work:
                        <ul>
                            <li>
                                Charts
                            </li>
                            <li>
                                Inner structure (static html, inner regions)
                            </li>
                            <li>
                                Cards
                            </li>
                            <li>
                                IRs, IGs with header ser to 'none' ('Fixed to page' leaves the header on the page even if scrolled 
                                down past the region, 'fixed to region' breaks the width)
                            </li>
                            <li>
                                Display, input and popup items (Popup LOVs, date pickers, etc.)
                            </li>
                            <li>
                                Refreshes for all the tested types of regions
                            </li>
                        </ul>
                    </p>
                </info-box>
                <info-box
                :title="'Links'"
                :noHoverAnim="true">
                    <ul>
                        <p>
                            All the code and the application (f500) are available on the 
                            <a href="https://github.com/YLashko/oracle-apex-afree-general/tree/main/uiut">GitHub repo</a>.
                        </p>
                    </ul>
                </info-box>
            </div>
            <div class="col-lg-2">

            </div>
        </div>
        
    </div>
    
</template>

<script>
import InfoBox from '../items/InfoBox.vue';
export default {
    components: { InfoBox },
    data: function() {
        return {
            layoutExampleHTML : `<div class="row">
    <div class="col-4">
        Column - width 4
    </div>
    <div class="col-8">
        Column - width 8
    </div>
</div>
<div class="row">
    <div class="col-6">
        Column - width 6
    </div>
    <div class="col-6">
        Column - width 6
    </div>
</div>`,
            jsonObjectFuncCode: `function collect_layout_data(rows) {
    return rows.map((row) => {
        return {
            "row_num": row.row_num,
            "regions": row.regions.map((region, index) => {
                return {
                    "reg_id": parseInt(region.getAttribute('reg-id')),
                    "reg_order": index
                }
            })
        }
    });
}`,
            jsLoadingCode: `let rows_to_load = JSON.parse(apex.item('P105_INITIAL_LAYOUT_JSON').getValue());
for (let row of rows_to_load) {
    rows[row["row_num"] - 1].load_regions(row["regions"].sort((a, b) => {
        return a["reg_order"] - b["reg_order"];
    }));
}
`,
            saveValidationCode: `WITH json_parsed AS (
    SELECT 
        j.row_num,
        reg.region_width_cols AS total_width
    FROM JSON_TABLE(:P105_LAYOUT_JSON, '$'
        COLUMNS (
            row_num NUMBER PATH '$[*].row_num',
            NESTED PATH '$[*].regions[*]'
            COLUMNS(
                reg_id PATH '$.reg_id',
                reg_order PATH '$.reg_order'
            )
        )
    ) j
    INNER JOIN uiut_regions reg
    ON j.reg_id = reg.region_id
), sum_width AS (
    SELECT 
        SUM(total_width) AS row_width
    FROM json_parsed
    GROUP BY row_num
), total_rows AS (
    SELECT 
        COUNT(*) AS total_filled
    FROM sum_width
    WHERE row_width = 12
)
SELECT 1 FROM total_rows
WHERE total_filled = 3
;`,
            saveInsertCode: `FOR reg IN (
    SELECT 
        j.reg_id,
        j.row_num,
        j.reg_order
    FROM JSON_TABLE(
        ...
    ) j
    INNER JOIN uiut_regions reg
    ON j.reg_id = reg.region_id
    WHERE reg.layout_id = p_layout_id
) LOOP
    INSERT ...
END LOOP;`,
            saveValidationAdditionalCheck: `duplicates_check AS (
    SELECT 
        CASE WHEN COUNT(reg_id) = COUNT(DISTINCT reg_id) 
            THEN 'Y' 
            ELSE 'N'
        END AS no_duplicates
    FROM json_parsed
)`,
            loadDashboardFunction: `function load_dashboard(dashboard_json, dashboard_el, reg_id_fn, total_rows) {
    let rows = [];
    // create empty rows
    for (let i_row = 0; i_row < total_rows; i_row++) {
        let row = document.createElement('div');
        row.classList.add('row', 'responsive-row');
        rows.push(row);
    }

    // go through the dashboard JSON and append regions to the rows
    for (let reg of dashboard_json.sort((a, b) => {
        return a["reg_order"] - b["reg_order"];
    })) {
        let reg_el = document.getElementById(reg_id_fn(reg['reg_id'])); // actual region element
        if (reg['row_num'] > rows.length || reg['row_num'] < 1) {
            throw new Error('Invalid row number');
        }

        reg_el.parentElement.classList.remove('col-start', 'col-end');
        reg_el.parentElement.classList.add(\`responsive-col-\${reg['width']}\`);
        rows[reg['row_num'] - 1].appendChild(reg_el.parentElement);
    }

    // finally, append the rows to the dashboard element
    for (let i_row = 0; i_row < total_rows; i_row++) {
        dashboard_el.appendChild(rows[i_row])
    }
}`,
            serverSideCondition: `SELECT 1 
FROM TABLE(APEX_STRING.split_numbers(:P100_CHARTS_ID_LIST, ':'))
WHERE column_value = 1
;`
        }
    }
}
</script>

<style>
    .blog-main > .row {
        margin: unset;
    }

    .layout-example-row {
        width: min(80vw, 500px);
    }

    .layout-example-col-inner {
        margin: 2px;
        background-color: rgb(27, 28, 29);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    .layout-example-col {
        padding: 4px;
    }

    .example-row-name {
        padding: 0 12px;
    }

    .paragraph {
        padding-top: 8px;
    }

    .full-image {
        max-width: 100%;
        margin: 6px auto;
    }
</style>
