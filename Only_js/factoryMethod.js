// Factory Function (first letter lowercase Camel Notation)
function createCircle(radius){
    return {
        // radius: 1,
        // location: {
        //     x: 1,
        //     y: 1
        // },
        // visible: true,
        // draw: function(){
        //     console.log('draw')
        // }

        //------------------------//

        radius,
        // location:location,
        // visible: true,
        draw(){
            console.log('draw')
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(5);
console.log(circle2);