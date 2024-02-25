const express = require('express')
const exphbs = require('express-handlebars')
const port = 3337
const app = express()
const conn = require('./db/conn')
const Task = require('./models/Task')
const taskRouters = require('./routes/tasksRouters')



app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())
app.use(express.static('public'))

app.use('/tasks', taskRouters)

conn.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running with success in port ${port}`);
    })
}).catch((err) => console.log(err))