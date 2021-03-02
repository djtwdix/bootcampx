SELECT cohorts.name, AVG(completed_at - started_at) as average_assistance_request_duration
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts on cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY AVG(completed_at - started_at);