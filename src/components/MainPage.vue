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
            <component v-bind:is="this.getSelectedCategoryComponent(this.categories)"></component>
        </div>
    </div>
</template>

<script>
import Home from './Home.vue';
import AboutMe from './AboutMe.vue';
import ProjectsBrowse from './ProjectsBrowse.vue';
import BlogsBrowse from './BlogsBrowse.vue';
import MenuCategory from './items/MenuCategory.vue';
import { shallowRef } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from  'vue-router';
import WorkExperience from './WorkExperience.vue';
export default {
    data: function () {
        let categories = [
            {
                name: "CV",
                path: "cv",
                component: shallowRef(Home)
            },
            {
                name: "About me",
                path: "about-me",
                component: shallowRef(AboutMe)
            },
            {
                name: "Projects",
                path: "projects",
                component: shallowRef(ProjectsBrowse)
            },
            {
                name: "Blog",
                path: "blog",
                component: shallowRef(BlogsBrowse)
            },
            {
                name: "Work experience",
                path: "work-experience",
                component: shallowRef(WorkExperience)
            }
        ];

        return {
            categories: categories,
            selectedCategory: categories.findIndex((cat) => { return cat.path == this.$route.params.category }),
            store: useStore(),
            router: useRouter()
        };
    },

    components: { Home, AboutMe, ProjectsBrowse, BlogsBrowse, MenuCategory },

    methods: {
        isSelected: function (catIndex) {
            return catIndex === this.selectedCategory;
        },

        getSelectedCategoryComponent: function () {
            if (this.selectedCategory === null) {
                return null;
            }
            return this.categories[this.selectedCategory].component;
        },

        selectCategory: function (index) {
            this.selectedCategory = index;
            this.store.dispatch("setMainMenuCategory", { cat: index });
            this.router.push('/' + this.categories[this.selectedCategory].path);
        }
    },

    mounted: function() {
        
    }
}
</script>

<style scoped>
    .main {
        margin: 0;
    }
</style>