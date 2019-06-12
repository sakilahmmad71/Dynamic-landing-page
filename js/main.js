// selec the dom elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// show the time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // set AM or PM
    const amPm = hour >= 12 ? "PM" : "AM";

    // 12 hour format
    hour = hour % 12 || 12;

    // output the time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);

}

// add zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background and greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// set name
function setName(e) {
    if (e.type === 'keypress') {
        // make sure enter pressed
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}




// get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}


// set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // make sure enter pressed
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }

    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}





// adding event for get name and focus
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Calling all necessary functions
showTime();
setBgGreet();
getName();
getFocus();