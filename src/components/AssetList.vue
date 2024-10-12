<script setup>
import JobDataJson from '@/jobs.json'
import { ref, defineProps, onMounted } from 'vue'
import Asset from './Asset.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})

// const jobsJson = ref(JobDataJson);
const jobsJson = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/assets');
        console.log(response)
        jobsJson.value = response.data;
    } catch (error) {
        console.error('Error fetching jobs', error);
    }
});

</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Assets
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- .id and .title are from json keys we imported -->
                <Asset v-for="job in jobsJson.slice(0, limit || jobsJson.length)" :key="job.id" :job="job" >
                    <!-- {{ job.title }} -->
                </Asset>
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/asset"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>

</template>