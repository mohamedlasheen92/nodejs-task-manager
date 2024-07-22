const { CustomError } = require("../errors/CustomError")

const errorHandlerMiddleware = (err, req, res, next) => {

  if (err instanceof CustomError) {
    return res.status(err.status).json({message: err.message})
  }
  
  res.status(500).send('Something went wrong, Please try again!')
  // return res.status(404).json({message: err.message})

}


module.exports = errorHandlerMiddleware