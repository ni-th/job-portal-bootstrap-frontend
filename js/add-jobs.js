
let companyList = []

function readCompanies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            companyList = data;
            loadCompanyList();
        })
}

readCompanies("http://localhost:8080/all-companies");

function loadCompanyList(){
    let company_list = document.getElementById("job-company-list");
    let body = "";

    companyList.forEach(companies => {
        body+= `
        <option value="${companies.company_id}">${companies.name} - ${companies.company_id}</option>`
    })
    company_list.innerHTML = body;
}

async function addJob() {
    let requestBody = {
        "title": document.getElementById("job-title").value,
        "salary": document.getElementById("job-salary").valueAsNumber,
        "company_id": document.getElementById("job-company-list").value,
        "salary_date": document.getElementById("job-salary-date").value,
        "description": document.getElementById("job-description").value
    };
console.log(requestBody);
    fetch("http://localhost:8080/add-job", {
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
        readJobs("http://localhost:8080/all-jobs");
}
document.getElementById("add_job_submit").addEventListener("click", addJob);


