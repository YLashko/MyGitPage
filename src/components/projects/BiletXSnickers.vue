<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github">
        <info-box :noHoverAnim="true">
            <p>Projects I did for credit for 'Mobile Applications' university course (except for about 85% of the appearance of BiletX - it was made by a my friend with whom we were on the same project team).</p>
            <p>Both applications are written using Vue.js and are very similar in structure, they use vue-router to manage url addresses and vue-store to save data about the logged in user. The database is google firebase, communication with the database is done via hardcoded queries to google firebase api.</p>
            <p>BiletX allows you to create, view events and reserve seats for them, Sneakers allows you to "buy" shoes.</p>
            <img src="/src/assets/biletx_sn.gif">
            <img src="/src/assets/biletx_bl.gif">
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
                title: "BiletX and Sn[ea/ic]kers",
                github: "https://github.com/YLashko/bilet-app",
                shortDescription: "'Mobile Applications' university course credit projects",
                techs: ["Vue.js", "HTML/CSS/JS"],
                link: ""
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
        margin-left: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>