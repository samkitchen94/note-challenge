describe("Note list view", function() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  it("takes a note list upon instantiation", function(){
    assert(noteListView.noteList, noteList)
  });

  it("returns a string of html that represents the note list model", function(){
    var note = noteList.create('Drinks note');
    var note2 = noteList.create('hello');
    noteList.addNote(note);
    noteList.addNote(note2);
    assert(noteListView.view(), '<ul><li><div>Drinks note</div></li><li><div>hello</div></li></ul>')
  });
});
