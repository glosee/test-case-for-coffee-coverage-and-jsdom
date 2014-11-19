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

(function() {
  _$jscoverage["init.coffee"][1]++;

  window.Namespace = {};

}).call(this);

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
    _$jscoverage["modulea.coffee"][8] = 0;
    _$jscoverage["modulea.coffee"][11] = 0;
    _$jscoverage["modulea.coffee"][13] = 0;
}

_$jscoverage["modulea.coffee"].source = ["class ModuleA", "", "  constructor: (name) ->", "    @setName name", "", "  setName: (name) ->", "    @name = name", "    undefined", "", "  getName: ->", "    @name", "", "window.Namespace.ModuleA = ModuleA", ""];

(function() {
  var ModuleA;

  _$jscoverage["modulea.coffee"][1]++;

  ModuleA = (function() {
    _$jscoverage["modulea.coffee"][3]++;

    function ModuleA(name) {
      _$jscoverage["modulea.coffee"][4]++;
      this.setName(name);
    }

    ModuleA.prototype.setName = function(name) {
      _$jscoverage["modulea.coffee"][7]++;
      this.name = name;
      _$jscoverage["modulea.coffee"][8]++;
      return void 0;
    };

    ModuleA.prototype.getName = function() {
      _$jscoverage["modulea.coffee"][11]++;
      return this.name;
    };

    return ModuleA;

  })();

  _$jscoverage["modulea.coffee"][13]++;

  window.Namespace.ModuleA = ModuleA;

}).call(this);

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

(function() {
  var ModuleB;

  _$jscoverage["moduleb.coffee"][1]++;

  ModuleB = (function() {
    _$jscoverage["moduleb.coffee"][3]++;

    function ModuleB(number) {
      _$jscoverage["moduleb.coffee"][4]++;
      this.setNumber(number);
    }

    ModuleB.prototype.setNumber = function(number) {
      _$jscoverage["moduleb.coffee"][7]++;
      this.number = number;
      _$jscoverage["moduleb.coffee"][8]++;
      return void 0;
    };

    ModuleB.prototype.getNumber = function() {
      _$jscoverage["moduleb.coffee"][11]++;
      return this.number;
    };

    return ModuleB;

  })();

  _$jscoverage["moduleb.coffee"][13]++;

  window.Namespace.ModuleB = ModuleB;

}).call(this);
