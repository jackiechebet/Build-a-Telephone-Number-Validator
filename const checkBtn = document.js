const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");

const usPhonePattern = /^(1\s?)?((\(\d{3}\))|(\d{3}))(?:[-\s]?\d{3})(?:[-\s]?\d{4})$/;
checkBtn.addEventListener("click", () => {
    const phoneNumber = userInput.value.trim();
    if (!phoneNumber) {
        alert("Please provide a phone number");
        return;
    }
    
    if (usPhonePattern.test(phoneNumber)) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
    }
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    resultsDiv.textContent = "";
});