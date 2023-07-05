<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github">
        <info-box :noHoverAnim="true">
            <p>A project based on a project from one video on YT that I don't remember. </p>
            <p>Its main component is a map on which the "bots" are located. Bots can get energy, walk around, eat other bots or corpses, and so on. Each cell has an energy source; energy sources differ in the amount of energy extracted and the type of the energy.</p>
            <img src="/src/assets/blife_new.gif">
            <p>The bots do not have any artificial intelligence, instead they are controlled by a set of commands represented by numbers from 0 to 63 in an array of 64 commands long. The commands are executed one after another, but there may also be conditional operators, for example, checking a neighboring cell. In this case, the bot checks the cell to which it is turned, and, depending on the result (which object is on that cell: a similar bot, a different bot, a blank space, a corpse, or a wall), takes the digit from the corresponding indent in the array of commands and moves the current command pointer to the indent that number indicated in the array. In this way evolution produces complex bots capable of joining colonies, sharing energy with comrades, attacking enemies, using energy more sparingly in case of energy shortage, and so on.</p>
            <img src="/src/assets/blife_timelapse.gif">
            <p>I also created additional functionality such as saving/loading scenes, copying bots, different render modes, pause, recording statistics.</p>
            <img src="/src/assets/blife_stats.jpg">
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
                title: "BLife",
                github: "https://github.com/YLashko/Blife-kivy",
                shortDescription: "My very first programming project. A python playground program implementing the genetic algorithm",
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
        width: 60%;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 30px;
    }
</style>