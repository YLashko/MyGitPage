<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github"
    :date="project.date">
        <info-box :noHoverAnim="true">
            <p>My thesis project. A website in django serving to rate restaurants. The user has the ability to register/login, create a company profile and restaurant pages. It is also possible to create reviews on restaurants, rating them according to 3 criteria. It is also possible to filter restaurants by various criteria such as name, cuisine. The site is still a work in progress, maybe in the future I will add administration functionality and restaurant menus, but a lot of work has already been done.</p>
            <pre>Functionality currently implemented:
    - User profile creating/editing
    - Company profile creating/editing
    - Restaurant page creating/editing
    - Restaurant pictures
    - Restaurant card design
    - Main page
    - Recommendations page sketch
    - Ajax loading of restaurants and reviews
    - Ajax checking of some fields for correctness
    - Search and filter
    - Review creating and deleting
    - Reviews summary
</pre>
        <iframe width="1280" height="720"
        src="https://youtube.com/embed/8Z1AGIh_U30">
        </iframe> 
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
                title: "RestRats",
                github: "https://github.com/YLashko/restaurants-ratings",
                shortDescription: "My thesis project. A website where you can create and review restaurants",
                techs: ["HTML/CSS/JS", "Python", "Django"],
                link: "",
                date: "Aug 22, 2022 - Today"
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
    pre {
        font-family: 'Lato';
        font-size: 20px;
        font-weight: 300;
    }
</style>