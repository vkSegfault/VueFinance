<script setup>
import Title from '@/components/Title.vue'
import CardList from '@/components/CardList.vue'
</script>

<template>
    <!-- we pass props (args) here to Title.vue component-->
    <Title title="Best Vue Finance" subtitle='Manage all your money and assets with Vue Finance' />
    <CardList />
</template>