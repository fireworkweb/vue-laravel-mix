<template>
    <div class="another-component">
        <p class="you-can-use-scss">You can use Scss!</p>

        <button
            :disabled="loading"
            @click="getSomethingFromBackend()"
        >Trigger something</button>

        <p v-if="loading">Getting information...</p>
    </div>
</template>

<script>
export default {
    name: 'AnotherComponent',

    data: () => ({
        loading: false,
    }),

    methods: {
        async someTimeTakingMethod () {
            return new Promise(resolve => setTimeout(resolve, 5000));
        },

        async getSomethingFromBackend () {
            this.loading = true;

            await this.someTimeTakingMethod();

            this.loading = false;
        },
    },
};
</script>

<style lang="scss">
.another-component {
    .you-can-use-scss {
        color: tomato;
    }
}
</style>
