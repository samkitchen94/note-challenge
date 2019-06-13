(function(exports) {

  var id = 0
  function Note(text) {
    this.text = text;
    this.id = id++
  };
  Note.prototype.getNote = function() {
    return this.text;
  };
  exports.Note = Note;
})(this);
