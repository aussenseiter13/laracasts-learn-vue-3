export default {
    template: `
    <form @submit.prevent="add" class="flex flex-row gap-4">
        <input v-model="newAssignment" placeholder="New Assignment..." type="text" />
        <button type="submit" class="bg-blue-600 px-6 py-2 uppercase">Add</button>
    </form>
    `,
    data() {
        return {
            newAssignment: "",
        };
    },
    methods: {
        add() {
            this.$emit("add", this.newAssignment);

            this.newAssignment = "";
        },
    },
};
