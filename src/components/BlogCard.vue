<template>
    <div v-on:click="goToBlog(link)" class="blog-container card">
        <div class="image-container" :style="{'background-image': 'url(\'' + previewImageLink + '\')'}"></div>
        <div class="col info-container">
            <h2>{{ title }}</h2>
            <p class="short-description">{{ shortDescription }}</p>
            <span>{{ timeToRead }}</span>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    props: {
        title: String,
        previewImageLink: String,
        shortDescription: String,
        link: String,
        timeToRead: String,
        id: Number,
    },
    data: function () {
        return {
            router: useRouter()
        }
    },
    methods: {
        goToBlog: function(link) {
            this.router.push(link);
        }
    }
}
</script>

<style scoped>

    .blog-container {
        height: min(600px, 50vh);
        display: flex;
        flex-direction: column;
        padding: 8px;
        margin: 16px 0px 16px 0px;
        transition: all 0.2s ease-in-out;
        background-color: rgb(7, 7, 7);
    }

    .blog-container:hover {
        transform: scale(1.025);
        transition: all 0.2s ease-in-out;
        background-color: rgb(20, 20, 20);
    }

    .info-container {
        padding: 12px;
        flex-grow: 0;
    }

    .image-container {
        flex-grow: 1;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
    }

</style>