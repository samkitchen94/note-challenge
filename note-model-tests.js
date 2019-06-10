function newNoteInitializesText() {
  var note = new Note();
  note.add("Javascript is shite")
  assert.isTrue(note.view(0) === "Javascript is shite")
};
newNoteInitializesText();

function deleteNote() {
  var note = new Note();
  note.add("Javascript is shite")
  note.add("Javascript is great")
  note.delete(0)
  assert.isTrue(note.view(0) === "Javascript is great")
};
deleteNote();
