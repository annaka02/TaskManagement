//creer 5controller pour lister
// lister toutes les taches 
// Simulation de données (exemple)
const task = require("../model/task.model");
const Task = require("../model/task.model")
let tasks = [
    { id: 1, name: 'Tâche 1', completed: false },
    { id: 2, name: 'Tâche 2', completed: true },
  ];
  
  // Lister les tâches
  exports.listTasks = (req, res) => {
    res.status(200).json(Task.getAllTask());
  };
  
  // Ajouter une tâche
  exports.createTask = (req, res) => {
    const { title, description } = req.body;
    const tache = Task.create(title, description);
    res.status(201).json(tache);
  };
  
  // Mettre à jour une tâche
  exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { name, completed } = req.body;
    const task = tasks.find(t => t.id === parseInt(id));
  
    if (task) {
      task.name = name || task.name;
      task.completed = completed !== undefined ? completed : task.completed;
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Tâche non trouvée' });
    }
  };
  
  // Supprimer une tâche
  exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === parseInt(id));
  
    if (index !== -1) {
      const deletedTask = tasks.splice(index, 1);
      res.status(200).json(deletedTask);
    } else {
      res.status(404).json({ message: 'Tâche non trouvée' });
    }
  };
  
// pouvoir acceder aux taches depuis index.js 
// git add . git commit -m "commentaire" git push 
// npm init npm install express / body-parser
