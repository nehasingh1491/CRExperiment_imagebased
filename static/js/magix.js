var log_records = [];  // Array of log records returned to Flask
var log_remarks = [];  // Array of remarks to be shown again in the second review

function logData(action, data){
    // console.log(`${new Date().getTime()};${action};${data}\n`)
    log_records.push(`${new Date().getTime()};${action};${data}\n`);
}