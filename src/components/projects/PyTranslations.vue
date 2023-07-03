<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github">
        <info-box>
            <p>Library for python to easily create and use text translation dictionaries. Allows you to embed variables in text. Was created by me while studying the process of making a library for python, also I plan to use it for small projects and telegram bots (this library was created and extended from a class I wrote to handle translations in <a href="/projects/abot">ActivityBot</a>).</p>
            <p>The dictionary is created in a json file and is structured like this:</p>
            <pre class="code">
{
    "en": {
        "hello": {
            "phrase": "Hello {name}",
            "variables": ["name"]
        },

        "mynameis": {
            "phrase": "Hello {companion}! My name is {name}.",
            "variables": ["companion", "name"]
        }
    },

    "fr": {
        "hello": {
            "phrase": "Bonjour {name}",
            "variables": ["name"]
        }
    }
}</pre>
            <p>Using the methods t_lang and t_id, you can translate phrases into the selected language or into the language of the selected user (based on the id, you can pre-record the user and select a language for him), and there is also functionality for the default language if there is no translation for the selected language in the dictionary.</p>
        </info-box>
    </project-base>
</template>

<script>
import InfoBox from '../items/InfoBox.vue';
import ProjectBase from './ProjectBase.vue';
export default {
    components: { ProjectBase, InfoBox },
    data: function() {
        return {
            project: {
                title: "PyTranslations",
                github: "https://github.com/YLashko/translations",
                shortDescription: "A python library made to handle human-generated translations with variables",
                techs: ["Python"],
                link: ""
            }
        }
    }
}
</script>

<style scoped>
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