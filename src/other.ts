
function setElement(){
    var e = document.createElement('div');
    e.append('你好');

    var $root = document.getElementById("root");

    $root.append(e);
}

setElement();