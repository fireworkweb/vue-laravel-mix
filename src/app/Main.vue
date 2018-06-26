<template>
    <div class="main-app">
        <h1>Laravel Mix example with Vue</h1>

        <app-another-component></app-another-component>
    </div>
</template>

<script>
import AppAnotherComponent from './AnotherComponent';

export default {
    name: 'Main',

    components: {
        AppAnotherComponent,
    },
};
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Roboto:100,400,400i,700';

body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    min-width: 1200px;
    overflow: hidden;
}
</style>
