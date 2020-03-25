"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var i18n_js_1 = __importDefault(require("i18n-js"));
var en_json_1 = __importDefault(require("./locales/en.json"));
var es_json_1 = __importDefault(require("./locales/es.json"));
i18n_js_1.default.defaultLocale = 'en';
i18n_js_1.default.locale = 'en';
i18n_js_1.default.fallbacks = true;
i18n_js_1.default.translations = { en: en_json_1.default, es: es_json_1.default };
exports.default = i18n_js_1.default;
