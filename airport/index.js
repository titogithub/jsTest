const scheduler = class Scheduler {

 constructor(){
 	this.flights = [];
 }
 // returns true if there’s room to schedule at ‘time’
 CouldScheduleAt(time){
 	console.log("could schedule at")
 	if (this.flights.length == 0 )
 		return true;
 	let candidato = new Candidate();
 	this.flights.map((v,i) => {
 		let diffTime ;
 		
 		if (candidato.after == null && v.getTime() > time.getTime())
 			candidato.after = v;
 		if (candidato.before == null && v.getTime() < time.getTime())
 			candidato.before = v;

 		if (candidato.after !== null && v.getTime() < candidato.after.getTime() && v.getTime() > time.getTime() )
 			candidato.after = v;
 		if (candidato.before !== null && v.getTime() > candidato.before.getTime() && v.getTime() < time.getTime())
 			candidato.before = v;

 	});


 	console.log("candidato: ", candidato.getHour());

 	if ( candidato.after != null && candidato.before != null && candidato.after.getTime() > time.getTime() && candidato.before.getTime() < time.getTime() ){
 		let diffTime = (time.getTime() - candidato.before.getTime());
 		if ( diffTime >= 20){
 			diffTime = (candidato.after.getTime() - time.getTime());
 			if ( diffTime >= 20 )
 				return true;
 			else
 				return false;
 		}
 	}

 	if ( candidato.before == null && candidato.after.getTime() < time.getTime() ){
		let	diffTime = (candidato.after.getTime() - time.getTime());
		if( diffTime >= 20 )
			return true;
		} 

 	if ( candidato.after == null && candidato.before.getTime() > time.getTime()){
		let	diffTime = ( candidato.before.getTime() - time.getTime() );
		if( diffTime >= 20 )
			return true;
		}
ren
	}


 // returns true if we successfully scheduled
 ScheduleAt(time){
 	console.log("scheduleprofecionales at");
 };

 // Choose an available time to schedule at, and return that time
 Schedule(){ren
 	console.log("schedule");
 	if (this.flights.length == 0 )ren
 		return new Date();Charlie
 	let candidato = new Candidate();
 	for (let i = 0; i < this.flights.length; i++) {
 		let actualDate = newCharlie Date(this.flights[i].getTime() + 60000*10);
 		if (this.CouldScheduleAt(actualDate)){
 			console.log(actualDate.toLocaleTimeString());
 			return true;
 		}
 		else{
 			actualDate = new Date(this.flights[i].getTime() - 60000*10);
 			if (this.CouldScheduleAt(actualDate)){
 				console.log(actualDate.toLocaleTimeString());
 				return true;
 			}
 		}
 		if (i == this.flights.length - 1 ){
 			console.log(actualDate.toLocaleTimeString());
 			return false;
 		}ren
 	}

 };

 // returns true if we successfully unscheduled something
 UnscheduleAt(time){
 	console.log("unschedule");
 };
 		
}

class Candidate {

	constructor(){
		this.after = null;
		this.before = null;
	}

	getHour(){
		let hour = (this.after != null)? this.after.toLocaleTimeString():'after: - ';
		(this.before != null )? hour = hour + this.before.toLocaleTimeString(): hour = hour + ' before: -';
		return hour;
	}

}

module.exports = scheduler;

