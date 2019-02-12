const walk = require('walk');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const articleDir = path.join(__dirname, '..', 'article')
const article = [];
const CONF_BLOCK_TAG = '---'
const STATE = { NOT_STARTED: -1, RECORD: 1, END: 0 }
var walker;

walker = walk.walk(articleDir, {});

walker.on("names", (root, nodeNamesArray) => {
  nodeNamesArray.sort((a, b) => isNaN(a) && isNaN(b) ? a < b : a > b);
});

walker.on("file", (root, fileStats, next) => {
  const filePath = root + '/' + fileStats.name;
  fs.readFile(fileStats.name, () => {
    const link = filePath.match(new RegExp(`${articleDir}(.*).txt$`))
    if (link && link.length === 2) {
      const fRead = fs.createReadStream(filePath);
      const objReadline = readline.createInterface({
        input: fRead,
        terminal: true
      });
      const item = { link: link[1] };
      const frontMatter = []
      let status = STATE.NOT_STARTED;
      objReadline.on('line', (line) => {
        if (line.trim() === CONF_BLOCK_TAG) {
          status = status === STATE.NOT_STARTED ? STATE.RECORD : STATE.END;
          if (status === STATE.END) {
            objReadline.close();
          }
        } else {
          if (status === STATE.RECORD) {
            frontMatter.push(line);
          }
        }
      });
      objReadline.on('close', () => {
        const json = JSON.parse(frontMatter.join(''));
        if (json.describe && json.describe.length > 55) {
          json.describe = json.describe.substring(0, 55) + '....';
        }
        article.push(Object.assign({}, item, json));
        next();
      });
    }

  });
});

walker.on("errors", (root, nodeStatsArray, next) => {
  console.log('Error:' + root);
  next();
});

walker.on("end", () => {
  writeConf();
  console.log("all done");
});

function writeConf() {
  const total = article.length;
  const size = 15;
  const listConfig = [];
  const pageCount = parseInt(total / size) + (total % size ? 1 : 0);
  let idx = 0;
  const distPath = path.join(__dirname, '../dist/data')
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath)
  }
  for (let i = 0; i < pageCount; i++) {
    const json = {
      success: true,
      size,
      pageNumber: i + 1,
      articleLists: []
    }
    for (let j = 0; j < size; j++) {
      json.articleLists.push(article[idx]);
      idx++;
      if (idx >= total) break
    }
    const fileName = `article-list-${(i + 1)}.json`;
    listConfig.push(fileName);
    fs.writeFileSync(`${distPath}/${fileName}`, JSON.stringify(json));
  }
  fs.writeFileSync(`${distPath}/article-config.json`, JSON.stringify({
    success: true,
    total,
    size,
    listConfig
  }));
}
