<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github">
        <info-box>
            <p>A program that allows direct manipulation of the r, g, b color channels of images. I originally wrote something similar in python when I was doing a Lagrange interpolation project for pictures. I never finished that project (I didn't have time to do the documentation and implement some functionality that my teacher demanded), but I found the idea of manipulating the colors of an image in this form interesting. In python it was a short function (it was pretty easy to implement it in python), but I was not satisfied with the performance of such a solution, so I decided to rewrite it in Java.</p>
            <p>This project allows you to manipulate the colors of each of the color channels by setting the logic for each of them. It can handle ternary operators with mathematical expressions. This project was a kind of preparation/practice before the practical exam in Java basics, so I decided to write the parser myself. In the end, it turned out to be tens of times slower than Java, but still processed images faster than Python.</p>
            <img src="/src/assets/winxpP.jpg" alt="">
            <img src="/src/assets/winxp.jpg" alt="">
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
                title: "Colors Correction",
                github: "https://github.com/YLashko/colorsCorrection",
                shortDescription: "A java program for manipulating images' colors",
                techs: ["Java"],
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
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 30px;
    }
</style>