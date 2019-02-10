const walk = require('walk');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const articleDir = path.join(__dirname, '..', 'article')
const article = [];
var walker;

walker = walk.walk(articleDir, {});

walker.on("names", (root, nodeNamesArray) => {
  nodeNamesArray.sort((a, b) => isNaN(a) && isNaN(b) ? a < b : a > b);
});

walker.on("file", (root, fileStats, next) => {
  const filePath = root + '/' + fileStats.name;
  fs.readFile(fileStats.name, function () {
    const link = filePath.match(new RegExp(`${articleDir}(.*).md$`))
    if (link && link.length === 2) {
      const fRead = fs.createReadStream(filePath);
      const objReadline = readline.createInterface({
        input: fRead,
        terminal: true
      });
      const item = { link: link[1] };
      objReadline.on('line', (line) => {
        const m1 = line.match(/^# (.*)/)
        const m2 = line.match(new RegExp(`<div class="describe">(.*)</div>`))
        const m3 = line.match(new RegExp(`<img class="thumbnail" src="(.*)" />`))
        if (!item.title && m1) {
          item.title = m1[1]
        }
        if (!item.describe && m2) {
          item.describe = m2[1].length > 55 ? m2[1].substring(0, 55) + '....' : m2[1]
        }
        if (!item.thumbnail && m3) {
          item.thumbnail = m3[1]
        }
        if (item.title && item.describe && item.thumbnail) {
          objReadline.close();
        }
      });


      article.push(item)
    }
    next();
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
    fs.writeFileSync(`${distPath}/${fileName}`, JSON.stringify(json), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`article-list-${(i + 1)}.json success`);
      }
    });
  }
  const results = {
    "success": true,
    total,
    size,
    listConfig
  }
  fs.writeFileSync(`${distPath}/article-config.json`, JSON.stringify(results), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('article-config.json success');
    }
  });
}