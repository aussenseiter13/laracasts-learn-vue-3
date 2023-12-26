import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        assignmentList: AssignmentList,
    },
    template: `
    <assignment-list title="In Progress" :assignments="inProgressAssignments"></assignment-list>
    
    <assignment-list title="Completed" :assignments="completedAssignments"></assignment-list>
    
    <form @submit.prevent="add" class="flex flex-row gap-4">
        <input v-model="newAssignment" placeholder="New Assignment..." type="text" />
        <button type="submit" class="bg-blue-600 px-6 py-2 uppercase">Add</button>
    </form>

        `,
    data() {
        return {
            assignments: [
                { id: 1, name: "Finish project", complete: false },
                { id: 2, name: "Read Chapter 3", complete: false },
                { id: 3, name: "Guguli Muguli", complete: true },
            ],
            newAssignment: "",
        };
    },

    computed: {
        inProgressAssignments() {
            return this.assignments.filter((a) => !a.complete);
        },
        completedAssignments() {
            return this.assignments.filter((a) => a.complete);
        },
    },

    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1,
            });

            this.newAssignment = "";
        },
    },
};
