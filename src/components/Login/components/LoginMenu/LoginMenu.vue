<template>
    <v-layout row shrink align-center justify-center>
        <span
            class="px-3 subheading login-tab cursor-pointer"
            v-bind:class="{ 'tab-active cursor-default': activeTab == 'open' }"
            @click="setActiveTab('open')">
            Open
        </span>
        <span>/</span>
        <span
            class="px-3 login-tab cursor-pointer"
            v-bind:class="{ 'tab-active cursor-default': activeTab == 'create' }"
            @click="setActiveTab('create')">
            Create
        </span>
        <span>/</span>
        <span
            class="px-3 login-tab cursor-pointer"
            v-bind:class="{ 'tab-active cursor-default': activeTab == 'import' }"
            @click="setActiveTab('import')">
            Import
        </span>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store';

export default {
    name: 'loginMenu',
    props: {
        activeTab: String
    },
    computed: {
        ...mapGetters({
            strings: 'i18n/strings'
        }),
        isMobile () {

            return this.$vuetify.breakpoint.smAndDown;
        },
    },
    methods: {
        setActiveTab (tab) {

            if (this.activeTab == tab) {

                return;
            }
            this.$emit('setActiveTab', tab);
        }
    }
};
</script>

<style scoped>
.login-tab {
    color: #AEAEAE;
font-weight: 600;

}
.tab-active {
    color: #7D83FF;

}
</style>
