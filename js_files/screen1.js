const objectofpassengers = [];
let indexofseats = [];
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.d-flex .seat');
const count = document.getElementById('count');
const bookbtn = document.querySelector('.bookingbtn');
const nameElement = document.getElementById('#name');
const dateElement = document.getElementById('#date');
const mobilElement = document.getElementById('#mobile');
const seatCheckingBtn = document.querySelector('.available');
console.log(seatCheckingBtn);
console.log(seatCheckingBtn);
console.log(dateElement.value);

function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
seatCheckingBtn.addEventListener('click', function() {
    let listofSeats = [];
    seats.forEach(function(seat2) {
        seat2.classList.remove('selected');
        seat2.classList.remove('occupied');
    });
    if (dateElement.value !== '') {
        objectofpassengers.forEach(function(obj1) {
            if (obj1.date === dateElement.value) {
                obj1.seats.forEach(function(item) {
                    listofSeats.push(item);
                });
            }
        });
        seats.forEach(function(seat1, index) {
            if (listofSeats.indexOf(index) > -1) {
                seat1.classList.add('occupied');
            }
        });
    } else {
        alert("Enter Date For Checking Availability");
    }
});

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.d-flex .seat.selected');
    // console.log(selectedSeats);
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    indexofseats = [...seatsIndex];
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    if (selectedSeatsCount > 6) {
        alert("you can't book more that 6 tickets");
        selectedSeats[selectedSeats.length - 1].classList.remove('selected');
    }
    count.innerText = selectedSeatsCount;
}

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});
//buttonstyles
bookbtn.addEventListener('mouseenter', function() {
    bookbtn.style.backgroundColor = "black";
    bookbtn.style.color = 'white';
    bookbtn.style.borderColor = 'black';
    // alert('Do you want to confirm');

});
bookbtn.addEventListener('mouseout', function() {
    bookbtn.style.backgroundColor = '#606060';
    bookbtn.style.color = 'white';
});
bookbtn.addEventListener('click', function() {
    if (mobilElement.value === '' || nameElement.value === '' || dateElement.value == '') {
        alert('You have to fill all fields all are mandatory');
        return;
    }

    let objofpass = {
        nameOfTravelar: nameElement.value,
        date: dateElement.value,
        seats: [...indexofseats],
        mobile: mobilElement.value,
        bookId: getRandomArbitrary(1234324, 999999999),
    };

    objectofpassengers.push(objofpass);
    console.log(objectofpassengers);
    alert("Your Booking is Confirmed and Happy Journey");
    seats.forEach(function(seat) {
        seat.classList.remove('selected');
        seat.classList.remove('occupied');
    });
    // seats.
    dateElement.value = '';
    nameElement.value = '';
    mobilElement.value = '';
    count.innerText = 0;

});
// intial count and total
console.log(objectofpassengers);
updateSelectedCount();