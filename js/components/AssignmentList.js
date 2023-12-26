import Assignment from "./Assignment.js";

export default {
    template: `
    <section
    v-show="assignments.length"
    class="flex flex-col gap-4"
>
    <h3 class="font-bold text-3xl">{{ title }}</h3>
    <ul class="flex flex-col gap-2">
        <assignment 
            v-for="assignment in assignments"
            :key="assignment.id"
            :assignment="assignment"
        >
        </assignment>
    </ul>
</section>
    `,
    props: {
        assignments: Array,
        title: String,
    },
    components: {
        assignment: Assignment,
    },
};
