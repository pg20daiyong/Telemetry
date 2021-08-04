<!--Copyright 2021 (C) Daiyong Kim, All Rights Reserved-->

<template>
  <div class="content">
    <h2>{{ title }}</h2>
    <table>
        <tbody>
            <tr class="tableHeader" >  
                <td> sessionID </td>
                <td class="tableHeaderMid"> TimeStamp </td>
                <td> Action </td>
                <td class="tableHeaderMid"> teamID </td>
                <td> botID </td>
                <td class="tableHeaderMid"> xLocation </td>
                <td> zLocation </td>
                <td class="tableHeaderMid"> xHeading </td>
                <td> zHeading </td>
            </tr>
            <tr class="tableContent" v-for="(item, index) in getRecords.data" :key="index">              
                <td>{{ item.sessionID }}</td>
                <td class="tableContentMid">{{ item.timestamp }}</td>
                <td>{{ item.action }}</td>
                <td class="tableContentMid">{{ item.teamID }}</td>
                <td>{{ item.botID }}</td>
                <td class="tableContentMid">{{ item.xLocation }}</td>
                <td>{{ item.zLocation }}</td>
                <td class="tableContentMid">{{ item.xHeading }}</td>
                <td>{{ item.zHeading }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
  import GameOjbect from '@/model/GameObject.js'
  import Controller from '@/mixins/controller'
  import { mapActions, mapGetters } from 'vuex'

  class RecordsController extends Controller {

    
    constructor( name, subComponentList = []) 
    {
        super( name, subComponentList )
        this.vm = {
            records: []
        }
        this.props = { // props are passed in when using this component
          title: String
        } 
        this.injectActions(mapActions(['doFetchRecords']));        
        this.injectGetters(mapGetters(['getRecords']));   
        
    }

    gameObjectSetting(){
       // todo
    }

    onBeforeMount() {
        this.doFetchRecords();        
        //console.log(this.$store.state.records);   
    }
  }  
  export default new RecordsController('records'/* , { subComponent, anotherComponent } */);

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tableHeader {
    background: rgb(41, 30, 255);
}
.tableHeaderMid {
    background: rgb(13, 0, 255);
}
.tableContent {
    background: rgb(255, 140, 0);
}
.tableContentMid {
    background: rgb(255, 155, 33);
}
table, th, td {
    color: white;
  /* border: 1px solid black;
  border-collapse: collapse; */
}
table {
    margin-left:auto; 
    margin-right:auto;
    border-spacing: 0px;
    height:300px; 
    overflow:auto;
}
td {
    padding: 10px;
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
