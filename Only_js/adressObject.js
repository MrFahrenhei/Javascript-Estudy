const address = {
    street : 'rua tal',
    city : "cascacity",
    zipCode : "85805050"
};
function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}
showAddress(address);