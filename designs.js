function drawTable(width, height, table, colorPicker) {
  table.empty();

  for(var i=0; i<height; i++) { // rows
    var tr = $("<tr>");
    for (var j=0; j<width; j++) { // columns
      var td = $("<td>");
      attachChangeColorEvent(td, colorPicker);
      tr.append(td);
    };
    table.append(tr);
  };
};

// attach event listener to td, colorPicker is jquery object
// bound to color Picker input
function attachChangeColorEvent(td, colorPicker) {
  td.click(function(e) {
    $(e.target).css("background-color", colorPicker.val());
  });
}
// main function here
$(function(){
  $("#sizePicker").submit(function(e){ //attach event to form submit
    e.preventDefault(); //stops reload page
    var height = $("#input_height").val(); // get grid size
    var width = $("#input_width").val();
    // init our drawing function
    drawTable(width, height, $("#pixel_canvas"), $("#colorPicker"));
  });
});
