<template>
    <div class="row">
        <div class="col-lg-3 col-left sticky-lg-top">
            <info-box :title="title" :contents="[shortDescription]">
                <a :href="github"><p>GitHub</p></a>
                <a v-if="![null, '', undefined].includes(link)" :href="link"><p>Link</p></a>
                <a v-else><p>No website link!</p></a>
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
        link: String
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
</style>