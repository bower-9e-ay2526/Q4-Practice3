function clickConfirm() {
    var modes = Number(document.getElementById('mode').value);

    switch(modes) {
        case 1: 
        document.getElementById("Level").innerHTML="Level: Easy Mode"; 
        break;

        case 2: 
        document.getElementById("Level").innerHTML="Level: Medium Mode"; 
        break;

        case 3: 
        document.getElementById("Level").innerHTML="Level: Hard Mode"; 
        break;

        default:
            window.alert("Invalid Section Number");
    }
}

