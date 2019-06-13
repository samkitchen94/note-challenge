describe("Note list view", function() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  it("takes a note list upon instantiation", function(){
    assert(noteListView.noteList, noteList)
  });

  it("only shows first 20 characters of a note", function(){
    var note = noteList.create('A very very very long note');
    noteList.addNote(note);
    console.log(noteList.notes)
    assert(noteListView.view(), "<ul><li><div>A very very very lon</div></li></ul>" )
  });
});
