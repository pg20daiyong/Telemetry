<!--Copyright 2021 (C) Daiyong Kim, All Rights Reserved-->
<template>


    <section class="analysis-container">

        <div class="Analysis">{{ name }} your Vue.js App</div>
        <Chart></Chart>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import Chart from '@/components/Chart.vue'
    class AnalysisController extends Controller {
        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Analysis',
            }
            // this.props = {
            //     records :[]
            // }
            //this.injectGetters(['getRecords']);
        }
        
    }
    export default new AnalysisController('pgAnalysis', {Chart});
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