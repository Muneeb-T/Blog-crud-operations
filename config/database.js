import mysql from 'mysql';
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
export const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

const connectDatabase = () => {
    db.connect((err) => {
        if (err) {
            console.log(err);
            console.log('Database connection error, process exiting...');
            process.exit();
        }
        console.log('Database connected successfully');
    });
};

export default connectDatabase;
