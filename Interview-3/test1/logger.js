function logger(req,res,next){
    let date = new Date()
    console.log(date);
    next();
}

module.exports = logger