<script setup>
import Title from '@/components/Title.vue'
import AddAssetList from '@/components/AddAssetList.vue'
</script>

<template>
    <!-- we pass props (args) here to Title.vue component-->
    <Title title="Best Vue Finance" subtitle='Manage all your money and assets with Vue Finance' />
    <AddAssetList />
</template>