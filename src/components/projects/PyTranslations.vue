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
                title: "PyTranslations",
                github: "https://github.com/YLashko/translations",
                shortDescription: "A python library made to handle human-generated translations with variables",
                techs: ["Python"],
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
        width: 50%;
    }
</style>