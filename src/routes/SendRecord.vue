<!--Copyright 2021 (C) Daiyong Kim, All Rights Reserved-->

<template>
  <div class="Content">
    <h1>{{ title }}</h1>
    <form class="singleRecord">
      <h4>Send Single Record</h4>
      
      <div class="data">
        <label> sessionID </label>
        <input type="text" name="sessionID" id="sessionID" value="0">

        <label> timestamp: </label>
        <input type="text" name="timestamp" id="timestamp" value="0">

        <label> action: </label>
        <input type="text" name="action" id="action" value="0">

        <label> teamID: </label>
        <input type="text" name="teamID" id="teamID" value="0">

        <label> boatID: </label>
        <input type="text" name="boatID" id="boatID" value="0">

        <label> xLocation: </label>
        <input type="text" name="xLocation" id="xLocation" value="0.0">
        <label> zLocation: </label>
        <input type="text" name="zLocation" id="zLocation" value="0.0">
        <label> xHeading: </label>
        <input type="text" name="xHeading" id="xHeading" value="0.0">
        <label> zHeading: </label>
        <input type="text" name="zHeading" id="zHeading" value="0.0">
      </div>
      <div>
        <button v-on:click="sendSingleRecord()">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Controller from '@/mixins/controller'
  
  import { mapActions, mapGetters } from 'vuex'

  class SendRecordController extends Controller {

    constructor( name, subComponentList = []) 
    {
        super( name, subComponentList )
        this.vm = {
        }
        this.props = { // props are passed in when using this component
          title: String
        }
        this.injectActions(mapActions(['doUpdateRecord']));
    }
    
    sendSingleRecord() {
      let current_datetime = new Date()
      let data = {
            sessionID: document.getElementById('sessionID').value,
            timestamp: document.getElementById('timestamp').value,
            action: document.getElementById('action').value,
            teamID: document.getElementById('teamID').value,
            boatID: document.getElementById('boatID').value,
            xLocation: document.getElementById('xLocation').value,
            zLocation: document.getElementById('zLocation').value,
            xHeading: document.getElementById('xHeading').value,
            zHeading: document.getElementById('zHeading').value,
        }          
            
        this.doUpdateRecord(data);
        console.log(data)
    }
  }

  export default new SendRecordController('sendRecord'/* , { subComponent, anotherComponent } */);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singleRecord {
  display: flex;
  flex-direction: column;
}
.item {
  margin-bottom: 10px;
}
button {
  max-width: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
