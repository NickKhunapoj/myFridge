const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to your SQLite database file
const dbPath = path.resolve(__dirname, './myFridge.db');

// Create a new database connection
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

module.exports = {
    db,
    executeQuery: async function ({ query, values }) {
        return new Promise((resolve, reject) => {
            try {
                // If it's a SELECT query
                if (query.trim().toUpperCase().startsWith('SELECT')) {
                    db.all(query, values, (err, rows) => {
                        if (err) {
                            console.error('Error executing query:', err.message);
                            reject({ error: 'There was a problem executing the query.' });
                        } else {
                            resolve(rows);
                        }
                    });
                } else {
                    // For INSERT, UPDATE, DELETE queries
                    db.run(query, values, function (err) {
                        if (err) {
                            console.error('Error executing query:', err.message);
                            reject({ error: 'There was a problem executing the query.' });
                        } else {
                            resolve({ changes: this.changes, lastID: this.lastID });
                        }
                    });
                }
            } catch (error) {
                console.error('Unexpected error:', error);
                reject({ error: 'An unexpected error occurred.' });
            }
        });
    }
};
