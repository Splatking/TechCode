import express from 'express';
import bcrypt from 'bcrypt';
import { query } from 'mysql';

const app = express();
const port = 3000;

app.use(express.json());

function SendData(){
  app.get('/data', async (req, res) => {
    try {
      const results = await query('SELECT * FROM your_table');
      res.json(results);
    } catch (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Error querying database' });
    }
  });
}

function LoadData(Username, Password){
  app.post('/fetch-data', async (req, res) => {
    try {
      let HashedPassword = bcrypt.hash(Password);
      console.log(HashedPassword);
      const results = await query(`SELECT * FROM accounts WHERE Gebruikersnaam = ${Username} AND Wachtwoord = ${HashedPassword}`);
      if (results.length > 0) {
        const username = results[0].TechName;
        res.json({ TechName: username });
      } else {
        res.status(404).json({ error: 'No data found' });
      }
    } catch (error) {
      console.error('There was a problem with the database query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
}

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

export { app };
export { SendData };
export { LoadData };