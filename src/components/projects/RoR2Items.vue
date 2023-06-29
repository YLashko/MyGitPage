<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github">
        
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
                link: "https://ylashko.github.io/"
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
        width: 50%;
    }
</style>