"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XdcConnect = exports.SendTransaction = exports.GetWallet = exports.GetNativeBalance = exports.Disconnect = exports.CallTransaction = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactToastify = require("react-toastify");

var _walletConnect = _interopRequireDefault(require("./wallet-connect/walletConnect"));

var _store = _interopRequireDefault(require("../redux/store"));

var Wallet = _interopRequireWildcard(require("../wallets"));

var actions = _interopRequireWildcard(require("../actions/index"));

require("../assets/scss/main.scss");

require("react-toastify/dist/ReactToastify.css");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var XdcConnect = function XdcConnect(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRedux.Provider, {
    store: _store.default,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactToastify.ToastContainer, {
      className: "xdc-connect"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_walletConnect.default, _objectSpread({}, props))]
  });
};

exports.XdcConnect = XdcConnect;
XdcConnect.propTypes = {
  onConnect: _propTypes.default.func,
  onDisconnect: _propTypes.default.func,
  onAddressChange: _propTypes.default.func,
  btnName: _propTypes.default.string,
  btnClass: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
XdcConnect.defaultProps = {
  btnName: "CONNECT",
  btnClass: "btn btn-rounded btn-info",
  disabled: false
};

var GetWallet = function GetWallet() {
  return _store.default.getState();
};

exports.GetWallet = GetWallet;

var SendTransaction = function SendTransaction(tx) {
  return Wallet.SendTransaction(tx);
};

exports.SendTransaction = SendTransaction;

var CallTransaction = function CallTransaction(tx) {
  return Wallet.CallTransaction(tx);
};

exports.CallTransaction = CallTransaction;

var Disconnect = function Disconnect() {
  _store.default.dispatch(actions.WalletDisconnected());
};

exports.Disconnect = Disconnect;

var GetNativeBalance = function GetNativeBalance() {
  return Wallet.GetNativeBalance();
};

exports.GetNativeBalance = GetNativeBalance;