var log_records = [];  // Array of log records returned to Flask
var log_remarks = [];  // Array of remarks to be shown again in the second review


document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("next-button");
    const nextBtnXAI = document.getElementById("next-button-reverify");

    function isRadioGroupAnswered(name) {
      const radios = document.getElementsByName(name);
      return Array.from(radios).some(r => r.checked);
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        const response = document.getElementById('user_response').value;

        if (!response) {
          alert("Please accept or reject the AI recommendation before proceeding.");
          return; // exit early
        }

        const requiredGroups = ['s1q1'];
        for (const group of requiredGroups) {
          if (!isRadioGroupAnswered(group)) {
            alert("Please answer the follow-up question before proceeding.");
            return;
          }
        }

        const confirmed = confirm("Are you sure you want to proceed? You will not be able to change your selection afterwards.");
        if (confirmed) {
          document.getElementById("reverify").style.display = "block";

          // Freeze the first section
          const firstSection = document.getElementById("first-section");
          firstSection.style.opacity = "0.5";  // visually fade
          firstSection.style.pointerEvents = "none"; // prevent clicks
          document.getElementById("next-button").style.display = "none";
        }
      });
    }
    if (nextBtnXAI) {
      // if(document.getElementById('user_response').value == document.getElementById('user_response_XAI').value){
          nextBtnXAI.addEventListener("click", function () {
            const response = document.getElementById('user_response_XAI').value;

            if (!response) {
            alert("Please accept or reject the AI recommendation before proceeding.");
            return; // exit early
            }

            const requiredGroups = ['s1q2', 's1q3', 's1q4', 's1q5'];
            for (const group of requiredGroups) {
              if (!isRadioGroupAnswered(group)) {
                alert("Please answer all the follow-up questions before proceeding.");
                return;
              }
            }

            const confirmed = confirm("Are you sure you want to proceed? You will not be able to change your selection afterwards.");
            if (confirmed){
                if(document.getElementById('user_response').value != document.getElementById('user_response_XAI').value){
                  document.getElementById("reason").style.display = "block";
                }
                else{
                  document.getElementById("reason_que").value = "none";
                }
                document.getElementById("question-block3").style.display = "block";

                    // Freeze the first section
                const firstSection = document.getElementById("reverify");
                firstSection.style.opacity = "0.5";  // visually fade
                firstSection.style.pointerEvents = "none"; // prevent clicks
                document.getElementById("next-button-reverify").style.display ="None";
                document.getElementById("done").style.display ="block";
            } 
            });
    }
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