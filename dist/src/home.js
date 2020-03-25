"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var native_base_1 = require("native-base");
var news_1 = __importDefault(require("./news"));
var settings_1 = __importDefault(require("./settings"));
var i18n_1 = __importDefault(require("./i18n"));
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            i18n: i18n_1.default
        };
        return _this;
    }
    Home.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(native_base_1.Container, null,
            react_1.default.createElement(native_base_1.Tabs, { tabBarPosition: 'bottom', tabBarUnderlineStyle: { backgroundColor: 'black' }, tabContainerStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0.1
                } },
                react_1.default.createElement(native_base_1.Tab, { heading: react_1.default.createElement(native_base_1.TabHeading, { style: { height: '100%', backgroundColor: 'white' } },
                        react_1.default.createElement(react_native_1.Text, { style: { fontWeight: 'bold' } }, this.state.i18n.t('tabNavigation.news'))) },
                    react_1.default.createElement(news_1.default, { navigation: this.props.navigation, i18n: i18n_1.default })),
                react_1.default.createElement(native_base_1.Tab, { heading: react_1.default.createElement(native_base_1.TabHeading, { style: { height: '100%', backgroundColor: 'white' } },
                        react_1.default.createElement(react_native_1.Text, { style: { fontWeight: 'bold' } }, this.state.i18n.t('tabNavigation.settings'))) },
                    react_1.default.createElement(settings_1.default, { navigation: this.props.navigation, i18n: i18n_1.default, setLocale: function (lang) {
                            i18n_1.default.locale = lang,
                                _this.setState({
                                    i18n: i18n_1.default
                                });
                        } })))));
    };
    return Home;
}(react_1.default.Component));
exports.default = Home;
