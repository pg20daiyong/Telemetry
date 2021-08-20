<!--Copyright 2021 (C) Daiyong Kim-->
<template>
  <div class="Content">
    <canvas class="chart" ref="canvas" width="600" height="250" style="display: inline"></canvas>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import Controller from '@/mixins/controller'
import { mapActions, mapGetters } from 'vuex'
export default {
    extends: Bar,
    mounted () {
       //The data for our dataset
        let records = this.$store.state.records;
        //console.log(records.data)
         const data = { "data": [{ "sessionID": 1, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 2, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 3, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 4, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 5, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 6, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 7, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 8, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 9, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 10, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 11, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }] }
        records = {            
            data : data
        }
        var team0 = 0;
        var team1 = 0;
        for(var i=0; i<records.data.data.length; i++){
          //console.log(records.data[i].teamID)
          if(records.data.data[i].teamID === 0) team0++; 
        }
        console.log(team0)
        console.log(team1 = records.data.data.length - team0)
        // to modify ? 
        // what is better way to show graph
        
        let datum = {
            labels: ['Team0', 'Team1'],
            datasets: [{
                label: 'Deaths by Section',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [team0, team1]
                }]
            };
            // Configuration options go here
            let options = {};
        this.renderChart(datum, options)
  }
}
</script>

<style scoped>
.chart {
  max-width: 600px;
  max-height: 250px;
}
</style>