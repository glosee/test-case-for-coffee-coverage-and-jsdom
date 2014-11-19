class ModuleB

  constructor: (number) ->
    @setNumber number

  setNumber: (number) ->
    @number = number
    undefined

  getNumber: ->
    @number

window.Namespace.ModuleB = ModuleB
