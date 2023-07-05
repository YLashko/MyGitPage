<template>
    <div class="menu-category-main" :class="{ isSelected: selected, isNotSelected: !selected }">
        <h1 :class="{ violet: selected }" class="cat-title">{{ title }}</h1>
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
        margin: 16px 0 16px 0;
        height: max-content;
        cursor: pointer;
    }

    .isSelected {
        background-color: rgba(0, 0, 0, 0);
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
        border-right: 4px solid rgb(144, 43, 144);
        transition: all 0.2s ease-in-out;
    }

    .isSelected:hover {
        background-color: rgb(24, 24, 24);
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
        border-right: 4px solid rgb(144, 43, 144);
        transition: all 0.2s ease-in-out;
    }

    .isNotSelected {
        background-color: rgba(0, 0, 0, 0);
        border-right: 0px solid rgb(144, 43, 144);
        transition: all 0.2s ease-in-out;
    }

    .isNotSelected:hover {
        background-color: rgb(24, 24, 24);
        border-right: 2px solid rgb(144, 43, 144);
        transition: all 0.2s ease-in-out;
    }

    .cat-title {
        transition: all 0.2s ease-in-out;
        text-shadow: 2px 2px rgb(144, 43, 144);
    }

    .violet {
        color: rgb(144, 43, 144);
        text-shadow: 0px 0px rgb(0, 0, 0, 0);
        transition: all 0.2s ease-in-out;
    }
</style>