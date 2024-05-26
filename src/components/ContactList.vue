<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue';
import { TrashIcon } from '@heroicons/vue/24/solid'
// === components ===
import VIcon from "../common/VICon.vue"
import VInput from "../common/VInput.vue"

const searchInput = ref<string>("");
const emit = defineEmits<{
    (e: 'removeContact', val: string
    ): void,
    (e: 'searchContactList', val: string
    ): void
}>()

defineProps<{
    contacts: IContact[]
}>();

function removeContactHandler(contactId: string) {
    emit('removeContact', contactId)
}
function onInputSearchHandler(e: { target: { value: string } }) {
    emit('searchContactList', e.target.value)
}
</script>

<template>
    <div>
        <VInput class="mb-5" v-model="searchInput" placeholder="Search ..." name="search" type="text"
            @input="onInputSearchHandler" />
        <p v-if="contacts.length == 0 || contacts == null" class="text-center">Empty List</p>
        <div v-else>
            <ul>
                <li class="flex justify-between items-center  [&:not(:last-child)]:mb-2 [&:not(:last-child)]:pb-2 [&:not(:last-child)]:border-b border-gray-500"
                    v-for="(contact, index) in contacts" :key="index">
                    <span>
                        <h4 class="text-sm font-bold">
                            {{ contact.fullName }}
                        </h4>
                        <span class="text-[10px] text-gray-400">
                            {{ contact.phoneNumber }}
                        </span>
                    </span>
                    <button @click="removeContactHandler(contact.id)">
                        <VIcon>
                            <TrashIcon class="size-4 text-red-400" />
                        </VIcon>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
