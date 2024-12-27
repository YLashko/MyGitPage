<template>
    <div class="row">
        <div class="col-lg-9 order-2 order-lg-1">
            <blog-card v-for="(blog, index) in this.blogs" :key="index"
                :title="blog.title"
                :previewImageLink="blog.previewImageLink"
                :shortDescription="blog.shortDescription"
                :timeToRead="blog.timeToRead"
                :link="'/projects/' + blog.link"
                :id="index"
            ></blog-card>
        </div>
        <div class="col-lg-3 order-1 order-lg-2">
            <div class="sticky-lg-top">

            </div>
        </div>
    </div>
</template>

<script>
import InfoBox from './items/InfoBox.vue'
import BlogCard from './BlogCard.vue';
import { useStore } from 'vuex';
export default {
    components: { InfoBox, BlogCard },
    data: function() {
        return {
            store: useStore(),
            blogs: [
                {
                    title: "Oracle APEX - Dynamic region layout based on user input",
                    previewImageLink: "src/assets/Apex.jpg",
                    shortDescription: "Making Oracle apex regions layout responsive and dynamic with the ability to be configurated by the end user, hopefully without breaking anything",
                    timeToRead: '~20 min',
                    link: "oracle-apex-dynamic-regions-layout"
                }
            ]
        }
    },

    methods: {

    },

    mounted: function() {

    }
}
</script>

<style scoped>
    /* .cat-box {
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

    .blogs-col {
        background-color: rgb(7, 7, 7);
    } */
</style>