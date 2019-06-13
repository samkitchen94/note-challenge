describe("Note model", function(){
  var note = new Note("new note");
  var note2 = new Note("newer note");
  it("stores a new note", function(){
    assert(note.text, "new note");
  });

  it("returns the note", function(){
    assert(note.getNote(), "new note");
  });

  it("gives each note a unique id", function(){
    assert(note.id, 0)
    assert(note2.id, 1)
  });

});
