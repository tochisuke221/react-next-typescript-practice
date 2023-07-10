// 知っておくと便利な機能
var _a, _b;
var user;
user = {
    name: 'tochi',
    social: {
        facebook: true,
        twitter: true
    }
};
console.log((_a = user.social) === null || _a === void 0 ? void 0 : _a.facebook); // => true
user = {
    name: 'やまだ'
};
console.log((_b = user.social) === null || _b === void 0 ? void 0 : _b.facebook); // => undefined
/** Non-null Assertion Operator */
// userがnullの場合、実行時エラーになる可能性があるプロパティへのアクセスはコンパイルエラー
// !を用いて、明示的に指定することでコンパイルエラーを制御
var processUser = function (user) {
    var s = user.name;
};
