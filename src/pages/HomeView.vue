<script setup lang="ts">

import { computed, onMounted, ref } from "vue";
import ContactForm from "../components/ContactForm.vue"
import ContactList from "../components/ContactList.vue"
import { getFromLocalStorage, setLocalStorage } from "../services/ContactService";

const contactList = ref<IContact[]>([])
const searchParams = ref<string>("")

onMounted(() => {
    const getContactList = getFromLocalStorage("contactLis") || [];
    contactList.value = getContactList
})
const filteredContactList = computed(() => {
    const filteredList = contactList.value.filter((contact: IContact) => {
        return contact.fullName?.toLowerCase().includes(searchParams.value.toLowerCase())
    });
    return filteredList
})
function addContactItemHandler(val: IContact) {
    contactList.value.push(val)
    setLocalStorage("contactLis", contactList.value)
}
function removeContactHandler(id: string) {
    const filterContactList = contactList.value.filter((contact) => contact.id !== id)
    // const findIdexOf = contactList.value.findIndex((contact:IContact) => contact.id == id))
    // contactList.value.splice(findIdexOf,1)

    contactList.value = filterContactList
    setLocalStorage("contactLis", filterContactList)
}

function searchListHandler(val: string) {
    searchParams.value = val
}
</script>

<template>
    <main class="container">
        <h1 class="my-4 font-medium text-2xl">Contact List</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- === Form === -->
            <div class="min-h-[100px] bg-slate-800">
                <ContactForm @addContactItem="addContactItemHandler" />
            </div>
            <!-- ===  contact List === -->
            <div class="min-h-[100px] bg-gray-900 p-2 rounded-md shadow-xl">
                <ContactList :contacts="filteredContactList" @removeContact="removeContactHandler"
                    @searchContactList="searchListHandler" />
            </div>
        </div>
    </main>
</template>

<style scoped></style>