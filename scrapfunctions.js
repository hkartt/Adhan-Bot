function within_twenty(api_param) {
    const prayer_time = api_param.split(':');
    const d = new Date();
    // if (1702188095306 - 1200000 <= time && time <= 1702188095306 + 1200000) {
    //     console.log("You are within 20 minutes of the target time.");
    // } else {
    //     console.log("You are not within 20 minutes of the target time.");
    // }
    console.log("prayer time :" + prayer_time[0] + ":" + prayer_time[1]);
    console.log(d.getHours() + ":" + d.getMinutes());
}
within_twenty("17:00");