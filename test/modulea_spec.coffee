describe 'module a', ->

  beforeEach ->
    @moduleA = new global.Namespace.ModuleA 'Beer'

  describe 'instantiation', ->

    it 'instantiates with a name', ->
      expect(@moduleA.name).to.equal 'Beer'

  describe 'setting a new name', ->

    it 'can set a new name', ->
      @moduleA.setName 'Wine'
      expect(@moduleA.name).to.equal 'Wine'

  describe 'getting the name', ->

    it 'can tell you its name', ->
      moduleName = @moduleA.getName()
      expect(moduleName).to.equal 'Beer'
