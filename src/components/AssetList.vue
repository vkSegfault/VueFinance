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

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:');
    } catch (error) {
        console.log(error);
    }
});
const jobsJson = ref(JobDataJson);
// console.log(jobs.value);
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Assets
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- .id and .title are from json keys we imported -->
                <Asset v-for="job in jobsJson.jobs.slice(0, limit || jobsJson.jobs.length)" :key="job.id" :job="job" >
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