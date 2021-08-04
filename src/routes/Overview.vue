<!--Copyright 2021 (C) Daiyong Kim, All Rights Reserved-->
<template>
  <div class="home">
    <h1>Welcome to Telemetry App</h1>
    <!-- <Chart></Chart> -->
    <Records title="Death's History"></Records>
  </div>
</template>

<script>
    import Controller from '@/mixins/controller'
    import Records from '@/components/Records.vue'


    class OverviewController extends Controller {


        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Overview',
            }
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
