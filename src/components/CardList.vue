<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
    <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 class="text-2xl font-bold">Stock</h2>
            <p class="mt-2 mb-4">
              Add Stock from WSE (API should fetch current markings and update value)
            </p>
            <a
              href="jobs.html"
              class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Add Stock
            </a>
          </Card>
          <Card bg="bg-green-100">
            <h2 class="text-2xl font-bold">Bond</h2>
            <p class="mt-2 mb-4">
              Add Bond, interest rate (TAX vill be deduced automatically)
            </p>
            <a
              href="add-job.html"
              class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
            >
              Add Bond
            </a>
          </Card>
          <Card bg="bg-red-100">
            <h2 class="text-2xl font-bold">Mortgage</h2>
            <p class="mt-2 mb-4">
              Add Mortgage, whole credit value, capital paid off, capital left
            </p>
            <a
              href="add-job.html"
              class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
            >
              Add Bond
            </a>
          </Card>
        </div>
      </div>
    </section>

</template>