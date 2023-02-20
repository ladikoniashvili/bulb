let button = () =>{
    let adress = document.getElementById("natura").src;
    console.log(adress);

    if(adress == "file:///Users/mac/Desktop/bulb/img/lightbulb.png"){
        document.getElementById("natura").src = "./img/light-bulb.png";
         document.getElementById("button").innerHTML = "Turn Off";

    }
    else{
        document.getElementById("natura").src = "./img/lightbulb.png";
        document.getElementById("button").innerHTML = "Turn On";
    }
}



