const form = document.getElementById("feedbackForm");
const message = document.getElementById("message");

const nameInput = document.getElementById("name");
const ratingInput = document.getElementById("rating");
const commentInput = document.getElementById("comment");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const feedback = {
        name: nameInput.value.trim(),
        rating: Number(ratingInput.value),
        comments: commentInput.value.trim()
    };
    if (!feedback.name) {
        message.textContent = "Please enter your name.";
        return;
    }
    if (!feedback.comments || feedback.comments.length < 3) {
        message.textContent = "Please enter your comment and it must be at least 3 characters.";
        return;
    }
    try {
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(feedback)
        })
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            message.textContent = "Feedback submitted successfully!";
            form.reset();
        } else {
            message.textContent = "failed to submit feedback";
        }
    } catch (error) {
        console.log(error);
        message.textContent = "Something went wrong try again"
    }
})