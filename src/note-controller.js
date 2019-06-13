(function(exports){

function NoteController(noteList) {
  this.noteList = noteList;
  this.htmlNote = "";
};

NoteController.prototype.addNoteToList = function(note) {
  var newNote = this.noteList.create(note)
  return this.noteList.addNote(newNote)
};

NoteController.prototype.createView = function() {
  var newView = new NoteListView(this.noteList)
  this.htmlNote = newView.view()
};

NoteController.prototype.pushToApp = function() {
  document.getElementById('app').innerHTML = this.htmlNote;
};

exports.NoteController = NoteController;
})(this);
