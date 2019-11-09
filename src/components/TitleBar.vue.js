import { __decorate, __extends } from "tslib";
id;
"titlebar" >
    id;
"drag-region" >
    id;
"window-title" >
    SaveVKFrom282 < /span>
    < /div>
    < div;
id = "window-controls" >
    --WindowButton;
text = "&#xE921;";
id = "minimize";
action = "windowMinimize" /  >
    v - ;
if ( = "!this.$store.state.windowMaximized")
    text = "&#xE922;";
id = "maximize";
action = "windowMaximize" /  >
    v - ;
text = "&#xE923;";
id = "restore";
action = "windowRestore" / -- >
    text;
"&#xE8BB;";
id = "close";
action = "windowClose" /  >
    /div>
    < /div>
    < /header>
    < /template>
    < script;
lang = "ts" >
;
import WindowButton from "./WindowButton.vue";
import { ipcRenderer } from "electron";
import { Component, Vue } from "vue-property-decorator";
var TitleBar = /** @class */ (function (_super) {
    __extends(TitleBar, _super);
    function TitleBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleBar.prototype.mounted = function () {
        var _this = this;
        ipcRenderer.on("EV::windowMaximized", function () {
            _this.$store.commit("changeWindowMaximized", true);
        });
        ipcRenderer.on("EV::windowUnmaximized", function () {
            _this.$store.commit("changeWindowMaximized", false);
        });
    };
    TitleBar = __decorate([
        Component({
            components: {
                WindowButton: WindowButton
            },
        })
    ], TitleBar);
    return TitleBar;
}(Vue));
export default TitleBar;
/script>
    < style;
scoped >
;
titlebar;
{
    display: block;
    position: fixed;
    height: 30;
    px;
    width: calc(100 % -2, px); /*Compensate for body 1px border*/
    background: none;
    color: ;
    fff;
    padding: 4;
    px;
}
titlebar;
drag - region;
{
    width: 100 % ;
    height: 100 % ;
    -webkit - app - region;
    drag;
    display: grid;
    grid - template - columns;
    auto;
    138;
    px;
}
window - title;
{
    grid - column;
    1;
    display: flex;
    align - items;
    center;
    font - family;
    "Segoe UI", sans - serif;
    font - size;
    12;
    px;
    margin - left;
    8;
    px;
    overflow - x;
    hidden;
}
window - title;
span;
{
    overflow: hidden;
    white - space;
    nowrap;
    text - overflow;
    ellipsis;
    user - select;
    none;
    line - height;
    1.5;
}
window - controls;
{
    display: grid;
    grid - template - columns;
    repeat(3, 46, px);
    position: absolute;
    top: 0;
    right: 0;
    height: 100 % ;
    font - family;
    "Segoe MDL2 Assets";
    font - size;
    10;
    px;
    -webkit - app - region;
    no - drag;
}
minimize;
{
    grid - column;
    1;
}
maximize,
;
restore;
{
    grid - column;
    2;
}
close;
{
    grid - column;
    3;
}
minimize: hover,
;
maximize: hover,
;
restore: hover,
;
close: hover;
{
    background: rgba(255, 255, 255, 0.2);
    opacity: 1;
}
close: hover;
{
    background: ;
    e81123;
}
/style>;
//# sourceMappingURL=TitleBar.vue.js.map