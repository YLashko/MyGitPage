<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github"
    :date="project.date">
        <info-box :noHoverAnim="true">
            <p>A bot for recording daily activity reports. Each day at a certain time sends all users a message/reminder about the activity record, one activity record consists of 4 fields: relative/absolute score of mood, relative/absolute score of the work done. The bot then collects all of the user's scores and sends them back to the user as a csv file.</p>
            <p>The bot was created using the pytelegrambotapi and sqlite3 libraries (with the sqlite database, respectively). All database queries are stored in a .py file as functions with changeable parameters, from where they can be easily used.</p>
            <p>Currently the bot is running in the docker container on my raspberry, for which I created a bash script to quickly update from dockerhub and run the current version of the bot.</p>
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
                title: "Activity Bot",
                github: "https://github.com/YLashko/ActivityBot",
                shortDescription: "A telegram bot for tracking your daily activity",
                techs: ["Python", "SQL"],
                link: "https://t.me/activity_track_bot",
                date: "Jan 18, 2023 - Mar 12, 2023"
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