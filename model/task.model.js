let nextId = 1;
const tasks = {};
const task = {
    create(title, description){
        const id = nextId++;
        const task = {
            idTask : id ,
            title : title,
            description : description, 
            status: "en cours",
            createAt : new Date(),
        };
        tasks[id] = task
        return task;
    },
    getAllTask(){
        return tasks;
    }
}



module.exports = task;