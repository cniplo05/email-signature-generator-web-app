<template>
    <div class="container">
        <Tabs>
            <Tab name="Templates" :selected="true">
                <h1>This is templates tab</h1>
            </Tab>

            <Tab name="Form">
                <h1>This is form tab</h1>
            </Tab>
        </Tabs>
    </div>
</template>

<script>

import Tabs from "@/components/_core/templates/sections/Tabs";
import Tab from "@/components/_core/html/_fragments/Tab";

export default {
    name: "SidePanel",
    components: {
        Tabs,
        Tab
    }
}
</script>