CREATE TABLE instruments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  location VARCHAR(255),
  status VARCHAR(50)
);

CREATE TABLE requirements (
  id SERIAL PRIMARY KEY,
  instrument_id INTEGER REFERENCES instruments(id),
  requirement_id VARCHAR(50),
  description TEXT,
  priority VARCHAR(50),
  status VARCHAR(50)
);

CREATE TABLE tests (
  id SERIAL PRIMARY KEY,
  instrument_id INTEGER REFERENCES instruments(id),
  type VARCHAR(50),
  details TEXT,
  results TEXT,
  status VARCHAR(50)
);

CREATE TABLE audit_trail (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  action VARCHAR(50),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  details TEXT
);
