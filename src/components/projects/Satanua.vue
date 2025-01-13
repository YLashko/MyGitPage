<template>
    <project-base
    :title="project.title"
    :shortDescription="project.shortDescription"
    :techs="project.techs"
    :link="project.link"
    :github="project.github"
    :date="project.date">
        <info-box :noHoverAnim="true">
            <p>A library for python created to generate .atanua files (xml scene save file for the circuits modeling program <a href="https://solhsa.com/atanua/">atanua</a>). Generates basically the whole decoder scene, using formulas for any number of inputs and outputs. I created it to simplify my homework (creating decoders by hand was pretty boring, some of them had over 200 logic gates!)</p>
            <p>Suppose we have formulas for a decoder that we don't want to model manually. For example, this would be:</p>
            <p>X = (!A * !B) + (A * B)</p>
            <p>Y = (!A + B) * (A + !B)</p>
            <p>where X, Y are outputs and A, B are inputs. For an input with negation the number in the corresponding array will be 0, for an input without negation 1. It is also possible to set what comes first: addition or multiplication. Then, the input for the program will be as follows (0 is negated input, 1 is not negated):</p>
            <pre class="code">
obj_stack = ObjStack()
wire_stack = WireStack()

decoder = Decoder(
    obj_stack=obj_stack,
    wire_stack=wire_stack,
    formulas=[
        [
            [0, 0],
            [1, 1],
        ],
        [
            [0, 1],
            [1, 0],
        ]
    ],
    modes=[
        DecoderModes.AND_OR,
        DecoderModes.OR_AND,
    ],
    coordinates=[0, 0]
)
decoder.build()</pre>
            <p>Next, the file can be generated using</p>
            <pre class="code">
render = render_all(
    os=obj_stack,
    ws=wire_stack,
    rotate=0,
    mirror_x=False,
    mirror_y=False
)
with open("render.atanua", "w") as f:
    f.write(render)</pre>
            <p>The output scene looks like this:</p>
            <img src="/src/assets/satanua_out.jpg">
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
                title: "Satanua",
                github: "https://github.com/YLashko/satanua",
                shortDescription: "A python library that serves to generate decoder scheme for atanua, a program for designing logic schemes",
                techs: ["Python"],
                link: "",
                date: "~May 8, 2023 - May 10, 2023"
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