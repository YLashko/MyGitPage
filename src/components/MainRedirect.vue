<template>

</template>

<script>
import { useRouter } from 'vue-router';
export default {
    data: function() {
        return {
            router: useRouter(),
        }
    },
    mounted: function() {
        this.router.push('/cv');
    }
}
</script>

<style>

</style>
