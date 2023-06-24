<template>
    <div class="row">
        <div class="col-lg-3">
            
        </div>
        <div class="col-lg-9">
            <button v-on:click="increaseCounter">{{ counter }}</button>
        </div>
    </div>
</template>

<script>
import MenuCategory from './items/MenuCategory.vue';
export default {
  components: { MenuCategory },
    data: () => {
        return {
            counter: 0,
        }
    },

    methods: {
        increaseCounter: function () {
            this.counter++;
        }
    }
}
</script>

<style>

</style>