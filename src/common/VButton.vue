<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  onClick?: (payload: MouseEvent) => void,
  // typeBtn: "button" | "reset" | "submit" | undefined
}>();

</script>

<template>
  <button @click="onClick" class="btn btn__primary">
    <slot>Submit</slot>
  </button>
</template>