/* Select the assignment's id, day, chapter, name and the total assistances.
Order by total assistances in order of most to least. */

SELECT assignments.id, day, chapter, name, COUNT(assistance_requests.*) as total_requests
FROM assistance_requests
JOIN assignments ON assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY -COUNT(assistance_requests.*);