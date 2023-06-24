<template>
    <div class="row">
        <div class="col-lg-9">

        </div>
        <div class="col-lg-3">
            <info-box :title="'Filter'">
                <div v-for="(cat, index) in this.categories" v-bind:key="index" v-on:click="this.selectCategory(cat)" :class="{ selected: this.selected == cat }" class="cat-box">
                    <h2>{{ cat }}</h2>
                </div>
            </info-box>
        </div>
    </div>
</template>

<script>
import InfoBox from './items/InfoBox.vue'
export default {
  components: { InfoBox },
    data: function() {
        return {
            categories: [ "Python", "Django", "SQL", "JS", "HTML/CSS/JS", "Vue.js" ],
            selected: null,
        }
    },

    methods: {
        isCatSelected: function(category) {
            return this.selected === category;
        },

        selectCategory: function(category) {
            if (this.selected === category) {
                this.selected = null;
            } else {
                this.selected = category;
            }
        } 
    }
}
</script>

<style scoped>
    .cat-box {
        padding: 7px 8px 1px 8px;
        border-radius: 8px;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 0.2s ease-in-out;
    }

    .cat-box:hover {
        background-color: rgb(57, 57, 57);
        transition: background-color 0.1s ease-in-out;
    }

    .selected {
        background-color: rgb(77, 77, 77);
        transition: background-color 0.2s ease-in-out;
    }

    .selected:hover {
        background-color: rgb(77, 77, 77);
        transition: background-color 0.2s ease-in-out;
    }
</style>