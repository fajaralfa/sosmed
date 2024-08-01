<script setup>
const props = defineProps({
    caption: String
})

</script>

<template>
    <div class="text-sm">
    {{ caption }}
    </div>
</template>