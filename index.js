var express = require('express');// Requiring express.js
const { sqrt, ceil, round, fix, log10, cube, sub, division, add, mul, floor, abs, pow ,lcm} = require('mathjs');

const app = express(); //changing module to object to use its inbuilt function
//-----------------------------------// 
app.get('/app/add/:num1/:num2', async (req, res, next) => {
    res.send(
        {
            addednum: Number(req.params.num1) + Number(req.params.num2)
        }
    )
});


// Get request to send the data to the server
app.get('/app/sub/:num1/:num2', async (req, res, next) => {
    res.send(

        {
            substraction: Number(req.params.num1) - Number(req.params.num2)
        }

    )
});


//-------------------division........................//
app.get('/app/div/:num1/:num2', async (req, res, next) => {
    res.send(
        {
            division: Number(req.params.num1) % Number(req.params.num2)
        }
    )


});



//................mul............................//
app.get('/app/mul/:num1/:num2', async (req, res, next) => {

    res.send(
        {
            mul: Number(req.params.num1) * Number(req.params.num2)
        }

    )


});


//.....................sqrt...........................//
app.get('/app/sqrt/:num1', async (req, res, next) => {
    res.send(

        {
            sqrt: sqrt(Number(req.params.num1))
        }
    )
});



//.......................ceil.........................//
app.get('/app/ceil/:num1', async (req, res, next) => {
    res.send(

        {
            ceil: ceil(Number(req.params.num1))
        }
    )
});


app.get('/app/round/:num1', async (req, res, next) => {
    res.send(
        {

            round: round(Number(req.params.num1))

        }


    )

});



app.get('/app/fix/:num1', async (req, res, next) => {
    res.send(
        {

            fix: fix(Number(req.params.num1))

        }

    )

});


app.get('/app/log10/:num1', async (req, res, next) => {
    res.send(
        {

            log10: log10(Number(req.params.num1))

        }

    )

});


app.get('/app/abs/:num1', async (req, res, next) => {
    res.send(


        {
            abs: abs(Number(req.params.num1))

        }
    )
}



)



app.get('/app/floor/:num1', async (req, res, next) => {

    res.send(
        {
            floor: floor(Number(req.params.num1))
        }
    )
});


app.get('/app/cube/:num1', async (req, res, next) => {

    res.send(
        {
            cube: cube(Number(req.params.num1))
        }
    )
});


app.get('/app/pow/:num1/:num2', async (req, res, next) => {

    res.send(
        {
            pow: pow(Number(req.params.num1), Number(req.params.num2))
        }
    )
});


app.get('/app/lcm/:num1/:num2', async (req, res, next) => {

    res.send(
        {
            lcm: lcm(Number(req.params.num1), Number(req.params.num2))
        }
    )
});












//....................................

var port = 4001;
app.listen(port);
console.log('server is running on port' + port);