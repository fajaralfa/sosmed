<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';

const progress = ref(0)
onMounted(() => {
    setTimeout(() => {
        id = setInterval(() => progress.value++, 3)
        watch(progress, (v) => {
            if (v >= 100) clearInterval(id)
        })
    }, 200)
})
onUnmounted(() => progress.value = 0)
</script>

<template>
    <div class="fixed top-0 w-screen h-1 z-[11]">
        <div class="bg-blue-400 h-full" :style="{width: `${progress}%`}"></div>
    </div>
</template>