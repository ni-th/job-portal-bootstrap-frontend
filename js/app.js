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











