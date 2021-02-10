// Edit The Variables To Add Your Payrate!

// Payrates
var weekdays = 0;
var saturday = 0
var sunday = 0;
var public_holiday = 0;
function pay_calc(form_data) {
    // Hours
    let wd_hours = document.getElementById("wday_hours").value;
    let sat_hours = document.getElementById("sat_hours").value;
    let sun_hours = document.getElementById("sun_hours").value;
    let pub_hours = document.getElementById("pub_hours").value;
    let total_hours = wd_hours + sat_hours + sun_hours + pub_hours;
    console.log(wd_hours)
    console.log(total_hours)
    // Math To Decide The Total Amount For Hours Worked
    let wd_total = wd_hours * weekdays;
    let sat_total = sat_hours * weekdays;
    let sun_total = sun_hours * weekdays;
    let pub_total = pub_hours * weekdays;
    let total = wd_total + sat_total + sun_total + pub_total;

}
