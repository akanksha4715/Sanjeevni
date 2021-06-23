exports.pagenotfound = (req,res,next)=>{
    res.status(404).send('<h1> PAGE NOT FOUND PLEASE ENTER CORRECT URL</h1>')
}