const express = require ('express');
const bodyParser = require ('body-parser');
const taskRoutes = require('./routes/task.routes');
const app = express(); 
app.use(bodyParser.json());

app.use(express.json()); // Pour parser le JSON

// Utiliser les routes pour les tâches
app.use('/api/tasks', taskRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({prenom:'anna'})
})
//app.post qui recoit n objet une requete nom et prenom et age et qui retourne si l'utilisateur est apte a rentrer ou pas 

app.post('/users', (req,res) => {
    console.log(req);
    
    const {id, firstName, lastName, age} = req.body;
    if(!id || !firstName || !lastName || age === undefined){
        return res.status(400).json({message: 'Tous les champs sont obligatoires (id, firstName, lastName, age).'});
    }
    if(age< 18){
       return res.status(400).json({message: 'l utilisateur doit au moins avoir 18 ans pour creer un compte'});
    }
    else{
        return res.status(200).json({id,firstName, lastName, age});
    }
});

app.post('/addUsers', (req,res) => {
    users.push(req.body);
    return res.status(200).json(users);
})
let users = [
    { id: 1, firstName: "Anna", lastName: "Ka", age: 25 },
    { id: 2, firstName: "Ali", lastName: "Ndiaye", age: 30 }
];

// delete user 
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    const index = users.findIndex(user => user.id == id);
    if(index === -1){
        return res.status(404).json({message: 'Utilisateur non trouvé'});
    }
    users.splice(index, 1);
    res.status(200).json({
        message: `Utilisateur avec ID ${id} supprimé avec succès.`,
    remainingUsers: users
});
});



//update 
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    const index = users.findIndex(user => user.id == id);
    if(index === -1){
        return res.status(404).json({message: 'Utilisateur non trouvé'});
    }
    users[index] = req.body;
    res.status(200).json({
        message: `Utilisateur avec ID ${id} modifié avec succès.`,
    updatedUser: users[index]
});
});
app.get('/allUsers', (req,res) => {
    res.status(200).json(users);
})
app.get('/getbyid/:id',(req,res)=>{
    const id = +req.params.id;
    console.log("id :",id);
    
    const user = users.filter(u => u.id === id);
    console.log(user);
    
    res.status(200).json(user);
})
app.listen(3000,()=>{
    console.log("executer dans le port 3000");
    
});