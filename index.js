const express = require ('express');
const bodyParser = require ('body-parser');
const app = express(); 
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).json({prenom:'anna'})
})
//app.post qui recoit n objet une requete nom et prenom et age et qui retourne si l'utilisateur est apte a rentrer ou pas 

app.post('/users', (req,res) => {
    console.log(req);
    
    const {firstName, lastName, age} = req.body;
    if(!firstName || !lastName || !age === undefined){
        return res.status(400).json({message: 'Tous les champs sont obligatoires (firstName, lastName, age).'});
    }
    if(age< 18){
return res.status(400).json({message: 'l utilisateur doit au moins avoir 18 ans pour creer un compte'});
    }
    else{
        return res.status(200).json({firstName, lastName, age});
    }
});
let users = [];
app.post('/addUsers', (req,res) => {
    users.push(req.body);
    return res.status(200).json(users);
})
// delete user and update user


app.listen(3000,()=>{
    console.log("executer dans le port 3000");
    
});