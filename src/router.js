/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );


import Operation from '@/routes/Operation.vue'
//import Analysis from '@/routes/Analysis.vue'
//import Liveview from '@/routes/Liveview.vue'
import Overview from '@/routes/Overview.vue'
import SendRecord from '@/routes/SendRecord.vue'


export default new Router({
    routes: [
        { path: "/", name: "Overview", component: Overview , props: true},// props: { name: "Modify Data" } },
        //{ path: "/analysis", name: "Analysis", component: Analysis , props: true},
        // { path: "/liveview", name: "Liveview", component: Liveview , props: true},
        { path: "/admin", name: "Operation", component: Operation , props: true},
        { path: "/SendRecord", name: "SendRecord", component: SendRecord }
        // , {
        //     children:
        //         [
        //             { path: "/chart", name: "Chart", component: CharacterData, props: true }
        //         ]
        // }

    ]
});