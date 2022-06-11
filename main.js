

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) ;
}


async function dy_heading(){

	let heading_ele=document.getElementById('heading1');
	let head_cont=document.getElementById('head_cont');
	let icon=document.getElementById('icon');

	let s="Welcome to Boarding Section...";
	let i=0;
	let n=s.length;
	let res="";
	while(i<n){
			res+=s[i];
			await waitforme(80);
			heading_ele.textContent=res;
		i++;
	}
	console.log(heading_ele);
	icon.classList.add('fa','fa-paper-plane');

	
	
	console.log(res);
}
dy_heading();

let date_input=document.getElementById('curr_date');
console.log(date_input.value);
let details_btn=document.getElementById('details');
details_btn.addEventListener('click',function(){

	
	let curr_date_passengers=[];
	let count_of_passengers=0;
		
	for(x of objectofpassengers){

		if(x.date==date_input.value){
			curr_date_passengers.push(x);
			count_of_passengers++;
		}
	}
	let main_container=document.getElementById('details-cont');
	let details_cont=document.createElement('div');
	details_cont.classList.add('mt-5');

	main_container.textContent="";
	details_cont.textContent="";


	details_cont.classList.add('row');
	details_cont.classList.add('text-center');




	let detail_item=document.createElement('div');

	let seq_head=document.createElement('p');
	seq_head.classList.add('col-2');
	seq_head.textContent='Sequence Number';
	details_cont.appendChild(seq_head);


	let booking_id_head=document.createElement('p');
	booking_id_head.textContent='Booking Id';
	booking_id_head.classList.add('col-3');
	details_cont.appendChild(booking_id_head);
	

	let seat_numbers_head=document.createElement('p');
	seat_numbers_head.textContent='Seat Numbers';
	seat_numbers_head.classList.add('col-2');
	details_cont.appendChild(seat_numbers_head);

	let mobile_head=document.createElement('p');
	mobile_head.textContent='Mobile Number';
	mobile_head.classList.add('col-3');
	details_cont.appendChild(mobile_head);

	let arrival_status_head=document.createElement('p');
	arrival_status_head.textContent="Arrival Status";
	arrival_status_head.classList.add('col-2');
	details_cont.appendChild(arrival_status_head)

	main_container.appendChild(details_cont);

	
	if(count_of_passengers==0){


		details_cont.classList.add('d-flex','flex-column','justify-content-center');
		let msg=document.createElement('p');
		msg.textContent="No Arrivals";
		msg.classList.add('msg');
		details_cont.appendChild(msg);
	}else{

		

		for(let x of curr_date_passengers){
			for(let i=0;i<x.seats.length;i++){
				x[i]=parseInt(x[i]);
			}
		}
		console.log(curr_date_passengers);

		curr_date_passengers.sort(function(a,b){

			if(a.seats>=b.seats){
				return 1;
			}
			return -1;
		});
		console.log("after sort");
		console.log(curr_date_passengers);

		

		let c=1;


		for(x of curr_date_passengers){

			details_cont=document.createElement('div');
			details_cont.classList.add('row');
			details_cont.classList.add('text-center');
			seq_head=document.createElement('p');
			seq_head.classList.add('col-2');
			seq_head.textContent=c;c++;
			details_cont.appendChild(seq_head);

			booking_id_head=document.createElement('p');
			booking_id_head.textContent=x.bookId;
			booking_id_head.classList.add('col-3');
			details_cont.appendChild(booking_id_head);
		
			seat_numbers_head=document.createElement('div');
			seat_numbers_head.classList.add('col-2');
			details_cont.appendChild(seat_numbers_head);


			let seats_nums=document.createElement('div');
			seats_nums.classList.add('d-flex','flex-column','justify-content-center');
			for(y of x.seats){

				let t=document.createElement('p');
				t.textContent=y;
				seats_nums.appendChild(t);
			}

			seat_numbers_head.appendChild(seats_nums);

			mobile_head=document.createElement('p');
	mobile_head.textContent=x.mobile;
	mobile_head.classList.add('col-3');
	details_cont.appendChild(mobile_head);

			let but=document.createElement('button');
			but.textContent='Arrived';
			but.classList.add('col-2','button');
			details_cont.appendChild(but);

			

			main_container.appendChild(details_cont);
			let hor=document.createElement('hr');
			main_container.appendChild(hor)

			


		}


	}






});







