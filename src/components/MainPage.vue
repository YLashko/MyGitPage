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
import { shallowRef } from 'vue';
import { useStore } from 'vuex';
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
                }
            ],
            selectedCategory: 0,
            store: useStore()
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
            this.store.dispatch("setMainMenuCategory", { cat: index });
        }
    },

    mounted: function() {
        this.selectedCategory = this.store.getters.selected.mainMenuCategory;
    }
}
</script>

<style scoped>
    .main {
        margin: 0;
    }
</style>