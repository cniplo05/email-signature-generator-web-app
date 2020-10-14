<template>
    <div class="container">
        <div class="row">
            <div class="col bg-dark-dark">
                <div class="text-center">
                    <span><strong>Fill out for new Community Email Signature</strong></span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form>
                    <div class="form-group">
                        <label for="formGroupFirstName">First Name</label>
                        <input v-on:keydown="key" type="text" v-model="first_name" name="first_name" class="form-control" id="formGroupFirstName" placeholder="Juan">
                    </div>
                    <div class="form-group">
                        <label for="formGroupLastName">Last Name</label>
                        <input v-on:keydown="key" type="text" v-model="last_name" class="form-control" id="formGroupLastName" placeholder="Dela Cruz">
                    </div>
                    <div class="form-group">
                        <label for="formGroupEmail">Email</label>
                        <input v-on:keydown="key" type="text" v-model="email" class="form-control" id="formGroupEmail" placeholder="juandelacruz@example.com">
                    </div>
                    <div class="form-group">
                        <label for="formGroupContactNumber">Contact Number</label>
                        <input v-on:keydown="key" type="text" v-model="contact_number" class="form-control" id="formGroupContactNumber" placeholder="+63 995 555 4535">
                    </div>
                    <div class="form-group">
                        <label for="formGroupAddress">Address</label>
                        <input v-on:keydown="key" type="text" v-model="address" class="form-control" id="formGroupAddress" placeholder="Philippines">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { UPDATE_DATA } from "@/store/types/actions.type";

export default {
    name: "Community",
    data() {
        return {
            first_name : '',
            last_name : '',
            email : '',
            contact_number : '',
            address : ''
        }
    },

    methods: {
        key() {
            this.$store
            .dispatch(UPDATE_DATA, { first_name: this.first_name ,last_name: this.last_name, email: this.email, contact_number: this.contact_number, address: this.address })
        },
    }
}
</script>