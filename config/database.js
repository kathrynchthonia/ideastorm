if(process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: "mongodb://<tony>:<tony4444>@ds111993.mlab.com:11993/ideastorm-prod"}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/ideastorm-dev'}
}