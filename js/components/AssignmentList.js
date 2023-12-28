import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    template: `
    <section
    v-show="assignments.length"
    class="flex flex-col gap-4"
>
    <div class="flex justify-between items-center">
        <h3 class="font-bold text-3xl">{{ title }} <span>({{ assignments.length }})</span></h3>
        <button v-show="canToggle" @click="$emit('toggle')" class="w-8 bg-red-400 text-2xl">&times;</button>
    </div>

    <assignment-tags 
        v-model:currentTag="currentTag"
        :initial-tags="assignments.map(a => a.tag)"
        >
    </assignment-tags>

    <ul class="flex flex-col gap-2">
        <assignment 
            v-for="assignment in filteredAssignments"
            :key="assignment.id"
            :assignment="assignment"
        >
        </assignment>
    </ul>

    <slot></slot>
</section>
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false },
    },
    components: {
        assignment: Assignment,
        assignmentTags: AssignmentTags,
    },
    data() {
        return {
            currentTag: "all",
        };
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag == "all") {
                return this.assignments;
            }

            return this.assignments.filter((a) => a.tag == this.currentTag);
        },
    },
};
