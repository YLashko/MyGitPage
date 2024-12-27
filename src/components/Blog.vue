<template>
    <component :is="this.blogs[this.$route.params.name]"></component>
</template>

<script>
import { shallowRef } from 'vue';
import OracleApexDynamicRegionsLayout from './blogs/OracleApexDynamicRegionsLayout.vue';

export default {
    components: { OracleApexDynamicRegionsLayout },
    data: function() {
        return {
            blogs: {
                "oracle-apex-dynamic-regions-layout": shallowRef(OracleApexDynamicRegionsLayout),
            }
        }
    }
}
</script>

<style>

</style>