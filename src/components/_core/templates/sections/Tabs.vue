<template>
    <div>
        <div class="Tabs">
            <ul>
                <li v-for="Tab in Tabs" :class="{ 'is-active': Tab.isActive }">
                    <a href="javascript:void(0)" @click="selectTab(Tab)">{{ Tab.name }}</a>
                </li>
            </ul>
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