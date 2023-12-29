import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: {
        assignments: Assignments,
        panel: Panel,
    },
    template: `
        <assignments></assignments>

        <panel>
            <template v-slot:heading>
                I am a heading
            </template>

            <template v-slot:default>
                Default looking good
            </template>
        </panel>
    `,
};
