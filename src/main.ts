import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router";
import {createPinia} from "pinia"
import {authProtectedApi, fetchData, publicApi} from "@/plugins/axios"
import {numberWithSpaces} from "@/provides/numFormater"

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.provide("axios", publicApi)
app.provide("fetchData", fetchData)
app.provide("protectedApi", authProtectedApi)
app.provide("numFormat", numberWithSpaces)

app.mount('#app')
