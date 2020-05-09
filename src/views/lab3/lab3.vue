<template>
    <v-container fluid class="fill-height">
        <v-row justify="center" align="center">
            <v-col cols="10" md="6">
                <v-row>
                    <v-col cols="12">
                        <div class="headline white--text">
                            Decorator pattern example -- Elevator Simulator
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-row>
                                <config v-if="page === 'config'" @confirm="on_confirm"></config>
                                <panel v-if="page === 'panel'" :max_floor="max_floor"></panel>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Config from "@/views/lab3/config";
    import Panel from "@/views/lab3/panel";
    export default {
        name: "lab3",
        components: {Panel, Config},
        data: () => ({
            page: 'config',
            max_floor: 10,
        }),
        methods:{
            on_confirm(max_floor){
                this.max_floor = max_floor
                this.page = 'panel'
            }
        }
    }
</script>

<style scoped>

</style>
