# Telemetry

### **PG20 T4 Cloud Computing - A3: Telemetry Admin System - Round Trip Data**

Submitted by: Daiyong Kim
Date: 02/08/2021

---

#### **Description of what the project does**

This project shows the client app running in cloud(Google). and the admin page functioning to accept access and display telemetry data generated from game data.

#### **How to use**

---

- fire base emulator run:
- go to functions directory
- > npm run serve
- go to: http://localhost:5001

- client application run:
- > npm run client
- go to: http://localhost:8080

> go to http://localhost:5001

1. this table shows nothing.
2. go to http://localhost:8080/#/
3. click Data Injection (data store to firebase emulator)
4. click Refresh Page (load data)
5. click AdminPage (you can modify data from sessionID)
6. click Position Cart
7. click Chart
8. go to http://localhost:5001
9. you can check firebase data

### **Package Install**

- npm install vuex
- npm install firebase
- npm install firebase-functions
- npm install -g firebase-admin
- npm install axios
- npm install vue-router
- npm install --save vue-chartjs
- npm install --save chart.js
- npm install chart.js@2

## Authors

- **Daiyong Kim** - _Telemetry Application_

## License

This project is licensed under the MIT License
