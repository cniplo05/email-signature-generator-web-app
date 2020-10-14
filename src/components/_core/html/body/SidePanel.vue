<template>
    <div class="row">
        <div class="col-lg-12">
            <Tabs>
                <Tab name="Templates" :selected="true">
                    <a class="text-white" href="javascript:void(0)" @click="onSwitch(1)">Internal</a><br>
                    <a class="text-white" href="javascript:void(0)" @click="onSwitch(2)">Community</a><br>
                    <a class="text-white" href="javascript:void(0)" @click="onSwitch(3)">Management</a><br>
                </Tab>

                <Tab name="Form">
                    <div v-if="currentTemplate == 1">
                        <Internal/>
                    </div>
                    <div v-else-if="currentTemplate == 2">
                        <Community/>
                    </div>
                    <div v-else>
                        <Management/>
                    </div>
                </Tab>
            </Tabs>
        </div>
    </div>
</template>

<script>

import Tabs from "@/components/_core/templates/sections/001/main";
import Tab from "@/components/_core/html/_fragments/Tab";

import Internal from "@/components/_core/templates/forms/001/main";
import Community from "@/components/_core/templates/forms/002/main";
import Management from "@/components/_core/templates/forms/003/main";

import { SWITCH } from "@/store/types/actions.type";
import { mapGetters } from "vuex";

export default {
    name: "SidePanel",
    components: {
        Tabs,
        Tab,
        Internal,
        Community,
        Management
    },
    computed: {
        ...mapGetters(["currentTemplate"])
    },
    methods: {
        onSwitch(template) {
            this.$store
            .dispatch(SWITCH, { template })
        },
    }
}
</script>