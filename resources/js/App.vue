<script setup>
import { RouterView } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useRouteLoadingStore } from '@/Store/routeLoading';
import RouteProgressBar from './Components/RouteProgressBar.vue';

const { loading } = storeToRefs(useRouteLoadingStore())

</script>

<template>
    <RouteProgressBar v-if="loading" />
    <RouterView />
</template>