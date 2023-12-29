export default {
    template: `
        <div :class="{
            'flex flex-col gap-2' : true,
            'bg-white' : theme == 'light',
            'bg-gray-700' : theme == 'dark'
            }">
            <h2 v-if="$slots.heading" class="text-2xl font-bold">
                <slot name="heading"></slot>
            </h2>
                <slot></slot>
        </div>
    `,
    props: {
        theme: { type: String, default: "dark" },
    },
};
