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
                title: "MRP Project",
                github: "https://github.com/YLashko/MRP_project",
                shortDescription: "A python script-webpage made as a credit project for the 'Integrated Systems' university course",
                techs: ["Python", "HTML/CSS/JS", "Django"],
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