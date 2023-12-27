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
            assignments: [],
        };
    },
    created() {
        fetch("http://localhost:3000/assignments")
            .then((res) => res.json())
            .then((data) => {
                this.assignments = data;
            });
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
