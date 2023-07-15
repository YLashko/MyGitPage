<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github"
    :date="project.date">
        <info-box :noHoverAnim="true">
            <p>This is my web page! It's purpose is to compose all the information about me as a programmer in one place.</p>
            <p>This project is made with Vuejs + vite, this is my first experience of creating a components structure more complicated than 
            "make 1 component for each view, exclude header and footer".</p>
            <p>For this project, i've used the vue plugin "router" to manage routes.</p>
            <p>The page is compiled and deployed to GitHub Pages.</p>
            <p>The main page of the project is made in the form of a template main, which includes a menu with positions that point to the content components of the category. The data about the selected position is stored as a local variable, which creates the problem that when you return to this page from the project page, the data about the selected menu position is lost. I intend to fix this problem in the future by using store or redesigning the page to a format with a separate address for each category.</p>
            <img src="/src/assets/ThisWebPagePreview.jpg" />
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
                title: "My Git Page (this page)",
                github: "https://github.com/YLashko/MyGitPage",
                shortDescription: "The webpage you are currently looking at. Made as a Vue.js web application with Vite",
                techs: ["HTML/CSS/JS", "Vue.js"],
                link: "",
                date: "Jun 24, 2023 - Today"
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
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 30px;
    }
</style>