function registerCompany() {
    let requestBody = {
        "name": document.getElementById("company-name").value,
        "location": document.getElementById("company-location").value,
        "industry": document.getElementById("company-industry").value
    };

    fetch("http://localhost:8080/register", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(data => data.json())
        .then(data => {
            console.log("Response Received");

        })
}
document.getElementById("company-register-submit").addEventListener("click", registerCompany);