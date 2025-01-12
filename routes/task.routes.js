const express = require('express');
const router = express.Router();
const taskController = require('../controller/task.controller');

// Routes CRUD pour les tâches
router.get('/', taskController.listTasks);        // Lister les tâches
router.post('/', taskController.createTask);      // Créer une tâche
router.put('/:id', taskController.updateTask);    // Mettre à jour une tâche
router.delete('/:id', taskController.deleteTask); // Supprimer une tâche

module.exports = router;
