async function citycountry(city, country, method) {

    const url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`

    async function getData() {
        const response = await fetch(url)
        const data = await response.json()
        const timings = {}
        fivePrayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"]
        for (const [key, value] of Object.entries(data.data.timings)) {
            if (fivePrayers.includes(key))
            timings[key] = value
        }

        return timings
    }
    timings = await getData()
    return timings
    }

 

async function nextPrayer(date, city, country){
    const time = date;
    const times = await citycountry(city, country, 2);

    let next_prayer = "";
    let next_prayer_time = "";

    for (const [key, value] of Object.entries(times)) {
        if (greater_time(value,time)) {
            next_prayer = key;
            next_prayer_time = value;
            break;
        }
        next_prayer = "Fajr";
        next_prayer_time = times["Fajr"];
    }
    const obj = {}
    obj[next_prayer] = next_prayer_time;
    return obj;
}

function greater_time(time1,time2) {
    const time1_parse = time1.split(':');
    const time2_parse = time2.split(':');

    if (time1_parse[0] > time2_parse[0]) {
        return true;
    } else if (time1_parse[0] == time2_parse[0]) {
        if (time1_parse[1] > time2_parse[1]) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

async function timeDifference(time1, time2) {
    const time1_parse = time1.split(':');
    const time2_parse = time2.split(':');

    let hour_diff = time1_parse[0] - time2_parse[0];
    let min_diff = time1_parse[1] - time2_parse[1];

    if (time2_parse[0] > time1_parse[0]) {
        hour_diff += 24;
    }
    if (min_diff < 0) {
        hour_diff -= 1;
        min_diff += 60;
    }

    return (Math.abs(hour_diff) * 60 * 60 * 1000) + (Math.abs(min_diff) * 60 * 1000); 
}

async function printData() {
    const data = await citycountry("toronto", "canada", 2);
    console.log(data);
}

const fs = require('fs').promises;

async function getlocation(interaction) {
    let obj;

    try {
        const data = await fs.readFile('../data/data.json', 'utf8');
        obj = JSON.parse(data); //now it an object
    } catch (err) {
        console.log(err);
    }

    interaction.country = obj[interaction.guildId].country;
    interaction.city = obj[interaction.guildId].city;
}

async function addTime(date1, milliseconds) {
    const time1_parse = date1.split(':');
    var hours = Math.floor(milliseconds / 3600000) + parseInt(time1_parse[0]);
    var minutes = Math.floor((milliseconds % 3600000) / 60000) + parseInt(time1_parse[1]);
    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }
    if (hours >= 24) {
        hours -= 24;
    }
    const time2 = (hours + ":" + minutes);
    return time2;
}

module.exports = {
    citycountry,
    nextPrayer,
    printData,
    greater_time,
    getlocation,
    timeDifference,
    addTime
}
//console.log(citycountry("toronto","canada",2));