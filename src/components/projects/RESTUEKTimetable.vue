<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github">
        <info-box>
            <p>A project that is an api for scraping the schedule from the UEK University website by creating a request to the site using requests and bs4. Schedule data are written to the database and overwritten if the given record was received more than 30 minutes ago, this is done to reduce the number of outgoing requests to UEK servers and thereby speed up the api.</p>
            <p>There is a choice of query by time and date or by date only, but in any case a record is created in the database from the entire schedule, since the schedule page has data for all dates at once, so 1 query for the entire schedule is enough.</p>
            <p>The data returned by the API is as follows:</p>
            <pre class="code">
[
    {
        "date": "2023-03-07",
        "start_time": "09:45",
        "end_time": "11:15",
        "subject_name": "Programowanie systemów mobilnych",
        "type": "wykład",
        "rescheduled_info": null,
        "professor_name": "prof. UEK dr hab. Janusz Stal",
        "professor_page_link": "https://e-uczelnia.uek.krakow.pl/course/view.php?id=218#section-0"
    },
    {
        "date": "2023-03-07",
        "start_time": "13:15",
        "end_time": "14:45",
        "subject_name": "Programowanie systemów mobilnych",
        "type": "ćwiczenia",
        "rescheduled_info": null,
        "professor_name": "prof. UEK dr hab. Janusz Stal",
        "professor_page_link": "https://e-uczelnia.uek.krakow.pl/course/view.php?id=218#section-0"
    },
    {
        "date": "2023-03-07",
        "start_time": "15:00",
        "end_time": "16:30",
        "subject_name": "Trening algorytmiczny",
        "type": "ćwiczenia do wyboru",
        "rescheduled_info": null,
        "professor_name": "prof. UEK dr hab. Paweł Wołoszyn",
        "professor_page_link": "https://e-uczelnia.uek.krakow.pl/course/view.php?id=1045#section-0"
    }
]
            </pre>

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
                title: "REST UEK Timetable",
                github: "https://github.com/YLashko/RESTUEKTimetableAPI",
                shortDescription: "A rest api that scrapes the Cracow University of Economics' timetable",
                techs: ["Python", "Django"],
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