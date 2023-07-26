<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github"
    :date="project.date">
        <info-box :noHoverAnim="true">
            <p>I created this bot after not finding the right program or website to easily convert and trim videos to create stickers from them. The bot uses PyTelegramBotAPI, flask and SQLite, several options are available to the user to create stickers from videos, Crop, Crop + Speedup and Speedup, respectively trim to 3 seconds, trim to 9 and speed up and just speed up the video.</p>
            <p>In the case of photos, it is simply cropped to a resolution with a long side of 512 pixels and by converting the object in the following way: file object -> BytesIO -> PIL -> BytesIO -> file object. In this way, the photo may not even be stored in the device's ROM. With video it's a bit more complicated: python libraries don't give as much flexibility in video editing and have limited functionality, so I used ffmpeg. The commands for it were found on the internet and tweaked, and from them I created functions that return a generated command based on the method variables, which is then executed using subprocess.</p>
            <p>In a similar way, in this and my other bot project, I also created queries to the database, which in this case serves as a communication interface between the bot script and the flask server.</p>
            <p>Flask server was created to access logging data to collect performance and error data, it runs alongside the bot in 2 separate processes using the multiprocessing library. I did not use multiprocessing for the bot itself in this project, as most of the ffmpeg functions are already executed in multithreaded mode, and they are by a huge gap the most computationally expensive tasks.</p>
            <img src="/src/assets/easy_stickers_logs.jpg">
            <img class="small" src="/src/assets/easy_stickers_convert.jpg">
            <p>Like my other bot, this one was packed in a docker container and is currently running on my raspberry pi.</p>
        </info-box>
    </project-base>
</template>

<script>
import InfoBox from '../items/InfoBox.vue';
import ProjectBase from './ProjectBase.vue';
export default {
    components: { InfoBox, ProjectBase },
    data: function() {
        return {
            project: {
                title: "EasyStickers Bot",
                github: "https://github.com/YLashko/EasyStickersBot",
                shortDescription: "A bot on telegram for converting images and videos into a desired format and changing their parameters so that they can be used to create stickers by simply forwarding them to the official bot interface for creating stickers.",
                techs: ["Python", "Flask", "SQL"],
                link: "",
                date: "Jul 20, 2023 - Jul 24, 2023"
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
        width: 70%;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 30px;
    }
    .small {
        width: 40%;
    }
</style>