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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var native_base_1 = require("native-base");
var News = /** @class */ (function (_super) {
    __extends(News, _super);
    function News(props) {
        var _this = _super.call(this, props) || this;
        _this.filter = function () {
            _this.setState({
                filteredNews: _this.state.newsList.filter(function (news) {
                    return news.title.toUpperCase().includes(_this.state.searchText.toUpperCase());
                })
            });
        };
        _this.onRefresh = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({
                    refreshing: true
                });
                this.fetchNews();
                return [2 /*return*/];
            });
        }); };
        _this.state = {
            newsList: [],
            filteredNews: [],
            searchText: '',
            refreshing: false,
        };
        return _this;
    }
    News.prototype.componentDidMount = function () {
        this.fetchNews();
    };
    News.prototype.fetchNews = function () {
        var _this = this;
        var NEWS_API = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5119c147502f4bcb8565ee685a97b085";
        fetch(NEWS_API, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            response.json()
                .then(function (responseJson) {
                var articles = responseJson.articles;
                _this.setState({
                    newsList: articles,
                    filteredNews: articles,
                    refreshing: false
                });
            });
        });
    };
    News.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(native_base_1.Container, null,
            react_1.default.createElement(native_base_1.Header, { style: styles.header },
                react_1.default.createElement(native_base_1.Body, null,
                    react_1.default.createElement(native_base_1.Item, null,
                        react_1.default.createElement(react_native_1.TextInput, { style: styles.searchBar, placeholder: this.props.i18n.t('placeholderSearch'), autoCapitalize: 'none', onChangeText: function (value) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.setState({
                                                searchText: value
                                            })];
                                        case 1:
                                            _a.sent();
                                            this.filter();
                                            return [2 /*return*/];
                                    }
                                });
                            }); } })))),
            react_1.default.createElement(react_native_1.FlatList, { style: styles.list, keyExtractor: function (item, index) { return JSON.stringify(index); }, data: this.state.filteredNews, refreshControl: react_1.default.createElement(react_native_1.RefreshControl, { refreshing: this.state.refreshing, onRefresh: function () { _this.onRefresh(); } }), renderItem: function (_a) {
                    var item = _a.item, number = _a.index;
                    return (react_1.default.createElement(react_native_1.TouchableOpacity, { activeOpacity: 1, onPress: function () {
                            _this.props.navigation.navigate("DETAILS", { news: item });
                        } },
                        react_1.default.createElement(native_base_1.Card, { style: styles.cardNews },
                            react_1.default.createElement(react_native_1.View, { style: styles.imageRow },
                                react_1.default.createElement(react_native_1.Image, { source: { uri: item.urlToImage != null ? item.urlToImage : undefined }, style: { width: 100, height: 100 } })),
                            react_1.default.createElement(react_native_1.View, { style: styles.contentRow },
                                react_1.default.createElement(react_native_1.Text, { style: styles.source }, item.source.name),
                                react_1.default.createElement(react_native_1.Text, { style: styles.title }, item.title)))));
                } })));
    };
    return News;
}(react_1.default.Component));
exports.default = News;
var styles = react_native_1.StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: 'white'
    },
    searchBar: {
        marginHorizontal: '5%',
        width: '90%',
    },
    list: {
        paddingHorizontal: '2%',
        marginTop: '4%'
    },
    cardNews: {
        flex: 1,
        height: 100,
        flexDirection: 'row',
        margin: '3%',
    },
    imageRow: {
        flex: 3
    },
    contentRow: {
        flex: 7,
        padding: '2%'
    },
    source: {
        alignSelf: 'flex-end',
        fontSize: 16,
        marginBottom: '3%'
    },
    title: {
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'justify',
        fontSize: 12
    },
});
