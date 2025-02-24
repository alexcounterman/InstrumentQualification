const { Pool } = require('pg');
const pool = new Pool({
  user: 'dbuser',
  host: 'localhost',
  database: 'qualificationdb',
  password: 'dbpassword',
  port: 5432,
});

async function generateTraceabilityMatrix(instrumentId) {
  const requirements = await pool.query('SELECT * FROM requirements WHERE instrument_id = $1', [instrumentId]);
  const tests = await pool.query('SELECT * FROM tests WHERE instrument_id = $1', [instrumentId]);

  const matrix = requirements.rows.map((req) => {
    const relatedTests = tests.rows.filter((test) => test.requirement_id === req.id);
    return {
      requirement: req,
      tests: relatedTests,
      status: relatedTests.length > 0 ? 'Tested' : 'Not Tested',
    };
  });

  return matrix;
}

module.exports = { generateTraceabilityMatrix };
