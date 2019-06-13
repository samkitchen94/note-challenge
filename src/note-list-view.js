(function(exports) {

function NoteListView(noteList) {
  this.noteList = noteList;
};

NoteListView.prototype.view = function() {
  var tag = '<ul>'
for (var i = 0; i < this.noteList.notes.length; ++i) {
    tag += "<li><div><a href='http://localhost:8080#notes/" + this.noteList.notes[i].id + "'> " + this.noteList.notes[i].text.substring(0, 20) + "</a></div></li>"
  };

  tag += '</ul>'
  return tag
};

exports.NoteListView = NoteListView;
})(this);
