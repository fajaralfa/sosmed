<template>
    <div class="px-4 h-14 sticky top-0 flex justify-around items-center bg-white z-10">
        <RouterLink :to="{name: 'index'}">Posts</RouterLink>
        <RouterLink :to="{name: 'post.create'}">New Post</RouterLink>
        <RouterLink :to="{name: 'user', params: {username: 'fajaralfrzi'}}">Profile</RouterLink>
    </div>
</template>