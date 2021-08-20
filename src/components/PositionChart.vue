<!--Copyright 2021 (C) Daiyong Kim, All Rights Reserved-->

<template>
  <div class="Content">
    <canvas class="chart" ref="canvas" width="600" height="250" style="display: inline"></canvas>
  </div>
</template>

<script>
  //Importing Bubble class from the vue-chartjs wrapper
  import {Bubble} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default{
    extends: Bubble,  
    
    mounted () {
       //The data for our dataset
        let records = this.$store.state.records;
        //console.log(this.$store.state)
        var coordinate = []
        const data = { "data": [{ "sessionID": 1, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 2, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 3, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 4, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 5, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 6, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 7, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 8, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 9, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 10, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }, { "sessionID": 11, "timestamp": 0.0, "action": 0, "teamID": 0, "botID": 11, "xLocation": -26.0, "zLocation": 45.099998474121097, "xHeading": -26.0, "zHeading": 47.099998474121097 }] }
        records = {            
            data : data
        }
        console.log(records.data.data.length)
        for(var i = 0; i<records.data.data.length; i++)
        {
            var x = Math.floor(records.data.data[i].xLocation)
            var y = Math.floor(records.data.data[i].zLocation)
            var r = 3
            var z = { x, y, r}
            coordinate.push(z)
        }      
        // to modify ? 
        // what is better way to show graph
        
        let datacollection = {
          //Data to be represented on x-axis
          labels: ['Data'],
          datasets: [
            {
              label: 'positions',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: coordinate
            }
          ]
        };
            // Configuration options go here
            let options = {};
        this.renderChart(datacollection, options)
  }
} 
      
</script>