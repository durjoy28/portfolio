const express = require('express');
const router = express.Router();

const app=express();
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}) );

/* GET api listing. */
// router.get('/', (req, res) => {
//   res.send('api works');
// }); 
// app.post('/send',(req, res)=>{
//     //console.log(req.body);
// });
// app.get('/*',  function(req, res, next) {
//     console.log("Reloading");
//     res.sendFile('index.html', { root: __dirname }); 
// });

module.exports = router;