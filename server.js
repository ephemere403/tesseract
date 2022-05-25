const app = require('./app.js')
const port = process.env.PORT || 27017

app.listen(port, () => console.log('Ephemere+ server has been started on port 27017'))