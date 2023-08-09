const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')
const mongoose = require('mongoose')
const app = express()
const port = 3000

//mongoose connect
mongoose.connect('mongodb://localhost:27017/toDoListDB')


// ejs use
app.set('view engine', 'ejs');

//bodyparser use
app.use(bodyParser.urlencoded({extended: true}))

//static resources
app.use(express.static("public"))

//getDay and getDate from date custom module
var formattedDay = (date.getDate())

app.listen(port, (req, res)=>{
    console.log("Server listening on port "+port)
})

// making mongoose schema and model
const tasksSchema = new mongoose.Schema({
  name: String
})

const Task = new mongoose.model("Task", tasksSchema)

const task1 = new Task({
  name: "Clean room"
})

const task2 = new Task({
  name: "Get food"
})

const defaultItems = [task1, task2]


app.get("/", (req, res)=>{
  Task.find({}).exec()
  .then((tasks)=>{
    if(tasks.length == 0){
      
      Task.insertMany(defaultItems)

      res.render("list.ejs", {listTitle: formattedDay , taskInput: tasks})
    }else{
      res.render("list.ejs", {listTitle: formattedDay , taskInput: tasks})
    }
  })

  .catch((err)=>{
    console.log(err+": Error error error error error ")
  })
})

app.post('/', (req, res) => {
  let taskName = req.body.taskInput;

  const task = new Task({
    name: taskName
  })

  task.save()
  res.redirect('/')
  
})

app.post('/delete', (req, res)=>{
  const checkedTaskID = (req.body.checkBox)
  Task.findByIdAndDelete(checkedTaskID).exec()
  .then(()=>{
    console.log("Successfully deleted id:"+checkedTaskID)
  })
  .catch((err)=>{
    console.log("Error deleting id: "+checkedTaskID)
  })

  res.redirect('/')
})

