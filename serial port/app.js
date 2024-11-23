const express=require('express');
const app=express();
var bodyParser = require('body-parser')
const { SerialPort, ReadlineParser } = require('serialport')
const port = new SerialPort({ path:"COM3", baudRate:115200 });
var parser = new ReadlineParser()
port.pipe(parser)
let data1=''
parser.on('data',(data)=>{
    
    data1=data
    console.log(data)

})


app.use(bodyParser.urlencoded({extended:false}))
app.post('/post/',(req,res,next)=>{
     const obj= JSON.parse(JSON.stringify(req.body))
    const pre=Object.keys(obj)
    console.log(133)
    console.log(pre[0])
    port.write(pre[0])
   
})
app.get('/',(req,res,next)=>{
    res.json({"seelan":data1})

})

app.listen(8000,()=>{
    console.log("lsitening 8000 port...")
})
