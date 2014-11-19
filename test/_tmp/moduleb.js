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
