<template>
    <section>
        <div class="row bg-white">
            <div class="col-lg-3 bg-dark text-white">
                <SidePanel/>
            </div>
            <div class="col-lg-9 align-self-center">
                <PreviewPanel/>
            </div>
        </div>
    </section>
</template>

<script>

import SidePanel from "@/components/_core/html/body/SidePanel";
import PreviewPanel from "@/components/_core/html/body/PreviewPanel";

export default {
    name: "Main",
    components : {
        PreviewPanel,
        SidePanel
    }
}
</script>