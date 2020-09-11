/* if console not defined, define it to do
nothing so we don't get errors */
if (typeof console === "undefined") {
  console = { log: function () {} };
}
function updateStatusBox(img, msg) {
  document.getElementById('statuscaption').innerHTML = msg;
  document.getElementById('event_image').src = img;
}
function doWasJustClicked(myObj) {
  console.log("A 'click' event occured");
  console.log(myObj);
  updateStatusBox("images/click.png", "<strong>click</strong> event occured");
}
function doWasJustLoaded() {
  console.log("A 'load' event occured");
  updateStatusBox("images/load.png", "<strong>load</strong> event occured");
}
function doWasJustMousedOver(myObj) {
  console.log("A 'mouseover' event occured");
  console.log(myObj);
  updateStatusBox("images/mouseover.png", "<strong>mouseover</strong> event occured");
}
function doWasJustMousedOut(myObj) {
  console.log("A 'mouseout' event occured");
  console.log(myObj);
  updateStatusBox("images/mouseout.png", "<strong>mouseout</strong> event occured");
}
function doWasJustSubmitted(myObj) {
  console.log("A 'submit' event occured");
  console.log(myObj);
  updateStatusBox("images/submit.png", "<strong>submit</strong> event occured");
  return false;
}
function doWasJustChanged(myObj) {
  console.log("A 'change' event occured");
  console.log(myObj);
  var selectdir = document.getElementById('mydirection');
  var direction = selectdir.options[selectdir.selectedIndex].value;
  var lcdirection = direction.toLowerCase();
  updateStatusBox("images/"+ lcdirection + ".png", "<strong>change</strong> event occured");
}
function doWasJustBlurredFrom(myObj) {
  console.log("An 'onblur' event occured");
  console.log(myObj);
  updateStatusBox("images/blur.png", "<strong>blur</strong> event occured");
}
function doWasJustFocusedOn(myObj) {
  console.log("A 'focus' event occured");
  console.log(myObj);
  updateStatusBox("images/focus.png", "<strong>focus</strong> event occured");
}
