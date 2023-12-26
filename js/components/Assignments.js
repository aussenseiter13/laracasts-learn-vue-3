import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        assignmentList: AssignmentList,
        AssignmentCreate: AssignmentCreate,
    },
    template: `
    <assignment-list title="In Progress" :assignments="inProgressAssignments"></assignment-list>
    
    <assignment-list title="Completed" :assignments="completedAssignments"></assignment-list>

    <assignment-create @add="add"></assignment-create>

        `,
    data() {
        return {
            assignments: [
                { id: 1, name: "Finish project", complete: false },
                { id: 2, name: "Read Chapter 3", complete: false },
                { id: 3, name: "Guguli Muguli", complete: true },
            ],
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
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1,
            });
        },
    },
};
