const result = document.getElementById("feedbackResult");

async function getFeedback() {
    try {
        const response = await fetch("/feedback");

        if(!response.ok) {
            throw new Error("Failed to fetch feedback");
        }
        const allFeedback = await response.json();
        console.log(allFeedback);

        result.innerHTML = "";

        allFeedback.forEach((feedback) => {
            result.innerHTML += `
        <div>
        <h3>Name : ${feedback.name}</h3>
        <p>Rating : ${feedback.rating}</p>
        <p>Comment : ${feedback.comments}</p>
        </div>`
        })
    } catch(error) {
        console.log(error);
        result.textContent = "Unable to load feedback. Please try again.";
    }
}
getFeedback();