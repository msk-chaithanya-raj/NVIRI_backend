const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./appliance_repair.db");

db.serialize(() => {
  db.run(`
        CREATE TABLE 
        IF NOT EXISTS locations(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )    
    `);
  db.run(`
        CREATE TABLE 
        IF NOT EXISTS appliances(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )    
    `);
  db.run(`
        CREATE TABLE 
        IF NOT EXISTS technicians(
            technician_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            photo_url TEXT NOT NULL,
            specialization TEXT NOT NULL,
            rating FLOAT NOT NULL,
            description TEXT NOT NULL
        )    
    `);
  db.run(`
        CREATE TABLE 
        IF NOT EXISTS users(
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )    
    `);
  db.run(`
        INSERT INTO technicians(
            name, photo_url, specialization, rating, description
        ) VALUES
            ('Rahul Sharma', 'https://cdn-icons-png.flaticon.com/512/219/219983.png', 'AC,Fridge', 4.5, 'Expert in repairing and maintaining air conditioners and refrigerators.'),
            ('Asha Reddy', 'https://cdn-icons-png.flaticon.com/512/219/219983.png', 'Gas Stove,Fridge', 4.8, 'Specialist in repairing gas stoves and refrigerators, ensuring safety and efficiency.'),
            ('Vikram Singh', 'https://cdn-icons-png.flaticon.com/512/219/219983.png', 'TV', 4.6, 'Skilled in diagnosing and fixing issues in televisions, from hardware to software.'),
            ('Neha Kapoor', 'https://cdn-icons-png.flaticon.com/512/219/219983.png', 'AC,Gas Stove', 4.7, 'Experienced in handling air conditioning systems and gas stoves for optimal performance.'),
            ('Manoj Verma', 'https://cdn-icons-png.flaticon.com/512/219/219983.png', 'AC,TV,Fridge', 4.4, 'Versatile technician adept at repairing air conditioners, televisions, and refrigerators.')
    `);
});

console.log("Database initialized and updated");
db.close();
