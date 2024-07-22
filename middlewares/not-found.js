const notFound = (req,res) => {
  return res.status(404).send('We couldn’t find the requested page. Please check the URL or try a different path.')
}

module.exports = notFound