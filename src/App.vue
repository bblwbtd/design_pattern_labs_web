<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
        >
            <v-list
            >
                <v-list-item v-for="lab in labs" :key="lab" link @click="page = lab">
                    <v-list-item-content>
                        <v-list-item-title>{{lab}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
                app
                color="primary"
                clipped-left
        >
            <v-app-bar-nav-icon
                    class="white--text"
                    @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title class="white--text" @click="page='index'" style="cursor: pointer">
                Design Pattern Labs
            </v-toolbar-title>
        </v-app-bar>
        <v-content class="background">
            <index v-if="page==='index'" v-on:open_drawer="drawer=true"></index>
            <lab1 v-if="page==='Lab1 Strategy'"></lab1>
            <lab2 v-if="page==='Lab2 Decorator'"></lab2>
            <lab3 v-if="page==='Lab3 State'"></lab3>
            <lab4 v-if="page==='Lab4 Command'"></lab4>
        </v-content>
    </v-app>
</template>

<script>
    import Index from "@/views/index";
    import Lab1 from "@/views/lab1/lab1";
    import Lab2 from "@/views/lab2/lab2"
    import Lab4 from "@/views/lab4/lab4";
    import Lab3 from "@/views/lab3/lab3";

    export default {
        name: 'App',
        components: {
            Lab4,
            Lab1,
            Lab2,
            Lab3,
            Index
        },
        data: () => ({
            drawer: false,
            page: 'index',
            labs: [
                "Lab1 Strategy",
                "Lab2 Decorator",
                "Lab3 State",
                "Lab4 Command",
                "About"
            ]
        }),
    };
</script>
<style>
    @import "css/common.css";
    .v-btn{
        text-transform: none;
    }
</style>
