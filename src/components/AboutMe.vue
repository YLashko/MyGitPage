<template>
    <info-box :title="'About me'">
        <p>Hello! My name is Yahor Lashko, i'm 20 years old student at Cracow University of Economics. I'm currently on my studies' "finish line", finushing my diploma project and taking my final exams. I came from Belarus in 2020 to study and have been living in Cracow ever since, only returning to my family in Belarus during summer vacations. My family moved here two months ago and we plan to stay in Poland from now on.</p>
        <p>I have the most experience in backend and fullstack development, as well as relational databases, but also know the basics of data science, Linux administration and docker (the university had a fairly wide profile of courses, in each course I tried to do something extra besides the program). In the projects tab you can find what I think are my most interesting projects.</p>
        <p>My biggest projects are mostly made for fun and the ideas for them are "what if...", because the first thing I like about programming is that it gives you enormous opportunities to create anything you want, where you wouldn't even think about it.</p>
    </info-box>
</template>

<script>
import InfoBox from './items/InfoBox.vue'
export default {
  components: { InfoBox },

}
</script>

<style scoped>
    p {
        text-indent: 30px;
    }
</style>