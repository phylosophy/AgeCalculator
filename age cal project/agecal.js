
// let age = prompt ("what is your age? ")


// let sec = age * (3.154*10^7)

// let minute = age * 525600

// let days = age * 365; 

// let month= age * 12;

// let weeks= age * 52;

// alert(age + " years you have elaps " + days + " days " + sec + " Secons " +  minute + " Minutes " + month + " Months " + weeks + " weeks" );


function ageFunction() {
	
	let age = document.querySelector("#age").value;

   

	let second = age * (3.154*10^7) * 365;
	let minute = age * 525600;
	let hour = age * 8760;
	let day = age * 365;
	let week = age * 52;
	let month = age * 12;

	// console.log(month);
     
	document.querySelector("#second").value = second;
	document.querySelector("#minute").value = minute;
	document.querySelector("#hour").value = hour;
	document.querySelector("#day").value = day;
	document.querySelector("#week").value = week;
	document.querySelector("#month").value = month;

}
   
   
  









