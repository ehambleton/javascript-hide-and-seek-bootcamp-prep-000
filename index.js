function getFirstSelector(selector) {
  var selection = document.querySelector(selector)
  return selection
}

function nestedTarget() {
  var selection = document.querySelector('#nested .target')
  return selection;
}

function increaseRankBy(n) {
  var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    var a = ranks[i].innerHTML
    a = parseInt(a) + n
    ranks[i].innerHTML = a
  }
}

function deepestChild() {
let current = document.querySelector('#grand-node')
  let next = current.children
for (current.children.length > 0)
next = current.children[0]
}
return current
}
