describe("Single Note View", function(){
  var note = new Note("Favourite drink: seltzer")
  var singlenoteview = new SingleNoteView(note)

  it("a single note view can be instantiated", function(){
    assert(singlenoteview.note, note)
  });

  it("returns string of HTML that represents the note model", function(){
    assert(singlenoteview.returnHTML(), "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
  });
});
