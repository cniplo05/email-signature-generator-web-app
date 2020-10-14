<template>
    <div class="container">
        <div class="row">
            <div class="col bg-dark-dark">
                <div class="text-left">
                    <span>To: <strong>Your Recipient</strong></span><br>
                    <span>Subject: <strong>Check out my new Community Email Signature</strong></span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="text-left">
                    <h1>{{ currentFormData.first_name }} {{ currentFormData.last_name }}</h1><br>
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
    name: "Community",

    computed: {
        ...mapGetters(["currentFormData"])
    }
}
</script>