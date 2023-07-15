<template>
    <div class="row">
        <div class="col-lg-3 col-left sticky-lg-top">
            <info-box :title="title" :contents="[shortDescription]">
                <a :href="github"><p><img class="github-icon" src="/src/assets/github-mark-white.png" />Github link</p></a>
                <p>🌐 <a v-if="![null, '', undefined].includes(link)" :href="link">Website link</a>
                <a v-else>No website link!</a></p>
                <p>📅 {{ date }}</p>
                <h2 class="cat">Techs:</h2>
                <p v-for="(tech, index) in techs" :key="index">{{ tech }}</p>
            </info-box>
            <info-box>
                <h3>Useful info above! ⬆️</h3>
            </info-box>
        </div>
        <div class="col-lg-9 col-right"><slot /></div>
    </div>
    
</template>

<script>
import InfoBox from '../items/InfoBox.vue';
export default {
    props: {
        title: String,
        shortDescription: String,
        techs: Array,
        github: String,
        link: String,
        date: String
    },
    components: { InfoBox },

    mounted: function() {
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped>
    .cat {
        padding-left: 40px;
    }
    .col-right {
        padding: 0 12px 0 0;
    }
    .col-left {
        padding: 0 0 0 12px;
    }
    .row {
        margin: 0;
    }
    .github-icon {
        height: 22px;
        margin-right: 5px;
        margin-left: 4px;
    }
</style>