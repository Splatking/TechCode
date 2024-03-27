const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'TechCode_Systems',
  password: 'System123',
  database: 'techcode_database',
  port: 3306
});

function SendData(){
  app.get('/data', (req, res) => {
    db.query('SELECT * FROM your_table', (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        res.status(500).json({ error: 'Error querying database' });
        return;
      }
      res.json(results);
    });
  });
}

function GetData(){
  app.get('/data', (req, res) => {
    db.query('SELECT * FROM your_table', (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        res.status(500).json({ error: 'Error querying database' });
        return;
      }
      res.json(results);
    });
  });
}

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});