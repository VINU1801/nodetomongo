const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    MongoClient.connect('mongodb+srv://vinujayabalakrishnan:Vinu@1801@cluster0.hdjeyzr.mongodb.net/ExpenseTracker?retryWrites=true&w=majority')
    .then(function(client) {
        dbConnection = client.db()
        callBack()
    }).catch(function(error) {
        callBack(error)
    })
}

function getDb() {
    return dbConnection
}

// Exporting required functions
module.exports = {connectToDb, getDb}