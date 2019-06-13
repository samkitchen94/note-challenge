describe("Note controller", function(){
  var notelist = new NoteList();
  var controller = new NoteController(notelist);

  it("a note controller can be instantiated", function(){
    assert(controller.noteList, notelist)
  });

  it("controller generates html version of note", function(){
    controller.addNoteToList('A very very very long note');
    controller.createView();
    controller.pushToApp();
    assert(document.getElementById('app').innerHTML, '<ul><li><div><a href="http://localhost:8080#notes/5"> A very very very lon</a></div></li></ul>')
  });
});
