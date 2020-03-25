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
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            english: props.i18n.locale === 'en' ? true : false,
            spanish: props.i18n.locale === 'es' ? true : false
        };
        return _this;
    }
    Settings.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(native_base_1.Container, null,
            react_1.default.createElement(native_base_1.Header, { style: styles.header },
                react_1.default.createElement(react_native_1.Text, null)),
            react_1.default.createElement(native_base_1.Content, { style: { flex: 1 } },
                react_1.default.createElement(native_base_1.ListItem, { onPress: function () {
                        _this.setState({
                            english: true,
                            spanish: false
                        });
                        _this.props.setLocale('en');
                    } },
                    react_1.default.createElement(native_base_1.Left, null,
                        react_1.default.createElement(react_native_1.Text, null, this.props.i18n.t('settings.english'))),
                    react_1.default.createElement(native_base_1.Right, null,
                        react_1.default.createElement(native_base_1.Radio, { selected: this.state.english }))),
                react_1.default.createElement(native_base_1.ListItem, { onPress: function () {
                        _this.setState({
                            english: false,
                            spanish: true
                        });
                        _this.props.setLocale('es');
                    } },
                    react_1.default.createElement(native_base_1.Left, null,
                        react_1.default.createElement(react_native_1.Text, null, this.props.i18n.t('settings.spanish'))),
                    react_1.default.createElement(native_base_1.Right, null,
                        react_1.default.createElement(native_base_1.Radio, { selected: this.state.spanish }))))));
    };
    return Settings;
}(react_1.default.Component));
exports.default = Settings;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '4%'
    },
    header: {
        height: 50,
        backgroundColor: 'white'
    },
});
