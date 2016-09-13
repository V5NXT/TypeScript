//// [tests/cases/conformance/es6/moduleExportsUmd/anonymousDefaultExportsUmd.ts] ////

//// [a.ts]
export default class {}

//// [b.ts]
export default function() {}

//// [a.js]
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports"], function (require, exports) {
    "use strict";
    class default_1 {
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
});
//// [b.js]
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports"], function (require, exports) {
    "use strict";
    function default_1() { }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
});
