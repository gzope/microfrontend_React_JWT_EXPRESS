var express = require('express');
var app = express();
const jwt = require("jsonwebtoken");
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.post('/login', function (req, res) {
    console.log("login int");
    let { email, password } = req.body;
    if (email==='abc' && password==='abc')
    {
        console.log("login completed");
        let token;
        try {
            //Creating jwt token
            token = jwt.sign(
            { userId: email},
            "thisismysecrete",
            { expiresIn: "1h" }
            );

            res
            .status(200)
            .json({
            success: true,
            data: {
                userId: email,
                token: token,
            },
            });
        } catch (err) {
            console.log(err);
            const error = new Error("Error! Something went wrong.");
            return next(error);
        }
    }
    else
    {
        res.send('Invalid user');
    }
    
});

app.post('/verify', function (req, res) {

    const token = req.headers.token;     
    if(!token)
    {
        res.status(200).json({success:false, message: "Error!Token was not provided."});
    }
    //Decoding the token
    try{
    const decodedToken = jwt.verify(token,"thisismysecrete" );
    console.log(decodedToken);
    var someData=['Lorrem','Ipsum'];
    res.status(200).json({success:true, data:{userId:decodedToken.userId,data:someData}});    
    }
    catch
    {
        res.status(200).json({success:false, message: "Error!Token not valid."});
    }
      
  });

  app.get('/getUsers', function (req, res) {
    res.send({"success":true,data:['Scott','Tiger']});  
  });

app.listen(2000)