import Assignment from "./Assignment.js";

export default {
    template: `
    <section
    v-show="assignments.length"
    class="flex flex-col gap-4"
>
    <h3 class="font-bold text-3xl">{{ title }} <span>({{ assignments.length }})</span></h3>

    <div class="flex flex-row gap-2">
        <button 
            @click="currentTag = tag"
            v-for="tag in tags" 
            class="bg-blue-400 text-white px-2 py-1 rounded-md"
            :class="{ 'bg-green-400': tag == currentTag }"
        >{{ tag }}</button>
    </div>

    <ul class="flex flex-col gap-2">
        <assignment 
            v-for="assignment in filteredAssignments"
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
    data() {
        return {
            currentTag: "all",
        };
    },
    computed: {
        tags() {
            return ["all", ...new Set(this.assignments.map((a) => a.tag))];
        },
        filteredAssignments() {
            if (this.currentTag == "all") {
                return this.assignments;
            }

            return this.assignments.filter((a) => a.tag == this.currentTag);
        },
    },
};
