<template>
    <div class="info-box">
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
        contents: Array
    }
}
</script>

<style scoped>
    .info-box {
        padding: 20px 40px 20px 40px;
        margin: 16px 8px 16px 8px;
        border-radius: 8px;
        background-color: rgb(51, 51, 51);
        box-shadow: 2px 2px 2px rgb(27, 27, 27);
    }

    h2 {
        margin-left: 36px;
    }
</style>