import { defineStore } from "pinia";

export const useRouteLoadingStore = defineStore('routeLoading', {
    state: () => ({
        loading: false,
    }),

    actions: {
        startLoading() {
            this.loading = true
        },
        stopLoading() {
            this.loading = false
        }
    }
})