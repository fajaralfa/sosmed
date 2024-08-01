<script setup lang="ts">
import PostCaption from './PostCaption.vue';
</script>

<template>
    <div class="content space-y-1 p-2 bg-white rounded">
        <div class="flex gap-1 items-center">
            <div class="w-6 h-6 bg-blue-200 rounded-full"></div>
            <div>
                <div class="text-xs">fajaralfrzi</div>
            </div>
            <div class="text-xs ml-auto mr-4">3d</div>
        </div>
        <div class="bg-slate-100 rounded-md min-h-52 flex justify-center items-center">Image</div>
        <div>
            <div class="space-x-2 text-lg font-bold">
                <span>L</span>
                <RouterLink :to="{ name: 'post.comments', params: {id: 1} }">C</RouterLink>
                <span>%</span>
            </div>
            <div class="text-xs opacity-60">Liked by 10</div>
        </div>
        <div>
            <PostCaption caption="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ipsam nesciunt, veritatis voluptatem quos porro officiis, aut, modi cumque aliquam quam a repellat voluptatum aliquid at dolores? Consequatur, nisi.
            " />
        </div>
        <div class="text-xs opacity-60">10 May 2023</div>
    </div>
</template>