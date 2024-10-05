<script setup>
import JobDataJson from '@/jobs.json'
import { ref } from 'vue'
import Asset from './Asset.vue';

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
                <Asset v-for="job in jobsJson.jobs" :key="job.id" :job="job" >
                    <!-- {{ job.title }} -->
                </Asset>
            </div>
        </div>
    </section>
</template>