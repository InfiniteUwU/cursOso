const uploadFile = (req, res) => {
  const fileName = req.files.myFile.name
  const path = __dirname + '/uploads/' + fileName
    file.mv(path, (error) => {
      if (error) {
      console.error(error)
      res.writeHead(500, {

        "Content-Type": "application/json"
      })
      res.end(JSON.stringify({ status: "error", message: error }))
      return
      }
    })
};

const uploadFileView = (req, res) => {
  res.render("uploadFile", {});
};

module.exports = {
    uploadFileView,
    uploadFile,
};