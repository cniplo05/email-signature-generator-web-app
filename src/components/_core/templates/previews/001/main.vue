<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="text-left">
                    <span>To: <strong>Your Recipient</strong></span><br>
                    <span>Subject: <strong>Check Out My New Internal Email Signature</strong></span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="text-left">
                    <h3 class="mt-4">{{ currentFormData.first_name }} {{ currentFormData.last_name }}</h3>
                    <hr/>
                    <span>{{ currentFormData.contact_number }}</span><br>
                    <span>{{ currentFormData.email}}</span><br>
                    <span>{{ currentFormData.address}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
    name: "Internal",

    computed: {
        ...mapGetters(["currentFormData"])
    }
}
</script>

<style>
hr{
    border: 1px solid #003cc6;
    border-radius: 5px;
}
</style>