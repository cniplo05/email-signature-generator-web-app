<template>
    <section>
        <div>
            <div class="row">
                <div class="col-lg-3 bg-dark text-white">
                    <SidePanel/>
                </div>
                <div class="col-lg-9 bg-secondary text-white">
                    <PreviewPanel/>
                </div>
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