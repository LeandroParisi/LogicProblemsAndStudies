var Prop1 = /** @class */ (function () {
    function Prop1() {
    }
    return Prop1;
}());
var Test = /** @class */ (function () {
    /**
     *
     */
    function Test(init) {
        Object.assign(this, init);
    }
    return Test;
}());
var teste = new Test({
    prop1: [
        { inner1: 1, inner2: 2 }
    ],
    prop2: 'teste'
});
console.log({ teste: teste });
