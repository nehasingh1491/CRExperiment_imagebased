var log_records = [];  // Array of log records returned to Flask
var log_remarks = [];  // Array of remarks to be shown again in the second review

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("index-form");
  const checkbox = document.getElementById("consent_checkbox");

  form.addEventListener("submit", function () {
    if (checkbox.checked) {
      logData("Consent checkbox: ", checked);
    } else {
      logData("Consent checkbox: ", not_checked);
    }
  });
});

function logAnswer(answer) {
    // Store response in hidden input so it's submitted with the form
    document.getElementById('user_response').value = answer;
    logData("task1 response " + answer);

    // Highlight the selected button
    const buttons = document.querySelectorAll('.response-button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    const selectedBtn = document.getElementById('btn-' + answer.toLowerCase());
    if (selectedBtn) {
      selectedBtn.classList.add('selected');
    }
    document.getElementById("question-block1").style.display="block";
  }

  function logAnswerwithXAI(answer) {
    // Store response in hidden input so it's submitted with the form
    document.getElementById('user_response_XAI').value = answer;
    logData("task1 response after explanation" + answer);

    // Highlight the selected button
    const buttons = document.querySelectorAll('.response-button-verify');
    buttons.forEach(btn => btn.classList.remove('selected'));

    const selectedBtn = document.getElementById('btn-verify-' + answer.toLowerCase());
    if (selectedBtn) {
      selectedBtn.classList.add('selected');
    }
    document.getElementById("question-block2").style.display="block";
  }


function logData(action, data){
    // console.log(`${new Date().getTime()};${action};${data}\n`)
    log_records.push(`${new Date().getTime()};${action};${data}\n`);
}