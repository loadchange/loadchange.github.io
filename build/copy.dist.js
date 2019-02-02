const path = require('path')
const fs = require('fs')

const sourceFile = path.join(__dirname, '../dist/index.html')

fs.exists(sourceFile, function (exists) {
  if (!exists) return
  const newIndex = path.join(__dirname, '../index.html')

  const readStream = fs.createReadStream(sourceFile)
  const writeStream = fs.createWriteStream(newIndex)
  readStream.pipe(writeStream)
})

