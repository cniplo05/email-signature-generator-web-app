<template>
    <div class="row">
        <div class="col-lg-12">
            <Tabs>
                <Tab name="Templates" :selected="true">
                    <h1>Template 1</h1>
                    <h1>Template 2</h1>
                    <h1>Template 3</h1>
                </Tab>

                <Tab name="Form">
                    <Internal/>
                </Tab>
            </Tabs>
        </div>
    </div>
</template>

<script>

import Tabs from "@/components/_core/templates/sections/Tabs";
import Tab from "@/components/_core/html/_fragments/Tab";

import Internal from "@/components/_core/templates/forms/001/main";
import Community from "@/components/_core/templates/forms/002/main";
import Management from "@/components/_core/templates/forms/003/main";

export default {
    name: "SidePanel",
    components: {
        Tabs,
        Tab,
        Internal,
        Community,
        Management
    }
}
</script>