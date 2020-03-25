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
var Details = /** @class */ (function (_super) {
    __extends(Details, _super);
    function Details(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            news: props.navigation.state.params.news
        };
        return _this;
    }
    Details.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(native_base_1.Container, null,
            react_1.default.createElement(native_base_1.Header, { style: styles.header },
                react_1.default.createElement(native_base_1.Left, null,
                    react_1.default.createElement(native_base_1.Icon, { name: 'arrow-back', onPress: function () {
                            _this.props.navigation.navigate("HOME");
                        } })),
                react_1.default.createElement(native_base_1.Right, null)),
            react_1.default.createElement(native_base_1.Content, null,
                react_1.default.createElement(react_native_1.View, { style: styles.imageView },
                    react_1.default.createElement(react_native_1.Image, { source: { uri: this.state.news.urlToImage != null ? this.state.news.urlToImage : undefined }, style: { height: 300, width: '100%' } })),
                react_1.default.createElement(react_native_1.View, { style: styles.contentView },
                    react_1.default.createElement(react_native_1.Text, { style: styles.title }, this.state.news.title),
                    react_1.default.createElement(react_native_1.Text, { style: styles.text }, this.state.news.author),
                    react_1.default.createElement(react_native_1.Text, { style: styles.text }, new Date(this.state.news.publishedAt).toLocaleString()),
                    react_1.default.createElement(react_native_1.Text, { style: styles.text }, this.state.news.content)))));
    };
    return Details;
}(react_1.default.Component));
exports.default = Details;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 50,
        backgroundColor: 'white'
    },
    imageView: {
        height: 300,
        width: '100%',
        // backgroundColor: 'blue',
        marginBottom: '5%'
    },
    contentView: {
        paddingHorizontal: '5%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: '2%'
    },
    text: {
        fontSize: 12,
        marginVertical: '2%'
    }
});
