<template>
    <div>
        <div class="Tabs">
            <div class="row bg-info">
                <div class="col border text-center" v-for="Tab in Tabs" :class="{ 'is-active': Tab.isActive }">
                    <a class="text-white" href="javascript:void(0)" @click="selectTab(Tab)">{{ Tab.name }}</a>
                </div>
            </div>
        </div>

        <div class="Tabs-details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tabs",
    data() {
        return {Tabs: [] };
    },

    created() {

        this.Tabs = this.$children;

    },
    methods: {
        selectTab(selectedTab) {
            this.Tabs.forEach(Tab => {
                Tab.isActive = (Tab.name == selectedTab.name);
            });
        }
    }
}
</script>