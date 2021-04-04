var id = null;
function Move(idName, topPos, rightPos, botPos, leftPos) {
  var position = 0;
  clearInterval(id);
  id = setInterval(frame, 0);
  function frame() {
    if (position == Math.max(topPos, rightPos, botPos, leftPos)) {
      clearInterval(id);
    } else {
      ++position;
      if (topPos != 0) idName.style.top = position + "px";
      if (rightPos != 0) idName.style.right = position + "px";
      if (botPos != 0) idName.style.bottom = position + "px";
      if (leftPos != 0) idName.style.left = position + "px";
    }
  }
}
Move(document.getElementById("animate"), 175, 0, 0, 0);
$("#animate").slideDown({duration: 800});


