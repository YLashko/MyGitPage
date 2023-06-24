<template>
    <component :is="this.projects[this.$route.params.name]"></component>
</template>

<script>
import { shallowRef } from 'vue';
import ThisWebPage from './projects/ThisWebPage.vue';
export default {
    components: { ThisWebPage },
    data: function() {
        return {
            projects: {
                "thiswebpage": shallowRef(ThisWebPage),
            }
        }
    }
}
</script>

<style>

</style>