describe 'module b', ->

  beforeEach ->
    @moduleB = new global.Namespace.ModuleB 9

  describe 'instantiation', ->

    it 'instantiates with a number', ->
      expect(@moduleB.number).to.equal 9

  describe 'setting a new number', ->

    it 'can set a new number', ->
      @moduleB.setNumber 4
      expect(@moduleB.number).to.equal 4

  describe 'getting the number', ->

    it 'can return its number', ->
      num = @moduleB.getNumber()
      expect(num).to.equal 9
