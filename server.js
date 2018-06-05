var createError = require('http-errors')
var express = require('express')
var hbs = require('express-handlebars')
var sassMiddleware = require('node-sass-middleware')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var app = express()

// view engine setup
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/src/views/layout',
    partialsDir: [__dirname + '/src/views/partials'],
  })
)
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'hbs')

if (app.get('env') == 'development') {
  var browserSync = require('browser-sync')
  var browserSyncConfig = {
    files: ['public/**/*.{js, css}', 'src/**/*.{js, scss}', 'views/**/*.hbs'],
    logLevel: 'debug',
    logSnippet: false,
    notify: false,
    ui: false,
    reloadDelay: 100,
    reloadOnRestart: true,
  }
  var bs = browserSync(browserSyncConfig)
  app.use(require('connect-browser-sync')(bs))
}

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Add Sass
app.use(
  sassMiddleware({
    src: path.join(__dirname, 'src/scss'),
    dest: path.join(__dirname, 'public/css'),
    prefix: '/css',
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true,
  })
)
app.use(express.static(path.join(__dirname, 'public')))

// Add a line for each new route here:
app.use('/', require('./src/routes/index'))
app.use('/impressum', require('./src/routes/imprint'))
app.use('/users', require('./src/routes/users'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
