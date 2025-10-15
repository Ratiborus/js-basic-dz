const addressLat = 10;
const addressLong = 22;
const positionLat = 9;
const positionLong = 10;

const result = Math.sqrt(Math.pow(addressLat - positionLat, 2) + Math.pow(addressLong - positionLong, 2));
console.log("The path is - " + result);