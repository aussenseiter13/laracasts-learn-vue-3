export default {
    template: `
    <button @click="validate" :class="{
        'text-white px-6 py-2 rounded-md disabled:cursor-not-allowed': true,
        'bg-gray-200 hove:bg-gray-400': type == 'muted',
        'bg-green-400 hove:bg-gray-400': type == 'primary',
        'bg-gray-400 hove:bg-gray-400': type == 'secondary',
        'bg-red-400 hove:bg-red-400': processing,
    }" :disabled="processing">
        <slot></slot>
    </button>
    `,
    props: {
        type: {
            type: String,
            default: "primary",
        },

        processing: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        validate() {
            console.log("clicky");
        },
    },
    mounted() {
        console.log("Hello");
    },
};
