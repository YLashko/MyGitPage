<template>
    <div class="menu-category-main" :class="{ isSelected: selected, isNotSelected: !selected }">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        selected: Boolean
    }
}
</script>

<style scoped>
    .menu-category-main {
        padding: 20px 40px 20px 40px;
        margin: 16px 8px 16px 8px;
        border-radius: 8px;
        height: max-content;
        cursor: pointer;
        z-index: -5;
    }

    .isSelected {
        background-color: rgb(77, 77, 77);
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
        transition: all 0.2s ease-in-out;
    }

    .isSelected:hover {
        background-color: rgb(77, 77, 77);
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
        transition: all 0.2s ease-in-out;
    }

    .isNotSelected {
        background-color: rgb(51, 51, 51);
        box-shadow: 2px 2px 2px rgb(27, 27, 27);
        transition: all 0.2s ease-in-out;
    }

    .isNotSelected:hover {
        background-color: rgb(57, 57, 57);
        box-shadow: 2px 2px 2px rgb(27, 27, 27);
        transition: all 0.2s ease-in-out;
    }
</style>