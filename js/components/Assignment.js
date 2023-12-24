export default {
    template: `
    <li
        class="bg-gray-700 px-4 py-2 flex gap-8 justify-between"
    >
        <p>{{ assignment.name }}</p>
    <input
        type="checkbox"
        v-model="assignment.complete"
        :checked="assignment.complete"
    />
</li>
    `,
    props: {
        assignment: Object,
    },
};
