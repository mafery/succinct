import react from 'react';

import "./styles/index.css";

function setElement(){
    var e = document.createElement('div');
    e.append('Hello world! \t hello react! \t hello webpack! \t hello typescript!');

    var $root = document.getElementById("root");

    $root.append(e);
}

setElement();