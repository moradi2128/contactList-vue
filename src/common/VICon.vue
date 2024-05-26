<script lang="ts" setup>
import { defineProps } from "vue"
defineProps<{
    class?: String
}>();
</script>
<template>
    <span class="delete-btn" :class="class">
        <slot>Icon</slot>
    </span>
</template>