<script setup>
import JobListing from "../components/JobListing.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const props = defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false,
    },
});
const isLoading = ref(true);

const jobs = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get("/api/jobs");
        jobs.value = response.data;
    } catch (error) {
        console.error("Error Fetching jobs", error);
    } finally {
        isLoading.value = false;
    }
});
</script>
<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>

            <!-- Show loader spinner -->
            <div v-if="isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing
                    v-for="job in jobs.slice(0, limit || jobs.length)"
                    :key="job.id"
                    :job="job"
                    class=""
                />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <router-link
            to="/jobs"
            class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >View All Jobs</router-link
        >
    </section>
</template>
