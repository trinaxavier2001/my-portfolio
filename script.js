document.addEventListener("DOMContentLoaded", function () {
    // Select the message section
    const messageSection = document.getElementById("leave-message-section");

    // Create form elements
    const form = document.createElement("form");
    form.setAttribute("id", "message-form");

    const input = document.createElement("textarea");
    input.setAttribute("id", "user-message");
    input.setAttribute("placeholder", "Write your message here...");
    input.setAttribute("rows", "4");
    input.style.width = "80%";
    input.style.margin = "10px 0";

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("type", "submit");
    submitButton.style.display = "block";
    submitButton.style.margin = "10px auto";
    submitButton.style.padding = "10px 20px";
    submitButton.style.backgroundColor = "#4CAF50";
    submitButton.style.color = "white";
    submitButton.style.border = "none";
    submitButton.style.cursor = "pointer";
    submitButton.style.fontSize = "16px";
    
    submitButton.addEventListener("mouseenter", () => {
        submitButton.style.backgroundColor = "#45a049";
    });

    submitButton.addEventListener("mouseleave", () => {
        submitButton.style.backgroundColor = "#4CAF50";
    });

    const messageDisplay = document.createElement("div");
    messageDisplay.setAttribute("id", "message-display");
    messageDisplay.style.marginTop = "20px";
    messageDisplay.style.fontSize = "18px";
    messageDisplay.style.color = "#333";

    // Append elements to form and section
    form.appendChild(input);
    form.appendChild(submitButton);
    messageSection.appendChild(form);
    messageSection.appendChild(messageDisplay);

    // Event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const userMessage = input.value.trim();
        if (userMessage !== "") {
            messageDisplay.innerHTML = `<strong>Your Message:</strong> ${userMessage}`;
            input.value = ""; // Clear input field after submission
        } else {
            alert("Please enter a message before submitting.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("message-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        // Show confirmation message
        confirmationMessage.style.display = "block";

        // Clear form fields
        form.reset();
    });
});
