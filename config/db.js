const mongoose = require('mongoose');
const dbconfig = require('./dbconfig');

const connectDB = async () => {
    try {
        // var conn = await mongoose.connect(dbconfig.database, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify: false
        // })
        var conn = await mongoose.connect(dbconfig.database, {
            useNewUrlParser: true,
             useUnifiedTopology: true,
            //  useFindAndModify: false
        })
        console.log(`mongodb connected: ${conn.connection.host}`)
    }
    catch (err) {
        console.log(err);
        process.exit(1)
    }
}
module.exports = connectDB;