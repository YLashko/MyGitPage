<template>
    <component :is="this.projects[this.$route.params.name]"></component>
</template>

<script>
import { shallowRef } from 'vue';
import ThisWebPage from './projects/ThisWebPage.vue';
import BiletXSnickers from './projects/BiletXSnickers.vue';
import BLIFE from './projects/BLIFE.vue';
import ActivityBot from './projects/ActivityBot.vue';
import Broomberman from './projects/Broomberman.vue';
import ColoursCorrection from './projects/ColoursCorrection.vue';
import MRPProject from './projects/MRPProject.vue';
import PyTranslations from './projects/PyTranslations.vue';
import RestaurantsRatings from './projects/RestaurantsRatings.vue';
import RESTUEKTimetable from './projects/RESTUEKTimetable.vue';
import RoR2Items from './projects/RoR2Items.vue';
import Satanua from './projects/Satanua.vue';
import StackOverflowSurvey from './projects/StackOverflowSurvey.vue';
import EasyStickers from './projects/EasyStickers.vue';
import ImageSort from './projects/ImageSort.vue';
export default {
    components: { ThisWebPage },
    data: function() {
        return {
            projects: {
                "thiswebpage": shallowRef(ThisWebPage),
                "abot": shallowRef(ActivityBot),
                "biletx": shallowRef(BiletXSnickers),
                "blife": shallowRef(BLIFE),
                "catsbombs": shallowRef(Broomberman),
                "ccol": shallowRef(ColoursCorrection),
                "mrp": shallowRef(MRPProject),
                "translations": shallowRef(PyTranslations),
                "rrat": shallowRef(RestaurantsRatings),
                "restuek": shallowRef(RESTUEKTimetable),
                "ror2": shallowRef(RoR2Items),
                "satanua": shallowRef(Satanua),
                "sos": shallowRef(StackOverflowSurvey),
                "eas": shallowRef(EasyStickers),
                "ims": shallowRef(ImageSort),
            }
        }
    }
}
</script>

<style>

</style>