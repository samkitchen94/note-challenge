document.getElementById('app').innerHTML = 'Howdy';

(function(exports){


function NoteController(noteList) {
  this.noteList = noteList;
  this.htmlNote = "";
};

NoteController.prototype.addNoteToList = function() {
  var newNote = this.noteList.create("Favourite drink: seltzer")
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
