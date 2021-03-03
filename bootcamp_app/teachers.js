const userInput = process.argv.slice(2);

const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(
  ` SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM assistance_requests
  JOIN teachers ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '${userInput[0]}%'
  ORDER BY teacher;`
)
  .then(res => {
    const info = res.rows;
    info.forEach(teacher => {
      console.log(`${teacher.cohort}: ${teacher.teacher}`);
    })
    process.exit();
  })
  .catch(err => console.error('query error', err.stack));