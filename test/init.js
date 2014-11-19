if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["my-module.coffee"]) {
    _$jscoverage["my-module.coffee"] = [];
    _$jscoverage["my-module.coffee"][1] = 0;
    _$jscoverage["my-module.coffee"][3] = 0;
    _$jscoverage["my-module.coffee"][5] = 0;
    _$jscoverage["my-module.coffee"][6] = 0;
    _$jscoverage["my-module.coffee"][9] = 0;
    _$jscoverage["my-module.coffee"][10] = 0;
    _$jscoverage["my-module.coffee"][13] = 0;
    _$jscoverage["my-module.coffee"][15] = 0;
}

_$jscoverage["my-module.coffee"].source = ["window.Namespace = {}", "", "class MyModule", "", "  constructor: (name) ->", "    @setName name", "", "  setName: (name) ->", "    @name = name", "    undefined", "", "  getName: ->", "    @name", "", "window.Namespace.MyModule = MyModule", ""];

