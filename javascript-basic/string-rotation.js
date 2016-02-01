function animate_string(id) {

  var textNode = document.getElementById(id).childNodes[0];
  var text = textNode.data;

setInterval(function() {
 text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}

  // I found this exercise pretty tricky
  // and most of the code is lifted straight from w3's example

  // However, I've cleaned up the markup a bit and simplified the js in some ways

  // For example, there's no need to set an element variable
  // since it's only used in this one instance
  // this does have the trade off of making the code slightly harder to read
  // if this was something someone else was going to maintain
  // I would likely stick with the wordier, more obvious solution