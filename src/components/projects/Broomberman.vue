<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github">
        <info-box>
            <p>My most recent project at this time - a browser game for 2-4 people. All players start at the prearranged start locations on the pre-created map, and try to get to the fish and bring it to the finish point. To create the game you need 1 device as a "monitor", on which you can see the outcome of the moves. Each player plays on his own device (preferably a cell phone), making a turn of 3 moves on the map squares and using a maximum of 1 bonus. Keys can open doors, removing them from the map, when dying the player moves to his starting position and the gold key and fish fall out on the square where the player died (if he had any).  ...Yeah, these white things are rocks</p>
            <img src="/src/assets/cats_bombs_2.gif">
            <p>The interest of the game is that each player does not know what bonuses each other player has and what move he will make.</p>
            <img src="/src/assets/cats_bombs_bomb.gif">
            <p>The game's interface was chosen as the most suitable for mobile devices, as it is most comfortable to play in such a way.</p>
            <img class="vertical-img" src="/src/assets/cats_bombs_interface.jpg">
            <p>The game has a user management system and a lobby system (multiple games running simultaneously are supported).</p>
            <img src="/src/assets/cats_bombs_lobby.jpg">
            <p>I used the pixijs library to create the graphics, the script for the movement and bonuses animations was written by myself.</p>
            <p>It is still WIP! There are some not gamebreaking bugs, I will fix everything and add some maps after I do my thesis.</p>
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
                title: "The Cats and Bombs Game",
                github: "https://github.com/YLashko/Broomberman",
                shortDescription: "A turn-based browser game made with Python+Django, in which players must get to the fish and bring them to the finish cell, with opportunities to interfere with each other, of course",
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
        width: 70%;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 30px;
    }
    .vertical-img {
        max-height: 80vh;
        width: auto;
    }
</style>