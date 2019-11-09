import Vue from "vue";
import Vuex from "vuex";
import { ipcRenderer } from "electron";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        windowMaximized: false
    },
    mutations: {
        changeWindowMaximized: function (state, payload) {
            state.windowMaximized = payload;
        },
        oauth: function (state, payload) {
            ipcRenderer.send("oauth", payload);
        }
    },
    actions: {
        windowMinimize: function () { return ipcRenderer.send("EV::windowMinimize"); },
        windowMaximize: function () { return ipcRenderer.send("EV::windowMaximize"); },
        windowRestore: function () { return ipcRenderer.send("EV::windowRestore"); },
        windowClose: function () { return ipcRenderer.send("EV::windowClose"); }
    }
});
//# sourceMappingURL=store.js.map