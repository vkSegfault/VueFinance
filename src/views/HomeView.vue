<script setup>
import Title from '@/components/Title.vue'
import CardList from '@/components/CardList.vue'
import AssetList from '@/components/AssetList.vue';
</script>

<template>
    <!-- we pass props (args) here to Title.vue component-->
    <Title title="Best Vue Finance" subtitle='Manage all your money and assets with Vue Finance' />
    <CardList />
    <AssetList :limit="4" showButton="true"/>
</template>