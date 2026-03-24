function countDown() {
    let date = new Date(2026, 2, 27, 16, 39);
    let now = new Date();
    let diffInMilliseconds = date.getTime() - now.getTime();
    const MILLIS_IN_DAY = 24 * 60 * 60 * 1000;
    const MILLIS_IN_HOUR = 60 * 60 * 1000;
    const MILLIS_IN_MINUTE = 60 * 1000;

    let days = Math.floor(diffInMilliseconds / (MILLIS_IN_DAY));
    let hours = Math.floor(
        (diffInMilliseconds % MILLIS_IN_DAY) / MILLIS_IN_HOUR
    );
    let minutes = Math.floor(
        ((diffInMilliseconds % MILLIS_IN_DAY) % MILLIS_IN_HOUR) / MILLIS_IN_MINUTE
    );
    let seconds = Math.floor(
        (((diffInMilliseconds % MILLIS_IN_DAY) % MILLIS_IN_HOUR) % MILLIS_IN_MINUTE) / 1000
    );
    document.getElementById('days-number').innerHTML = days;
    document.getElementById('hours-number').innerHTML = hours;
    document.getElementById('minutes-number').innerHTML = minutes;
    document.getElementById('seconds-number').innerHTML = seconds;
}
countDown();
setInterval(countDown, 1000);