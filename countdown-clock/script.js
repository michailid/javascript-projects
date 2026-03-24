function countDown() {
    let date = new Date(2026, 2, 27, 4, 29);
    let now = new Date();
    let diffInMilliseconds = date.getTime() - now.getTime();
    let days = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000));
    let hours = Math.floor(
        (diffInMilliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    let minutes = Math.floor(
        ((diffInMilliseconds % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000)
    );
    let seconds = Math.floor(
        (((diffInMilliseconds % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000
    );
    document.getElementById('days-number').innerHTML = days;
    document.getElementById('hours-number').innerHTML = hours;
    document.getElementById('minutes-number').innerHTML = minutes;
    document.getElementById('seconds-number').innerHTML = seconds;
}

setInterval(countDown, 1000);