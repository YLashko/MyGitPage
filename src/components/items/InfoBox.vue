<template>
    <div class="info-box" id="info-box" :class="{ hover: noHoverAnim !== true }">
        <h2 class="info-title">{{ title }}</h2>
        <div v-if="contents !== ''" class="info-contents">
            <p style="white-space: pre-line" class="info-contents-p"
            v-for="(line, index) in contents" v-bind:key="index">{{ line }}</p>
            <slot />
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        contents: Array,
        noHoverAnim: Boolean,
    }
}
</script>

<style scoped>
    .info-box {
        padding: 20px 40px 20px 40px;
        margin: 16px 8px 16px 8px;
        border-left: 4px solid rgb(144, 43, 144);
        background-color: rgb(7, 7, 7);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    .hover:hover {
        border-left: 8px solid rgb(144, 43, 144);
        background-color: rgb(24, 24, 24);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    h2 {
        margin-left: 36px;
        text-shadow: 2px 2px rgb(144, 43, 144);
    }
</style>