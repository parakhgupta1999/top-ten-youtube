const http = require('http')
const express = require('express')
const app=express()
const fs = require ('fs')
const port = 3000



//views
app.set('views','./views')
app.set('view engine','ejs')

app.get('',(req,res)=>{
    res.render('index',{text:'this is ya phir ejs'})
})

//static filen
app.use(express.static('public'))
app.use('/css',express.static(__dirname +'public/css'))
app.use('/js',express.static(__dirname +'public/js'))
app.use('/img',express.static(__dirname +'public/img'))





//pport listen
app.listen(port,()=> console.info('server chalu ' + port+ ' pr'))



/*app.get('',(req,res)=>{
    res.sendFile('raju mera paisa de')
})

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type': 'text/html'})
    fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead(404)
            res.write('Error:file nhimmili')
        }else {
            res.write(data)
        }
        res.end()
    })
})
server.listen(port,function(error){
    if(error){
        console.log('something something is galat',error)
    }else {
        console.log('Server chalapada '+ port + ' pr')
    }
})*/