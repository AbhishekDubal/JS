
function toCelsius(temp){
    return (temp - 32 )* (5/9);
}

function toFahreheit(temp){
    return (temp * (9/5) + 32);
}

document.getElementById("submit").onclick  = function(){
    if(document.getElementById("cConvert").checked){
        temp = document.getElementById("tempLabel").value;
        temp = Number(temp);
        temp = toCelsius(temp);

        document.getElementById("result").innerHTML = temp +"°C";
    }
    else if(document.getElementById("fConvert").checked){
        temp = document.getElementById("tempLabel").value;
        temp = Number(temp);
        temp = toFahreheit(temp);

        document.getElementById("result").innerHTML = temp +"°F";
    }
    else{
        document.getElementById("result").innerHTML = "Choose something";
 
    }
}