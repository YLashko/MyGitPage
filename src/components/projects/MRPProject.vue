<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github"
    :date="project.date">
        <info-box :noHoverAnim="true">
            <p>The program allows you to calculate the basic MRP algorithm, I made it as a project for the course credit for integrated systems.</p>
            <p>The project was originally written in python and was supposed to take data from a json file or a python class tree, and output to html or csv. However, I found out later that most of the score was the user interface, so I had to make it as an html document and bind django.</p>
            <p>The algorithm is that in the product tree on the basis of the demand table, production time, batch size and planned supplies the table of production of the current level and product demands of the next level is calculated.</p>
            <p>The interface is a product tree editor with fully editable multi-level tree, the result of the calculations is received in the form of an html table.</p>
            <img src="/src/assets/mrp_gui.gif">
            <img src="/src/assets/mrp_calc.gif">
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
                title: "MRP Project",
                github: "https://github.com/YLashko/MRP_project",
                shortDescription: "A python script-webpage made as a credit project for the 'Integrated Systems' university course",
                techs: ["Python", "HTML/CSS/JS", "Django"],
                link: "",
                date: "Mar 16, 2023 - Mar 29, 2023"
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
        width: 70%;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 30px;
    }
</style>