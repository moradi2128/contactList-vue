<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
    modelValue: string;
    label?: string,
    placeholder?: string,
    name: string;
    type: string;
    errorMessage?: string | null | undefined
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
    <div>
        <label class="label" :for="name" :is="label">{{ label }}</label>
        <input :type="type" :id="name" :value="modelValue" class="textField__input "
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :placeholder="placeholder" />
        <span is="errorMessage " class="text-[0.7rem] text-red-400">{{ errorMessage }}</span>
    </div>
</template>