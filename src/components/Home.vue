<template>
    <div class="row">
        <div class="col-lg-6 inner-col-left">
            <InfoBox
            title="Education" 
            v-bind:contents="['Cracow University of Economics', 'Applied Informatics (Informatyka Stosowana)', 'Bachelor\'s degree', 'GPA - 4.41', 'Oct 2020 - Oct 2023']">
            </InfoBox>
            <InfoBox 
            title="Contact me" 
            v-bind:contents="['Email: dewreator2@gmail.com', 'Phone: +48887768297']">
            </InfoBox>
            <InfoBox 
            title="Links">
            <a href="https://github.com/YLashko"><p>GitHub</p></a>
            <a href="https://www.linkedin.com/in/yahor-lashko-a1a222253/"><p>LinkedIn</p></a>
            <a href="https://www.codewars.com/users/WymAx"><p>Codewars</p></a>
            </InfoBox>
            <info-box
            :title="'My work environment'"
            :contents="['Win10/11, Linux Raspbian', 'VSCode/Pycharm/Intellij', 'GitHub', 'Docker', 'Microsoft Office/Google Docs', 'SQL Server Management Studio']">
            </info-box>
        </div>
        <div class="col-lg-6 inner-col-right">
            <InfoBox 
            title="Languages" 
            v-bind:contents="['Polish: fluent', 'Russian: fluent', 'Belarusian: native', 'English: fluent']">
            </InfoBox>
            <InfoBox 
            title="My stack" 
            v-bind:contents="['Python - ⭐⭐⭐⭐⭐',
            'SQL - ⭐⭐⭐⭐⭐', 'Django - ⭐⭐⭐⭐',
            'Frontend with HTML/CSS/JS - ⭐⭐⭐',
            'Java - ⭐⭐⭐',  
            'Vue.js - ⭐⭐',
            'Pandas - ⭐⭐',
            'Selenium - ⭐⭐']">
            </InfoBox>
            <InfoBox 
            title="Download">
            <a href="/src/downloads/Transcript_of_records-219145.pdf"><p>Grades transcript</p></a>
            <a href="/src/downloads/CV_Yahor_Lashko_en.pdf"><p>--> CV &lt;--</p></a>
            <a href="/src/downloads/YLashko_praca_dyplomowa.pdf"><p>Thesis</p></a>
            <a href="mailto: dewreator2@gmail.com"><p>If the recruitment process requires my work permit, you can email me.</p></a>
            </InfoBox>
        </div>
    </div>
</template>

<script>
import InfoBox from './items/InfoBox.vue';
export default {
    components: { InfoBox },
}
</script>

<style scoped>
    .inner-col-left, .inner-col-right {
        padding: 0;
    }
</style>