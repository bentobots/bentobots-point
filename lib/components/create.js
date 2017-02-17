"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var flatten = function flatten(arr) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, _toConsumableArray(arr));
};
var a = function a(val) {
  return Array.isArray(val) ? val : [val];
};
// const a = val => Array.isArray(val) ? val : flatten([val])

var create = function create(_ref) {
  var _ref$X = _ref.X,
      X = _ref$X === undefined ? function () {
    return 1;
  } : _ref$X,
      _ref$Y = _ref.Y,
      Y = _ref$Y === undefined ? function () {
    return 1;
  } : _ref$Y,
      _ref$Z = _ref.Z,
      Z = _ref$Z === undefined ? function () {
    return 1;
  } : _ref$Z;

  var point = [];

  a(X()).forEach(function (_X) {
    a(Y()).forEach(function (_Y) {
      a(Z()).forEach(function (_Z) {
        point.push({ X: _X, Y: _Y, Z: _Z });
      });
    });
  });

  return { POINT: point.length === 1 ? point[0] : point };
};

exports.default = create;