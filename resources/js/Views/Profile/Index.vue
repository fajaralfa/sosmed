<script setup lang="ts">
</script>

<template>
    <div class="p-2 text-sm">
        <div class="flex justify-between items-center pr-6">
            <div class="flex w-20 h-20 bg-red-300 justify-center items-center rounded-full">
                <div class="w-16 h-16 bg-blue-300 rounded-full"></div>
            </div>
            <div class="text-center">
                <div class="font-bold text-lg">239</div>
                <div>posts</div>
            </div>
            <div class="text-center">
                <div class="font-bold text-lg">239</div>
                <div>followers</div>
            </div>
            <div class="text-center">
                <div class="font-bold text-lg">239</div>
                <div>following</div>
            </div>
        </div>
        <div>
            <div class="font-bold">Fajar Ilham Alfarizi</div>
            <div id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea esse quo voluptas saepe
                illo.</div>
        </div>
        <div class="space-x-2 mt-3">
            <button class="py-1 bg-gray-200 w-36">Follow</button>
        </div>
        <div id="grid-posts" class="mt-3">
            <div class="grid grid-cols-3 *:bg-green-200 gap-0.5 *:h-24">
                <RouterLink :to="{name: 'user.posts', params: {id: 1}}"></RouterLink>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>