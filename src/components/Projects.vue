<template>
    <div class="row">
        <div class="col-lg-9 order-2 order-lg-1">
            <ProjectCard v-for="(project, index) in this.selectedProjects()" :key="index"
            :title="project.title" 
            :techs="project.techs" 
            :previewImageLink="project.previewImageLink"
            :shortDescription="project.shortDescription"
            :link="'/projects/' + project.link"
            :id="index" />
        </div>
        <div class="col-lg-3 order-1 order-lg-2">
            <div class="sticky-lg-top">
                <info-box :title="'Filter'">
                    <div v-for="(cat, index) in this.categories" v-bind:key="index" v-on:click="this.selectCategory(cat)" :class="{ selected: this.selected == cat }" class="cat-box">
                        <h2>{{ cat }}</h2>
                    </div>
                </info-box>
            </div>
        </div>
    </div>
</template>

<script>
import InfoBox from './items/InfoBox.vue'
import ProjectCard from './ProjectCard.vue';
export default {
  components: { InfoBox, ProjectCard },
    data: function() {
        return {
            categories: [ "Python", "Django", "SQL", "JS", "Java", "HTML/CSS/JS", "Vue.js" ],
            selected: null,
            projects: [
            {
                title: "My Git Page (this page)",
                previewImageLink: "src/assets/ThisWebPagePreview.png",
                shortDescription: "The webpage you are currently looking at. Made as a Vue.js web application with vite.",
                techs: ["HTML/CSS/JS", "Vue.js"],
                link: "thiswebpage"
            },
            {
                previewImageLink: "src/assets/ThisWebPagePreview.png",
                title: "Activity Bot",
                shortDescription: "A telegram bot for tracking your daily activity",
                techs: ["Python", "SQL"],
                link: "abot"
            },
            {
                previewImageLink: "src/assets/biletx.png",
                title: "BiletX and Sn[ea/ic]kers",
                shortDescription: "'Mobile Applications' university course credit projects",
                techs: ["Vue.js", "HTML/CSS/JS"],
                link: "biletx"
            },
            {
                previewImageLink: "src/assets/blife.png",
                title: "BLife",
                shortDescription: "My very first programming project. A python playground program implementing the genetic algorithm",
                techs: ["Python"],
                link: "blife"
            },
            {
                previewImageLink: "src/assets/catsbombs.png",
                title: "The Cats and Bombs Game",
                shortDescription: "A turn-based browser game made with Python+Django, in which players must get to the fish and bring them to the finish line first, with opportunities to interfere with each other, of course",
                techs: ["HTML/CSS/JS", "Python", "Django"],
                link: "catsbombs"
            },
            {
                previewImageLink: "src/assets/ccol.png",
                title: "Colours Correction",
                shortDescription: "A java program for manipulating images' colours",
                techs: ["Java"],
                link: "ccol"
            },
            {
                previewImageLink: "src/assets/ThisWebPagePreview.png",
                title: "MRP Project",
                shortDescription: "A python script-webpage made as a credit project for the 'Integrated Systems' university course",
                techs: ["Python", "HTML/CSS/JS", "Django"],
                link: "mrp"
            },
            {
                previewImageLink: "src/assets/ThisWebPagePreview.png",
                title: "PyTranslations",
                shortDescription: "A python library made to handle human-generated translations with variables",
                techs: ["Python"],
                link: "translations"
            },
            {
                previewImageLink: "src/assets/rrat.png",
                title: "RestRats",
                shortDescription: "My thesis project. A website where you can create and review restaurants",
                techs: ["HTML/CSS/JS", "Python", "Django"],
                link: "rrat"
            },
            {
                previewImageLink: "src/assets/ThisWebPagePreview.png",
                title: "REST UEK Timetable",
                shortDescription: "A rest api that scrapes the Cracow University of Economics' timetable",
                techs: ["Python", "Django"],
                link: "restuek"
            },
            {
                previewImageLink: "src/assets/ThisWebPagePreview.png",
                title: "Risk of Rain 2 Items",
                shortDescription: "A small web page created to help me and my friends quickly find what a particular ROR2 item does",
                techs: ["Python", "HTML/CSS/JS"],
                link: "ror2"
            },
            {
                previewImageLink: "src/assets/ThisWebPagePreview.png",
                title: "Satanua",
                shortDescription: "A python library that serves to generate decoder circuits for atanua, a program for designing electronic circuits",
                techs: ["Python"],
                link: "satanua"
            },
            ]
        }
    },

    methods: {
        isCatSelected: function(category) {
            return this.selected === category;
        },

        selectCategory: function(category) {
            if (this.selected === category) {
                this.selected = null;
            } else {
                this.selected = category;
            }
        },

        selectedProjects: function() {
            if (this.selected === null) {
                return this.projects;
            }
            return this.projects.filter(project => project.techs.includes(this.selected));
        }
    }
}
</script>

<style scoped>
    .cat-box {
        padding: 7px 8px 1px 8px;
        border-radius: 8px;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 0.2s ease-in-out;
    }

    .cat-box:hover {
        background-color: rgb(57, 57, 57);
        transition: background-color 0.1s ease-in-out;
    }

    .selected {
        background-color: rgb(77, 77, 77);
        transition: background-color 0.2s ease-in-out;
    }

    .selected:hover {
        background-color: rgb(77, 77, 77);
        transition: background-color 0.2s ease-in-out;
    }
</style>