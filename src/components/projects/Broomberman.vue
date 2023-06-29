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
                title: "The Cats and Bombs Game",
                github: "https://github.com/YLashko/Broomberman",
                shortDescription: "A turn-based browser game made with Python+Django, in which players must get to the fish and bring them to the finish line first, with opportunities to interfere with each other, of course",
                techs: ["HTML/CSS/JS", "Python", "Django"],
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