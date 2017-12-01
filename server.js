var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var admin = require('firebase-admin')

// This account is no longer valid
var serviceAccount = require('./node-firebase-intro-firebase-adminsdk-r73z4-d28579f9a0.json')

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://node-firebase-intro.firebaseio.com'
})

var database = firebaseAdmin.database()

// Create instance of express app
var app = express()

// We want to serve js and html in ejs
// ejs stands for embedded javascript
app.set('view engine', 'ejs')

// We also want to send css, images, and other static files
app.use(express.static('views'))
app.set('views', __dirname + '/views')

// Give the server access to the user input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.get('/', function(request, response){
    var restaurantsRef = database.ref("/restaurants")
    
    restaurantsRef.once('value', function(snapshot){
        var data = snapshot.val()
        
        if ( !data ) {
            data = {}
        }
        
        response.render('home.ejs', { restaurants: data })        
    })
})

app.get('/profile/:userId', (req, res) => {
    var userId = req.params.userId
    
    var user = firebaseAdmin.getAllUsersData(userId)
    
    res.render('profile.ejs', { user: user })
})

var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log('App running on port ' + port)
})


