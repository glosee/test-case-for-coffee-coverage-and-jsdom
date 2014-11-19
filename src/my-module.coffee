window.Namespace = {}

class MyModule

  constructor: (name) ->
    @setName name

  setName: (name) ->
    @name = name
    undefined

  getName: ->
    @name

window.Namespace.MyModule = MyModule
