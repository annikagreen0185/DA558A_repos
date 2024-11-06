document.getElementById('mathQuiz').addEventListener('submit', function (event) {
    // Do not submit form, it shuld be validated first
    event.preventDefault();
    //console.log('Javascript annikagreen.js is running')
    
    // Get form data
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const address = document.getElementById('address').value.trim();

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');

    const q2_1 = document.getElementById('q2_1').checked;
    const q2_2 = document.getElementById('q2_2').checked;
    const q2_4 = document.getElementById('q2_4').checked;
    const q2_7 = document.getElementById('q2_7').checked;
    const q2_12 = document.getElementById('q2_12').checked;

    const q3 = document.getElementById('q3').value.trim();
    const q4 = document.getElementById('q4').value.trim();

    const errorMessageFirstname = document.getElementById("error-message-firstname");
    const errorMessageLastname = document.getElementById("error-message-lastname");
    const errorMessageAddress = document.getElementById("error-message-address");
    const errorMessageQuestion1 = document.getElementById("error-message-q1");
    const errorMessageQuestion5 = document.getElementById("error-message-q5");

    // Set variables to keep track of the validation and quiz result
    let isValid = true;
    let correctAnswers = 0;

    // Validate visitor information
    if (!firstname) {
        errorMessageFirstname.textContent = "First name requires input"
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(firstname)) {
        errorMessageFirstname.textContent = "Please enter first name in letters only"
        isValid = false;
    }
    if (!lastname) {
        errorMessageLastname.textContent = "Last name requires input"
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(lastname)) {
        errorMessageLastname.textContent = "Last name should only contain letters"
        isValid = false;
    }
    if (!address) {
        errorMessageAddress.textContent = "Email address requires input"
        isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(address)) {
        errorMessageAddress.textContent = "Please enter a valid email address"
        isValid = false;
    }

    // Validate quiz questions
    // Question 1 requires an answer and the correct answer is 8
    if (!q1) {
        errorMessageQuestion1.textContent = "Question 1 requires an answer"
        isValid = false;
    } else if (q1.value == 8) {
        correctAnswers += 1;
    }
    // Question 5 requires an answer, not wrong och right answer
    if (!q5) {
        errorMessageQuestion5.textContent = "Question 5 requires an answer"
        isValid = false
    }

    //Question 2 do not require an answer, but the correct answers are checkbox 2 and 7
    if (q2_2 && q2_7 && !q2_1 && !q2_4 && !q2_12) {
        correctAnswers += 1;
    }
    // Question 3 do not require an answer, but the correct answer is 144
    if (q3 == "144") {
        correctAnswers += 1;
    }
    // Question 4 do not require an answer, but the correct answer is 66
    if (q4 == "66") {
        correctAnswers += 1;
    }

    // If everything has validated, show success message and the number of correct answers
    if (isValid) {
        alert(`Quiz submitted!\nYou have ${correctAnswers} correct answer(s) on the quiz out of 4 possible.\nThank you for your participation.`)
    }

    // Listen to changes made in the answers to required elements in the form and clear error messages
    document.getElementById("firstname").addEventListener("input", function() {
        document.getElementById("error-message-firstname").textContent = "";
    });
    document.getElementById("lastname").addEventListener("input", function() {
        document.getElementById("error-message-lastname").textContent = "";
    });
    document.getElementById("address").addEventListener("input", function() {
        document.getElementById("error-message-address").textContent = "";
    });
    document.querySelectorAll('input[name="q1"]').forEach((radio) => {
        radio.addEventListener("change", function() {
            document.getElementById("error-message-q1").textContent = "";
        });
    });
    document.querySelectorAll('input[name="q5"]').forEach((radio) => {
        radio.addEventListener("change", function() {
            document.getElementById("error-message-q5").textContent = "";
        });
    });
});
