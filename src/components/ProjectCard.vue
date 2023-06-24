<template>
    <div v-on:click="goToProject(link)" class="project-container card">
        <div class="row">
            <div class="col-lg-8 image-container">
                <div :id="'image-div-'+this.id" class="image-div">
                    
                </div>
            </div>
            <div class="col-lg-4 tech-container">
                <h2>{{ title }}</h2>
                <p class="short-description">{{ shortDescription }}</p>
                <br>
                <h3 v-for="(tech, index) in techs" :key="index">{{ tech }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    props: {
        title: String,
        techs: Array,
        previewImageLink: String,
        shortDescription: String,
        link: String,
        id: Number
    },
    data: function () {
        return {
            router: useRouter()
        }
    },
    methods: {
        goToProject: function(link) {
            this.router.push(link);
        }
    },
    mounted: function() {
        document.getElementById("image-div-"+this.id).style.backgroundImage = "url('"+this.previewImageLink+"')";
        console.log(this.previewImageLink);
    }
}
</script>

<style scoped>
    .image-div {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        aspect-ratio: 16/9;
    }
    .project-container {
        display: inherit;
        padding: 8px;
        margin: 16px 0px 16px 0px;
    }

    .tech-container {
        padding: 12px;
    }

    .image-div {
        padding: 0 0 0 60%;
    }

    .short-description {
    }
</style>