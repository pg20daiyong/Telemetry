<!--Copyright 2021 (C) Daiyong Kim, All Rights Reserved-->
<template>


    <section class="operation-container">
        <h2>Welcome to Admin</h2>

        <!-- <div class="Operation">{{ name }} your Vue.js App</div> -->
        <div title="Welcome to Operation Page"/>
         <button  @click="modifyData">Modify Data</button>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    

    class OperationController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.props = {
                name: String,
            }
        }

        modifyData() {
            this.$router.push("SendRecord");
        }
    }

    export default new OperationController('pgOperation');

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
