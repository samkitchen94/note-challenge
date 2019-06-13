describe("Note controller", function(){
  var notelist = new NoteList();
  var controller = new NoteController(notelist);

  it("a note controller can be instantiated", function(){
    assert(controller.noteList, notelist)
  });

  it("controller generates html version of note", function(){
    controller.addNoteToList("Favourite drink: seltzer");
    controller.createView();
    controller.pushToApp();
    assert(document.getElementById('app').innerHTML, "<ul><li><div>Favourite drink: sel</div></li></ul>")
  });
});
