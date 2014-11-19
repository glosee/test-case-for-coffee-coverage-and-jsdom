if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["init.coffee"]) {
    _$jscoverage["init.coffee"] = [];
    _$jscoverage["init.coffee"][1] = 0;
}

_$jscoverage["init.coffee"].source = ["window.Namespace = {}", ""];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["modulea.coffee"]) {
    _$jscoverage["modulea.coffee"] = [];
    _$jscoverage["modulea.coffee"][1] = 0;
    _$jscoverage["modulea.coffee"][3] = 0;
    _$jscoverage["modulea.coffee"][4] = 0;
    _$jscoverage["modulea.coffee"][7] = 0;
    _$jscoverage["modulea.coffee"][10] = 0;
    _$jscoverage["modulea.coffee"][12] = 0;
}

_$jscoverage["modulea.coffee"].source = ["class ModuleA", "", "  constructor: (name) ->", "    @setName name", "", "  setName: (name) ->", "    @name = name", "", "  getName: ->", "    return @name", "", "window.Namespace.ModuleA = ModuleA", ""];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["moduleb.coffee"]) {
    _$jscoverage["moduleb.coffee"] = [];
    _$jscoverage["moduleb.coffee"][1] = 0;
    _$jscoverage["moduleb.coffee"][3] = 0;
    _$jscoverage["moduleb.coffee"][4] = 0;
    _$jscoverage["moduleb.coffee"][7] = 0;
    _$jscoverage["moduleb.coffee"][8] = 0;
    _$jscoverage["moduleb.coffee"][11] = 0;
    _$jscoverage["moduleb.coffee"][13] = 0;
}

_$jscoverage["moduleb.coffee"].source = ["class ModuleB", "", "  constructor: (number) ->", "    @setNumber number", "", "  setNumber: (number) ->", "    @number = number", "    undefined", "", "  getNumber: ->", "    @number", "", "window.Namespace.ModuleB = ModuleB", ""];

