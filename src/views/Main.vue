<template>
    <section class="py-5">
        <div id="container">
            <div id="jumbotron mt-5">
                <div class="col-sm-8 mx-auto">
                <h1 class="text-center">Welcome Visitor!</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <SidePanel/>
                </div>
                <div class="col-lg-8">
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