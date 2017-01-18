function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function deepestChild(){
  return document.querySelector("#grand-node div div div div")
}

function increaseRankBy(n){
  var nodeList = document.querySelectorAll('.ranked-list li')
  for(var i = 0; i < nodeList.length; i++){
    var num = parseInt(nodeList[i].innerHTML)
    num += n
    nodeList[i].innerHTML = `${num}`
  }
}
