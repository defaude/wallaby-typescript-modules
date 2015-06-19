describe 'Foo', ->

  it 'should have fromFoo', ->
    expect(Foo.fromFoo).toBe 'foo'

  it 'should have fromBar, too', ->
    expect(Foo.fromBar).toBe 'foobar'