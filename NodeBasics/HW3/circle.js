let yarıçap = process.argv.slice(2)


function CircleArea(r){
    return Math.PI * (r * r);
}

function circleCircumference (r){
    return 2 * Math.PI * r;
}


module.exports = {
    CircleArea,
    circleCircumference
}