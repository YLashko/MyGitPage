<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github"
    :date="project.date">
    <info-box :noHoverAnim="true">
        <p>The project was created when I found a great game called Risk of rain 2, but because of the specifics of the game, the entry threshold is much easier to overcome using a page like plationumgod.com for The Binding of Isaac. I couldn't find such a page, so I decided to create my own.</p>
        <p>The point of the page is that when you hover your mouse over a particular item, information about its properties will pop up. Although the project is small, it has several interesting points.</p>
        <p>All data for the page were collected from fandom wiki and packed directly as .InnerHTML file in JSON and also downloaded pictures, using mix of selenium and requests. The scraper works by iterating over possible table objects and checking to see if it's a table, since this site may have ads in random places in the same element, so simple hard-coded XPath scraping won't work.</p>
        <pre class="code">
for i in range(4, 15):
    table = get_table(f'/html/body/div[4]/div[3]/div[3]/main/div[3]/div[2]/div/div[{i}]/table/tbody')
    if (table != None) and not (table in tables_arr):
        extracted = extract_table(table)
        tables_json.append({
            "Name" : tables_names[counter],
            "Table" : extracted
        })
        print(f"Extracted {tables_names[counter]} - index {i}")
        counter += 1
        tables_arr.append(table)
                </pre>
        <img src="/src/assets/ror2.gif">
    </info-box>
    </project-base>
</template>

<script>
import InfoBox from '../items/InfoBox.vue';
import ProjectBase from './ProjectBase.vue';
export default {
    components: { ProjectBase, InfoBox },
    data: function() {
        return {
            project: {
                title: "Risk of Rain 2 Items",
                github: "https://github.com/YLashko/YLashko.github.io",
                shortDescription: "A small web page created to help me and my friends quickly find what a particular ROR2 item does",
                techs: ["Python", "HTML/CSS/JS"],
                link: "https://ylashko.github.io/",
                date: "May 1, 2022 - May 2, 2022"
            }
        }
    }
}
</script>

<style scoped>
    p {
        text-indent: 30px;
    }
    img {
        width: 80%;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 30px;
    }
</style>