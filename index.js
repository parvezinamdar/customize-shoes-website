const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const shortid = require('shortid');
const app = express();
const Razorpay = require('razorpay');


const razorpay = new Razorpay({
    key_id: 'rzp_test_KL9qhWThCki1nN',
    key_secret: 'DzZlmYK3kck9Lunerdmgqsco',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/logo.svg', (req,res) => {
    res.sendFile(path.join(__dirname, 'logo.svg'))
})

app.post('/verification', (req, res) => {
    //do a validation

    const secret = '12345678'

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
        console.log('PASS IT');
		// pass it
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req,res)=> {

    console.log('REQ',req.body.price);
    // console.log('Response',res);
    const payment_capture = 1
    const amount = 999
    const currency = 'INR'
    const option = {
        amount: amount * 100, 
        currency, 
        receipt: shortid.generate(), 
        payment_capture
    }
    try {
        const response = await razorpay.orders.create(option)
        console.log(response)
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    }
    catch(error){
        console.log(error)
    }
})

app.get('/',() => {
    resizeBy.send('welcome to my form')
})

app.post('/api/form',(req,res)=> {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        port:587,
        auth:{
            user:'elvis1234.pi@gmail.com',
            pass:'parvez9867'
        }
    });

    let mailOptions={
        from: data.email,
        to:'elvis1234.pi@gmail.com',
        subject: `Message from ${data.name}`,
        html:`
        
        <h3>Information</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
            </ul>

            <h3>Message</h3>
            <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error,response)=>{
        if(error){
            res.send(error)
        }else{
            res.send('Success')
        }
    })

    smtpTransport.close();
})

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`);
})