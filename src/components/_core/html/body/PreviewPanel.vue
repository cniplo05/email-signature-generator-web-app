<template>
    <Community/>
</template>

<script>

import Internal from "@/components/_core/templates/previews/001/main";
import Community from "@/components/_core/templates/previews/002/main";
import Management from "@/components/_core/templates/previews/003/main";

export default {
    name: "PreviewPanel",
    components: {
        Internal,
        Community,
        Management
    }
}
</script>