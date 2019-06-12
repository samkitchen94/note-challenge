(function(exports){


function SingleNoteView(note) {
  this.note = note
};

SingleNoteView.prototype.returnHTML = function() {
  return "<ul><li><div>" + this.note.text + "</div></li></ul>"
};

exports.SingleNoteView = SingleNoteView;
})(this);
