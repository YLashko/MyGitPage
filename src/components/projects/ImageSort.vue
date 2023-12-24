<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github"
    :date="project.date">
        <info-box :noHoverAnim="true">
            <p>A program made just for fun, I saw a cool video on YouTube with cool effects made using sorting pixels and wanted to implement something similar.</p>
            <p>The algorithm itself is simple: iterate over all pixels, compare its value (calculated as a sum or one of rgba channels) to the nighbouring pixel, swap if it's bigger. Despite its simplicity, it allows for some cool effects and I implemented quite a few parameters to configurate: threshold allows to set max difference limit, iterations is how many times swapping is applied for each pixel, mode is a color channel selection, multiplier is applied for calculatimg pixel value, it allows to subtract other channels (not selecte in mode) from value, multiplied by a certain constant. Reverse direction reverses iterating direction, reverse sort reverses sorting direction, axis changes sorting axis from X to Y</p>
            <img src="/src/assets/image_bubble_sort_ryan.gif" alt="">
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
                title: "Image Bubble Sort",
                github: "https://github.com/YLashko/imageBubbleSort",
                shortDescription: "A java program for playing with sorting pixels",
                techs: ["Java"],
                link: "",
                date: "Dec 3, 2023 - Dec 4, 2023"
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