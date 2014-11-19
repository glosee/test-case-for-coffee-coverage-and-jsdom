class ModuleA

  constructor: (name) ->
    @setName name

  setName: (name) ->
    @name = name
    undefined

  getName: ->
    @name

window.Namespace.ModuleA = ModuleA
