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
                        Oracle APEX is a very powerful tool for wrapping an Oracle Database into a user-friendly interface and has a lot of useful builtin functionalities
                        for inserting, editing and displaying data, session management, reporting and many other needs. But no tool is perfect, and you would 
                        expect for such versatile tool to have a plenty of downsides and restrictions. One of such restrictions is how APEX handles page layout.
                    </p>
                    <p class="paragraph">
                        APEX regions layout is pretty straightforward and simplistic: each regions container's internal layout - region content, page section, sub regions - 
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
                        You may find this similar to the approach in bootstrap - in bootstrap, you also have rows and columns, and column width
                        can have a value from 1 to 12 - and you will be absolutely right. Not only structures are the same, even class names
                        and the underlying css is similar to that of bootstrap. And there is nothing wrong with such approach - it works and works
                        great, the problem is that all the region sizes are set by a developer in the workspace, and there is no way to rearrange
                        regions from the application. Imagine a home page or a dashboard in an application - if the application is big enough
                        and there are many busiess objects and data metrics, users may want to customize their dashboards to have different
                        charts/tables/reports.
                    </p>
                    
                </info-box>
                <info-box
                :title="'Requirements for the solution'"
                :noHoverAnim="true">
                    <p class="paragraph">
                        Well, obviously, the solution should consist of interfaces: a user interface for the layout configuration,
                        and a user interface this configuration is applied to. If there is a possibility to utilize APEX's layout
                        system, I'm fine with using it too.
                        I see a couple of key requirements for such system:
                    </p>
                    <ul>
                        <li>
                            The user interface should be at least not frustrating to use. This is more of a my requirement,
                            for some it may be fine if it just works and functions and some may be fine with just a 1-1
                            grid mapped to the config table, but I want something more fancy and user-friendly.
                        </li>
                        <li>
                            There should be validations on the frontend and on the backend that will validate the layout
                            and will not allow user to place duplicates, non-existing regions, and manipulate the input
                            in any way. We want to prevent user in making data anomalies and breaking their dashboards.
                        </li>
                        <li>
                            It would be nice if there was a possibility to have many configurable dashboards in a single application
                            and to apply a default layout to the dashboard if the user haven't configured one yet.
                        </li>
                        <li>
                            All the regions that are not selected for the dashboard, should not be rendered anywhere. There
                            should be no additional requests to the server for these regions.
                        </li>
                        <li>
                            All the standard functionality (refreshes, filters, inner items) for the regions should work.
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
                        dashboard, 4th entity being region to default config assignment can be added 
                        to keep the configs. I have chosen uiut prefix (UI UTilities) to differenciate these tables:
                    </p>
                    <img class="full-image" src="/src/assets/uiut_scheme.png">
                    <ul>
                        <li>
                            uiut_layouts - layouts to be able to have multiple dashboards in the same application, identified by name
                            in this example.
                        </li>
                        <li>
                            uiut_regions - one entry for single region, assigning it to a layout means it can be placed on that dashboard.
                            Region_name and description are informational, region_width_cols holds region width in bootstrap/APEX columns
                            1 to 12. The reason why it is there will be revealed later
                        </li>
                        <li>
                            uiut_user_section_regions - holds dashboard configurations per user, a single entry being a combination of region
                            assigned to a user. There is no need to store layouts here, as regions are already assigned to it and I want 
                            to have them isolated from other layouts. Section_num is a row number the region will be inserted into.
                        </li>
                        <li>
                            uiut_default_layout_regions is a copy of uiut_user_section_regions but without the user_name, for getting
                            default dashboard layouts if user haven't yet created any.
                        </li>
                    </ul>
                </info-box>
                <info-box
                :title="'Dashboard configuration interface'"
                :noHoverAnim="true">
                    <p class="paragraph">
                        The interface that immediately came into my mind when thinking about dashboards customisation 
                        is drag and drop from the regions 'bucket' onto the layout. This type of interface would require
                        you to create a custom dashboard miniature as Oracle APEX doesn't feature any builtin solution
                        for such functionality. The drag-and-drop itself has to be also created from scratch with the 
                        underlying js structure to keep all the data organized and be able to send it to the database on
                        user request. 
                    </p>
                    <p>
                        Here I will briefly explain what the js handling the drag and drop does, the full script can 
                        be found on my <a href="https://github.com/YLashko/oracle-apex-afree-general/blob/main/uiut/uiut_dynamic_layout.js">Github</a>.
                    </p>
                    <p>
                        The dashboard data is stored in the DashBoardMiniatureRow objects, 1 per row, each containing potentially 
                        any amount of regions, which are stored as DOM elements. The class allows you to: 
                        <ul>
                            <li>add_region_for_add_el - add new region at the end of the row.</li>
                            <li>add_region_before_another - insert a region before another region 
                                (currently is called when a region) is hovered over another region.</li>
                            <li>remove_region - deletes region from the row.</li>
                            <li>Checks if a region is contained in the row and if the region can fit into the row.</li>
                        </ul>
                        There are also functions to load dashboard layout into the specified element, utilities for
                        constructing DOM elements and a function to construct a JSON object for the dashboard.
                    </p>
                </info-box>
                <info-box
                :title="'Attaching the dashboard'"
                :noHoverAnim="true">
                    <p class="paragraph"></p>
                </info-box>
                <info-box
                :title="'Tests'"
                :noHoverAnim="true">
                    <p class="paragraph"></p>
                </info-box>
                <info-box
                :title="'Room for improvement'"
                :noHoverAnim="true">
                    <p class="paragraph"></p>
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
</div>`
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
