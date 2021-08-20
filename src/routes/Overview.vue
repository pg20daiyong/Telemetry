<!--Copyright 2021 (C) Daiyong Kim, All Rights Reserved-->
<template>
  <div class="home">
    <h1>Welcome to Telemetry App</h1>
        <div>
                <button v-on:click="sendSingleRecord()">Data Injection</button>
        </div>
        <div>
                <button onClick="window.location.reload();">Refresh Page</button>
        </div>
        <div>
                <button  @click="moveToAdmin">AdminPage</button>
        </div>
        <div>
                <button  @click="moveToLiveview">Position Chart</button>
        </div>
        <div>
                <button  @click="moveToHeatMap">Chart </button>
        </div>
    <!-- <Chart></Chart> -->
    <Records title="Death's History"></Records>
    
  </div>
  
</template>

<script>
    import Controller from '@/mixins/controller'
    import Records from '@/components/Records.vue'
    import { mapActions, mapGetters } from 'vuex'



    class OverviewController extends Controller {


        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
            }
            this.props = { // props are passed in when using this component
            title: String
            }
            this.injectActions(mapActions(['doSendRecord']));
        }
        sendSingleRecord() {
            this.doSendRecord();
        }
        reload(){
                 this.$router.push("");
        }
        moveToAdmin(){
                 this.$router.push("/Admin");
        }
        moveToLiveview(){
                 this.$router.push("/Liveview");
        }
        moveToHeatMap(){
                 this.$router.push("/Analysis");
        }
    }
   
    export default new OverviewController('pgOverview', {Records});
    
    
</script>
<style>
/* Local styles for this template */
    .about-container {
        display: inline-block;
        width: 100%;
    }

    .about {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }
</style>
