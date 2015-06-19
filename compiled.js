var Foo;
(function (Foo) {
    Foo.fromFoo = 'foo';
})(Foo || (Foo = {}));
/// <reference path="Foo.ts" />
var Foo;
(function (Foo) {
    Foo.fromBar = Foo.fromFoo + 'bar';
})(Foo || (Foo = {}));
