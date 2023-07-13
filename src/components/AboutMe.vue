<template>
    <info-box :title="'About me'" :noHoverAnim="true">
        <p>Hello! My name is Yahor Lashko, i'm 20 years old student at Cracow University of Economics. I'm currently on my studies' "finish line", finushing my diploma project and taking my final exams. I came from Belarus in 2020 to study and have been living in Cracow ever since, only returning to my family in Belarus during summer vacations. My family moved here two months ago and we plan to stay in Poland from now on.</p>
        <p>I have the most experience in backend and fullstack development, as well as relational databases, but also know the basics of data science with Pandas + Torch, Linux/Windows administration and docker (the university had a fairly wide profile of courses, in each course I tried to do something extra besides the program). In the projects tab you can find what I think are my most interesting projects.</p>
        <p>My biggest projects are mostly made for fun and the ideas for them are "what if...", because the first thing I like about programming is that it gives you enormous opportunities to create anything you want, where you wouldn't even think about it.</p>
        <div hidden>
            <pre class="default-text">
Like this |
                   |
                   |
                  V
        </pre>
        <div class="img-holder">
            <img src="/src/assets/hello.png" class="pic" id="pic" :height="height" :width="width" @mousemove="Card3D()" @mouseleave="resetCard()"/>
        </div>
    </div>
    </info-box>
</template>

<script>
import InfoBox from './items/InfoBox.vue';
export default {
    components: { InfoBox },
    data: function() {
        return {
            isAnimating: false,
            height: 400,
            width: 300
        }
    },
    methods: {
        map: function(val, minA, maxA, minB, maxB) {
            return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
        },

        Card3D: function(ev) {
            let img = document.getElementById('pic');
            let imgRect = img.getBoundingClientRect();
            let width = this.width;
            let height = this.height;
            let mouseX = event.clientX - imgRect.left;
            let mouseY = event.clientY - imgRect.top;
            let rotateY = this.map(mouseX, 0, this.width, -25, 25);
            let rotateX = this.map(mouseY, 0, this.height, 25, -25);
            let brightness = this.map(mouseY, 0, this.height, 1.5, 0.5);
            
            img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.2)`;
            img.style.filter = `brightness(${brightness})`;
        },

        resetCard: function() {
            let img = document.getElementById('pic');
        
            img.style.transform = 'rotateX(0deg) rotateY(0deg)';
            img.style.filter = 'brightness(1)';
        }
        
    }
}
</script>

<style scoped>
    p {
        text-indent: 30px;
    }
    .pic {
        transition: all 0.1s ease-out;
        border: 2px solid whitesmoke;
    }
    .img-holder {
        margin-top: 50px;
        perspective: 1300px;
    }
    .pic:hover {
        transition: all 0.1s ease-out;
    }
</style>
