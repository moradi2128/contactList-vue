<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
import VInput from '../common/VInput.vue';
import VButton from '../common/VButton.vue';
import { uuid } from '../utils/uuid';

const emit = defineEmits<{
    (e: 'addContactItem', val: IContact
    ): void
}>()

// === Ref ===
const fullName = ref<string>("");
const phoneNumber = ref<string>("");

const errors = ref<{ phoneNumberError: string | null, fullNameError: string | null }>({
    fullNameError: null,
    phoneNumberError: null
});

// === change Handler ===
const onInputFullNameHandler = (e: { target: { value: string } }) => {
    fullName.value = e.target.value;
    errors.value.fullNameError = ""

};
const onInputPhoneNumberHandler = (e: { target: { value: string } }) => {
    phoneNumber.value = e.target.value;
    errors.value.phoneNumberError = ""
};

// === Validation Handler ===
function isCheckForm(): boolean {
    if (fullName.value.length !== 0 && phoneNumber.value.length !== 0) {
        return true
    }

    if (fullName.value.length === 0) {
        errors.value.fullNameError = "Place enter your Full Name"
    }
    if (phoneNumber.value.length === 0) {
        errors.value.phoneNumberError = "Place enter your Phone Number"
    }
    return false

}

function onResetHandler() {
    phoneNumber.value = ""
    fullName.value = ""
}
// === Submit Handler ===
function onSubmitHandler() {
    if (isCheckForm()) {
        // console.log("submit");

        const newContactModel: IContact = {
            id: uuid(),
            fullName: fullName.value,
            phoneNumber: phoneNumber.value,
        }
        emit("addContactItem", newContactModel)
        onResetHandler()
    }
}
</script>

<template>
    <div class="p-2">
        <form @submit.prevent="onSubmitHandler" class="space-y-5">
            <VInput label="Full Name" v-model="fullName" placeholder="mohammad moradi" name="E-mail" type="text"
                :errorMessage="errors.fullNameError" @input="onInputFullNameHandler" />
            <VInput v-model="phoneNumber" label="Phone Number" placeholder="09121234567" name="phoneNumber" type="text"
                :errorMessage="errors.phoneNumberError" @input="onInputPhoneNumberHandler" />
            <VButton class="w-full">Add</VButton>
        </form>
    </div>
</template>
