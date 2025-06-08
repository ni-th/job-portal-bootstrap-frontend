let jobList = []
let companyList = []

function readJobs(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            jobList = data;
            loadJobs();
        })
}

function readCompanies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            companyList = data;
            loadCompanyList();
        })
}

readJobs("http://localhost:8080/all-jobs");
readCompanies("http://localhost:8080/all-companies");
document.getElementById("company-register-submit").addEventListener("click", registerCompany);
document.getElementById("add_job_submit").addEventListener("click", addJob);



function loadJobs() {
    let jobListContainer = document.getElementById("job-cards-container");
    let body = "";
    console.log(jobList);
    
    jobList.forEach(job => {
        body += `<div class="card m-1" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title">${job.title}</h5>
                <h6 class="text-secondary">Company ID : ${job.company_id}</h6>
                <p class="card-text">${job.description}</p>
                <a href="#" class="btn btn-primary">More Details</a>
            </div>
        </div>`
    });
    jobListContainer.innerHTML = body;

}

function loadCompanyList(){
    let companies = document.getElementById("job-company-list");
    let body = "";

    companyList.forEach(companies => {
        body+= `
        <option value="${companies.company_id}}">${companies.name} - ${companies.company_id}</option>`
    })
    companies.innerHTML = body;
}


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
async function addJob() {
    let requestBody = {
        "title": document.getElementById("job-title").value,
        "salary": document.getElementById("job-salary").value,
        "company_id": document.getElementById("job-company-list").value,
        "salary_date": document.getElementById("job-salary-date").value,
        "description": document.getElementById("job-description").value
    };

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





