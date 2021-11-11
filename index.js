// Import express
var express = require('express');

// Import Mongoose
var mongoose = require('mongoose');

// Path of the package
var path = require('path');

// Sell Car Model
var sellcarModel = require('./sellcarModel');

// Excel to JSON
var excelToJson = require('convert-excel-to-json');

// Multer
var multer = require("multer");

// Storage of the excel file
var storage = multer.diskStorage({  
    destination:(req, file, cb) => {  
        cb(null, './public/uploads');  
    },  
    filename:(req, file, cb) => {  
        cb(null, file.originalname);  
    }  
});

// Multer Uploads
var uploads = multer({
    storage: storage
});

// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/resthub', {
    useNewUrlParser: true
})
.then(()=>console.log('connected to db'))  
.catch((err)=>console.log(err));

var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// init ap
var app = express(); 

//set the template engine  
app.set('view engine','ejs'); 

// Configure bodyparser to handle post requests
// app.use(express.urlencoded({
//     extended: true
// }));
app.use(express.json());

//static folder  
app.use(express.static(path.resolve(__dirname,'public')));  


//route for Home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Upload excel file and import to mongodb
app.post('/uploadfile', uploads.single("uploadfile"), (req, res) =>{
    importExcelData2MongoDB(__dirname + '/uploads/' + req.file.filename);
    console.log(res);
});

// Import Excel File to MongoDB database
function importExcelData2MongoDB(filePath){
    // -> Read Excel File to Json Data
    const excelData = excelToJson({
        sourceFile: filePath,
        sheets:[{
            // Excel Sheet Name
            name: 'SellCar',
            // Header Row -> be skipped and will not be present at our result object.
            header:{
                rows: 1
            },
            // Mapping columns to keys
            columnToKey: {
                A: '_id',
                B: 'make',
                C: 'model',
                D: 'trim',
                E: 'year',
                F: 'odometer',
                G: 'price'
            }
        }]
    });
        // -> Log Excel Data to Console
        console.log(excelData);

        // Insert Json-Object to MongoDB
        sellcarModel.insertMany(jsonObj,(err,data)=>{  
            if(err){  
                console.log(err);  
            }else{  
                res.redirect('/');  
            }  
        }); 
        fs.unlinkSync(filePath);
    }

// Import Routes
var apiRoutes = require("./api-routes"); //importing the added js file for api routes

var carRoutes = require("./car-routes"); 





// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
// app.get('/', (req, res) => res.send('Hello World with Express'));

// Use API routes in the App
app.use('/api', apiRoutes)
app.use('/api/car', carRoutes)


// Launch app to listen to specified port
app.listen(port, function () { 
    console.log("Running RESTHub on port " + port);
 });

// End Adding Mongoose