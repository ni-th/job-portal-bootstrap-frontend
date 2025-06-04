CREATE DATABASE job_portal;
USE job_portal;

CREATE TABLE company (
    company_id INT PRIMARY KEY AUTO_INCREMENT,
    location VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    industry VARCHAR(100) NOT NULL
);

CREATE TABLE job (
    job_id INT PRIMARY KEY AUTO_INCREMENT,
    salary_date DATE NOT NULL,
    salary FLOAT(10,2) NOT NULL,
    description TEXT NOT NULL,
    title VARCHAR(200) NOT NULL,
    company_id INT,
    FOREIGN KEY (company_id) REFERENCES company(company_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
