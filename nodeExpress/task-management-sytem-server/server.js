import mongoose from 'mongoose';
import app from './app.js';

const PORT = 8080
const database_URL = "mongodb+srv://rajeshbhandari2075:1234567890@cluster0.c7w3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))

// mongoose.connect{database_URL}.the( {console.log('Connected to database')})
// .cacth(error => {console.log('Error connecting to database: ', error)})

mongoose.connect(database_URL).then( () => console.log('Connected to database')).catch(error => console.log('Error connecting to database: ', error)    
)
