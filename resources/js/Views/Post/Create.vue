<script setup>
import axios from 'axios';
import { ref } from 'vue';

// will be extracted to composable
const images = ref([])
function onChangeFile(e) {
    const files = e.target.files
    if (files.length) createImage(files)
}
function createImage(files) {
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader()
        reader.onload = function (e) {
            const imgUrl = e.target.result
            images.value.push(imgUrl)
        }
        reader.readAsDataURL(files[i])
    }
}
function removeImage(index) {
    images.value.splice(index, 1)
}

async function postImages() {
    const res = await axios.post('/api/v1/posts', {
        images: images.value,
    })
    console.log(res);
}
</script>

<template>
    <div>
        <div class="text-center">Select Image</div>
        <input type="file" multiple @change="onChangeFile">
        <button class="p-2 bg-green-200" @click="postImages">Post</button>
        <div v-if="images">
            <div v-for="(img, index) in images">
                <img :src="img" alt="" srcset="">
                <button @click="removeImage(index)">Remove</button>
            </div>
        </div>
    </div>
</template>