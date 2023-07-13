<template>
    <div class="row">
        <div class="col-lg-9 order-2 order-lg-1">
            <div class="projects-col">
                <ProjectCard v-for="(project, index) in this.selectedProjects()" :key="index"
                :title="project.title" 
                :techs="project.techs" 
                :previewImageLink="project.previewImageLink"
                :shortDescription="project.shortDescription"
                :link="'/projects/' + project.link"
                :id="index" />
            </div>
        </div>
        <div class="col-lg-3 order-1 order-lg-2">
            <div class="sticky-lg-top">
                <info-box :title="'Filter'" :noHoverAnim="true">
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
import { useStore } from 'vuex';
export default {
  components: { InfoBox, ProjectCard },
    data: function() {
        return {
            categories: [ "Python", "Django", "SQL", "Pandas", "Java", "HTML/CSS/JS", "Vue.js" ],
            selected: null,
            store: useStore(),
            projects: [
            {
                title: "My Git Page (this page)",
                previewImageLink: "src/assets/ThisWebPagePreview.jpg",
                shortDescription: "The webpage you are currently looking at. Made as a Vue.js web application with vite.",
                techs: ["HTML/CSS/JS", "Vue.js"],
                link: "thiswebpage"
            },
            {
                previewImageLink: "src/assets/abot.jpg",
                title: "Activity Bot",
                shortDescription: "A telegram bot for tracking your daily activity",
                techs: ["Python", "SQL"],
                link: "abot"
            },
            {
                previewImageLink: "src/assets/biletx.jpg",
                title: "BiletX and Sn[ea/ic]kers",
                shortDescription: "'Mobile Applications' university course credit projects",
                techs: ["Vue.js", "HTML/CSS/JS"],
                link: "biletx"
            },
            {
                previewImageLink: "src/assets/blife.jpg",
                title: "BLife",
                shortDescription: "My very first big programming project. A python playground program implementing the genetic algorithm",
                techs: ["Python"],
                link: "blife"
            },
            {
                previewImageLink: "src/assets/catsbombs.jpg",
                title: "The Cats and Bombs Game",
                shortDescription: "A turn-based browser game made with Python+Django, in which players must get to the fish and bring them to the finish cell, with opportunities to interfere with each other, of course",
                techs: ["HTML/CSS/JS", "Python", "Django"],
                link: "catsbombs"
            },
            {
                previewImageLink: "src/assets/ccol.jpg",
                title: "Colours Correction",
                shortDescription: "A java program for manipulating images' colours",
                techs: ["Java"],
                link: "ccol"
            },
            {
                previewImageLink: "src/assets/mrp.jpg",
                title: "MRP Project",
                shortDescription: "A python script-webpage made as a credit project for the 'Integrated Systems' university course",
                techs: ["Python", "HTML/CSS/JS", "Django"],
                link: "mrp"
            },
            {
                previewImageLink: "src/assets/tra.jpg",
                title: "PyTranslations",
                shortDescription: "A python library made to handle human-generated translations with variables",
                techs: ["Python"],
                link: "translations"
            },
            {
                previewImageLink: "src/assets/rrat.jpg",
                title: "RestRats",
                shortDescription: "My thesis project. A website where you can create and review restaurants",
                techs: ["HTML/CSS/JS", "Python", "Django"],
                link: "rrat"
            },
            {
                previewImageLink: "src/assets/restuek.jpg",
                title: "REST UEK Timetable",
                shortDescription: "A rest api that scrapes the Cracow University of Economics' timetable",
                techs: ["Python", "Django"],
                link: "restuek"
            },
            {
                previewImageLink: "src/assets/ror2.jpg",
                title: "Risk of Rain 2 Items",
                shortDescription: "A small web page created to help me and my friends quickly find what a particular ROR2 item does",
                techs: ["Python", "HTML/CSS/JS"],
                link: "ror2"
            },
            {
                previewImageLink: "src/assets/satanua.jpg",
                title: "Satanua",
                shortDescription: "A python library that serves to generate decoder circuits for atanua, a program for designing electronic circuits",
                techs: ["Python"],
                link: "satanua"
            },
            {
                previewImageLink: "src/assets/stack_overflow_learn.jpg",
                title: "Stack Overflow survey analysis",
                shortDescription: "A Stack Overflow survey analysis with Pandas + Torch",
                techs: ["Python", "Pandas"],
                link: "sos"
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
            this.store.dispatch("setFiltersCategory", { cat: this.selected });
        },

        selectedProjects: function() {
            if (this.selected === null) {
                return this.projects;
            }
            return this.projects.filter(project => project.techs.includes(this.selected));
        }
    },

    mounted: function() {
        this.selected = this.store.getters.selected.filtersCategory;
    }
}
</script>

<style scoped>
    .cat-box {
        padding: 7px 8px 1px 8px;
        margin: 0;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0);
        box-shadow: 0 0 0 0 rgb(144, 43, 144);
        transition: all 0.2s ease-in-out;
    }

    .cat-box:hover {
        background-color: rgba(255, 255, 255, 0.07);
        box-shadow: 0 4px 0 0 rgb(144, 43, 144);
        transition: all 0.2s ease-in-out;
    }

    .selected {
        background-color: rgba(255, 255, 255, 0.07);
        box-shadow: 0 1px 0 0 rgb(144, 43, 144);
        transition: all 0.2s ease-in-out;
    }

    .selected:hover {
        background-color: rgba(255, 255, 255, 0.07);
        box-shadow: 0 4px 0 0 rgb(144, 43, 144);
        transition: all 0.2s ease-in-out;
    }

    .projects-col {
        background-color: rgb(7, 7, 7);
    }
</style>