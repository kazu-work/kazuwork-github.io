var input = {
    mouseX: {
        start: 0,
        end: window.innerWidth,
        current: 0,
        
    }, 
    mouseY: {}
        
};
    
input.mouseX.range = input.mouseX.end - input.mouseX.start;


var handleMouseMove = function (event) {
    console.log('event.clientX', event.clientX)
}

window.addEventListener('mousemove', handleMouseMove)