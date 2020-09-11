
function increase_no(){
    // return value
    // document.getElementById("value").innerHTML = i;
    var value = parseInt(document.getElementById('number').value, 10);
    value += 1
    document.getElementById('number').value = value;
}

function decrease_no(){
    var value = parseInt(document.getElementById('number').value, 10);
    value -= 1
    document.getElementById('number').value = value;
}