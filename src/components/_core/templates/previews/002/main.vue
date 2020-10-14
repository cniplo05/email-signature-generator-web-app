<template>
    <div class="container">
        <div class="row">
            <div class="col bg-dark-dark">
                <div class="text-left">
                    <span>To: <strong>Your Recipient</strong> </span><br>
                    <span>Subject: <strong>Check out my new Community Email Signature</strong></span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="text-left">
                    <h1>{{ first_name }} {{ last_name }}</h1><br>
                    <span>{{ contact_number }}</span><br>
                    <span>{{ email}}</span><br>
                    <span>{{ address}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Community"
}
</script>