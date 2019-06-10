(function(exports) {
  function Note() {
    this._allNotes = []
  };
  Note.prototype.add = function(text) {
    this._allNotes.push(text)
  };
  Note.prototype.view = function(noteNumber) {
    return this._allNotes[noteNumber]
  };
  Note.prototype.delete = function(indexNum) {
    this._allNotes.splice(indexNum, 1)
  }
  exports.Note = Note;
})(this);
