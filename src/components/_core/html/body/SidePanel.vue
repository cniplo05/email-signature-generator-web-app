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
                    <h1>This is form tab</h1>
                </Tab>
            </Tabs>
        </div>
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