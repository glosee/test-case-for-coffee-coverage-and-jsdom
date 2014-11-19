describe 'my module', ->

  beforeEach ->
    {MyModule} = global.Namespace
    @myModule = new MyModule 'Beer'

  describe 'instantiation', ->

    it 'instantiates with a name', ->
      expect(@myModule.name).to.equal 'Beer'

  describe 'setting a new name', ->

    it 'can set a new name', ->
      @myModule.setName 'Wine'
      expect(@myModule.name).to.equal 'Wine'

  describe 'getting the name', ->

    it 'can tell you its name', ->
      moduleName = @myModule.getName()
      expect(moduleName).to.equal 'Beer'
