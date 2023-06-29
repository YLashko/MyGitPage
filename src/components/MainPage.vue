<template>
    <div class="row main">
        <div class="col-lg-3 col-left">
            <div class="sticky-lg-top menu">
                <MenuCategory v-for="(cat, index) in this.categories"
                v-bind:key="index" :title="cat.name" :selected="this.isSelected(index)"
                v-on:click="this.selectCategory(index)" />
            </div>
        </div>
        <div class="col-lg-9 col-right">
            <component v-bind:is="this.getSelectedCategoryComponent()"></component>
        </div>
    </div>
</template>

<script>
import Home from './Home.vue';
import AboutMe from './AboutMe.vue';
import Projects from './Projects.vue';
import MenuCategory from './items/MenuCategory.vue';
import TheLetter from './TheLetter.vue';
import { shallowRef } from 'vue';
export default {
    data: function () {
        return {
            categories: [
                {
                    name: "CV",
                    component: shallowRef(Home)
                },
                {
                    name: "About me",
                    component: shallowRef(AboutMe)
                },
                {
                    name: "Projects",
                    component: shallowRef(Projects)
                },
                {
                    name: "Important!",
                    component: shallowRef(TheLetter)
                }
            ],
            selectedCategory: 0
        };
    },
    components: { Home, AboutMe, Projects, MenuCategory },
    methods: {
        isSelected: function (categoryNumber) {
            return categoryNumber === this.selectedCategory;
        },

        getSelectedCategoryComponent: function () {
            return this.categories[this.selectedCategory].component;
        },

        selectCategory: function (index) {
            this.selectedCategory = index;
        }
    }
}
</script>

<style scoped>
    .main {
        margin: 0;
    }
    .col-left {
        position: sticky !important;
        top: 0 !important;
    }
</style>