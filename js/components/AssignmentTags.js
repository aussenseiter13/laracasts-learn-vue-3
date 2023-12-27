export default {
    template: `
        <div class="flex flex-row gap-2">
            <button 
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags" 
                class="bg-blue-400 text-white px-2 py-1 rounded-md"
                :class="{ 'bg-green-400': tag == currentTag }"
            >{{ tag }}</button>
        </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String,
    },
    computed: {
        tags() {
            return ["all", ...new Set(this.initialTags)];
        },
    },
};
