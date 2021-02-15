// Edit The Variables To Add Your Payrate!

// Payrates
// var weekdays = 0; Default
// var saturday = 0
// var sunday = 0;
// var public_holiday = 0;

// my pay rate
var weekdays = 12.04;
var saturday = 14.448;
var sunday = 16.8560;
var public_holiday = 24.08;
var superann_rate = 0.095 // Do the decimal value of the percentage
function pay_calc(form_data) {
    // Hours
    let wd_hours = parseInt(document.querySelector("input[name='wdayhours']").value, 10);
    let sat_hours = parseInt(document.querySelector("input[name='sathours']").value, 10);
    let sun_hours = parseInt(document.querySelector("input[name='sunhours']").value, 10);
    let pub_hours = parseInt(document.querySelector("input[name='pubhours']").value, 10);
    let total_hours = wd_hours + sat_hours + sun_hours + pub_hours;
    // Math To Decide The Total Amount For Hours Worked
    let wd_total = wd_hours * weekdays;
    let sat_total = sat_hours * weekdays;
    let sun_total = sun_hours * weekdays;
    let pub_total = pub_hours * weekdays;
    let total = wd_total + sat_total + sun_total + pub_total;
    let superann = (total * superann_rate)
    let superann_rate_fixed = superann_rate * 100
    console.log(superann)
    // Enter Values
    document.querySelector("#wd_out").innerHTML = `Weekdays Hours (${wd_hours} hrs): $${(wd_total).toFixed(2)}`;
    document.querySelector("#sa_out").innerHTML = `Saturday Hours (${sat_hours} hrs): $${(sat_total).toFixed(2)}`;
    document.querySelector("#su_out").innerHTML = `Sunday Hours (${sun_hours} hrs): $${(sun_total).toFixed(2)}`;
    document.querySelector("#p_out").innerHTML = `Public Holiday Hours (${pub_hours} hrs): $${(pub_total).toFixed(2)}`;
    document.querySelector("#total").innerHTML = `Total Pay For Hours (${total_hours} hrs): $${(total).toFixed(2)}`;
    document.querySelector("#super").innerHTML = `Superannuation (${superann_rate_fixed}%): $${(superann).toFixed(2)}`;
}
