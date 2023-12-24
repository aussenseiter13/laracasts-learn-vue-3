import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        assignmentList: AssignmentList,
    },
    template: `
    <assignment-list title="In Progress" :assignments="inProgressAssignments"></assignment-list>
    
    <assignment-list title="Completed" :assignments="completedAssignments"></assignment-list>
    
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
};
