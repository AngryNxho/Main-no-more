function currentDay(day){
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hour >= 12){
        return `Current Time: ${hour}PM - ${minutes} - ${seconds}`;

    } else if (hour <= 24){
        return `Current Time: ${hour}AM - ${minutes} - ${seconds}`;
    }
}


console.log(currentDay('Monday'));