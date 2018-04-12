if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI:'mongodb://<dbuser>:<dbpassword>@ds143099.mlab.com:43099/ideaproject'}
}
else{
    module.exports = {mongoURI:'mongodb://localhost/vidjot-dev'}
}