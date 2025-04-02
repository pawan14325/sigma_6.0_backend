let  express=require('express');
let app=express();
app.set('view engine','ejs');
app.post('/login',(req,res)=>{
res.send('User logged in successfully')
});

app.get('/',(req,res)=>{ 
        return res.render('home.ejs');
    
 })

 app.get('/rollDice',(req,res)=>{
    let result=Math.floor(Math.random()*6)+1;
     res.render('roll_dice.ejs',{result});
 });

app.listen(8080,()=>{
    console.log(`listening on 8080`);
    
});