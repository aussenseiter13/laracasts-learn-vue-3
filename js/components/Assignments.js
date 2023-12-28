import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        assignmentList: AssignmentList,
        AssignmentCreate: AssignmentCreate,
    },
    template: `
    <assignment-list
        title="In Progress" 
        :assignments="inProgressAssignments" 
        >
        <assignment-create @add="add"></assignment-create>
    </assignment-list>
    
    <assignment-list
        v-if="showCompleted"
        @toggle="showCompleted = !showCompleted"
        title="Completed" 
        :assignments="completedAssignments"
        can-toggle
        >
    </assignment-list>


        `,
    data() {
        return {
            assignments: [],
            showCompleted: true,
        };
    },
    created() {
        fetch("http://localhost:3001/assignments")
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
