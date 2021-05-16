//1. Calculate the area of circle
const circleArea = r => 
Math.PI * Math.pow(r,2);
console.log(circleArea(4));
// 2. Calculate the circumference of a circle
const circleCircum = r =>
2 * Math.PI * r;
console.log(circleCircum(5));
//3. Calculate the volume of a sphere
const sphereVolume = r =>
4/3 * Math.PI * Math.pow(r,3);
console.log(sphereVolume(3));