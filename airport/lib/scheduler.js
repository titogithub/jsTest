let Scheduler = require('../index');

let vuelos = new Scheduler();
vuelos.flights.push(new Date(2018,11,13,10,35));
vuelos.flights.push(new Date(2018,11,13,11,35));
vuelos.flights.push(new Date(2018,11,13,14,35));
vuelos.flights.push(new Date(2018,11,13,16,35));


console.log(vuelos.CouldScheduleAt(new Date(2018,11,13,12,46)));
console.log(vuelos.Schedule());