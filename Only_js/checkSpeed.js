// speed limit = 70km/h
// every 5km/h above is 1 point
// more than 12 points -> suspended
// Math.floor()

checkSpeed(130);
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed <= speedLimit){
        console.log("ok");
        return;
    } 
    const pontos = Math.floor((speed - speedLimit) / kmPerPoint);
    if (pontos >= 12){
        console.log("tu perdeu a licença com: "+pontos+" pontos")
    }else{
        console.log("Pontos na certeira: " + pontos)
    }
}