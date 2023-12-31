const fs=require('fs');
const express= require('express');
const data = require('./data');
// const { use } = require('./login');

const router=express.Router();
 /*
router.get(`/`, (req, res) => {
fs.readFile('message.txt', (err, data) => {
     
      shwmsg =Buffer.concat(data).toString();
    if (err) {
console.log(err)
data = 'No chat Exists'
}
})
})
*/
router.get(`/`,(req, res,next) => {
    fs.readFile('message.txt', (err, data) => {
         
        // shwmsg =Buffer.concat(data).toString();
      //console.log(shwmsg);
       if (err) {
       console.log(err)
       data = 'No chat Exists'
       }
res.send(`${data}<div id="showmsg"></div></br><form action="/" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')"
       method="POST"><input id="message" name="message" type="text"placeHolder="message"><input type="hidden" name="username" id="username"><button type="submit">send</button></form>`)
    
       
       })

      })
router.post(`/`,(req, res, next) => {
    
    data.push(`{${req.body.username}:${req.body.message}}`)
    console.log(data);
    // res.send(`<h6>${req.body.username}:${req.body.message}</h6>`)
    console.log(`${req.body.username}:${req.body.message}`);
    const message=`${req.body.username}:${req.body.message}`;
    fs.appendFile('message.txt', message, function (err) {
                
     //   res.statusCode=302;
     //   res.setHeader('Location','/');
     //   return res.end();

    
      });
    res.redirect(`/`)
    
    
})
// localStorage.getItem(`username`)

module.exports = router