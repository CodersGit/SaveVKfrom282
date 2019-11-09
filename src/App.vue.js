import { __decorate, __extends } from "tslib";
// @ts-ignore
import { FluentRevealEffect } from "fluent-reveal-effect";
import TitleBar from "./components/TitleBar.vue";
import { Component, Vue } from "vue-property-decorator";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.mounted = function () {
        FluentRevealEffect.applyEffect(".app-container", {
            clickEffect: true,
            lightColor: "rgba(255,255,255,0.6)",
            gradientSize: 80,
            isContainer: true,
            children: {
                borderSelector: ".reveal-border",
                elementSelector: ".reveal",
                lightColor: "rgba(255,255,255,0.3)",
                gradientSize: 150
            }
        });
    };
    App.prototype.beforeUpdate = function () {
        FluentRevealEffect.clearEffect(".app-container");
    };
    App.prototype.updated = function () {
        FluentRevealEffect.applyEffect(".app-container", {
            clickEffect: true,
            lightColor: "rgba(255,255,255,0.6)",
            gradientSize: 80,
            isContainer: true,
            children: {
                borderSelector: ".reveal-border",
                elementSelector: ".reveal",
                lightColor: "rgba(255,255,255,0.3)",
                gradientSize: 150
            }
        });
    };
    App = __decorate([
        Component({
            components: {
                TitleBar: TitleBar
            },
        })
    ], App);
    return App;
}(Vue));
export default App;
//# sourceMappingURL=App.vue.js.map