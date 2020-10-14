<template>
    <Internal/>
    <!-- <div v-if="currentTemplate == 1">
        <Internal/>
    </div>
    <div v-else-if="currentTemplate == 2">
        <Community/>
    </div>
    <div v-else>
        <Management/>
    </div> -->
</template>

<script>

import Internal from "@/components/_core/templates/previews/001/main";
import Community from "@/components/_core/templates/previews/002/main";
import Management from "@/components/_core/templates/previews/003/main";

import { mapGetters } from "vuex";

export default {
    name: "PreviewPanel",
    components: {
        Internal,
        Community,
        Management
    },
    computed: {
        ...mapGetters(["currentTemplate"])
    }
}
</script>