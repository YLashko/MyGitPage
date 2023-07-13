<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github">
        <info-box :noHoverAnim="true">
            <p>The main goal of the project is to analyse StackOverflow survey data and create a neural network to predict salary based on other data present in a survey dataset.</p>
            <p>The project consists of preparing the data for training the neural network, initial analysis of the data for errors, and training the neural network. As a result of the initial preparation phase, I selected and kept the most important variables in my opinion, deleted records with unrealistically large salaries, converted some data into another form, for example, tech stack was in the form of a string with technologies separated by a specific sign, I converted this data into a form in which each unique technology has its own column and as data a logical variable indicating whether there is such a technology in the stack. I did the same operation with other variables, where the data were in the form of a choice of several options.</p>
            <p>Various statistical charts were also collected, such as salaries for form of work (in office/from home), percentage working from home/in office/hybrid for each country, correlation matrix for technologies, salaries for specific technologies, and so on.</p>
            <p>The neural network here is a simple network with 1 hidden layer and a ReLU activation function, I tried several activation functions and in practice ReLU was the best, although the peak with too big salary could not be avoided, for the rest of the predictions were quite accurate (without overtraining I believe).</p>
            <img src="/src/assets/stack_overflow_learn.jpg">
        </info-box>
    </project-base>
</template>

<script>
import InfoBox from '../items/InfoBox.vue';
import ProjectBase from './ProjectBase.vue'
export default {
    components: { ProjectBase, InfoBox },
    data: function() {
        return {
            project: {
                title: "Stack Overflow survey analysis",
                github: "https://github.com/YLashko/stack-overflow-survey-analysis",
                shortDescription: "A Stack Overflow survey analysis with Pandas + Torch",
                techs: ["Python", "Pandas"],
                link: ""
            }
        }
    }
}
</script>

<style>
    p {
        text-indent: 30px;
    }
    img {
        width: 50%;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 30px;
    }
</style>