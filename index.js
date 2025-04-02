let  express=require('express');
let app=express();
app.set('view engine','ejs');
app.post('/login',(req,res)=>{
res.send('User logged in successfully')
});

app.get('/',(req,res)=>{
    if (!req.params.userName || !req.params.id) {
        return res.render('home.ejs');
    }
   else{ res.send(`Hello, ${req.params.userName}! Your ID is ${req.params.id}`)}
})
app.listen(8080,()=>{
    console.log(`listening on 8080`);
    
});