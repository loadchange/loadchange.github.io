const fs = require('fs');
const path = require('path');
const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const SIZE = 15;
const EXIST_ARTICLE_IDS = [];
const QUALIFIED_LIST = [];
async function loadData(pageNum = 2) {
  await new Promise((resolve, reject) => {
    axios
      .get('https://yq.aliyun.com/')
      .then(function({ data }) {
        const [, token] = data.match(/\<meta name=\"csrf-token\" content=\"(.*)\"\/>/) || [];
        if (!token) {
          reject('Token does not exist!');
          return;
        }
        axios({
          method: 'post',
          url: `https://yq.aliyun.com/homepage/${pageNum}`,
          data: {
            articleIds: EXIST_ARTICLE_IDS.join(',')
          },
          headers: {
            origin: 'https://yq.aliyun.com',
            referer: 'https://yq.aliyun.com/',
            'x-requested-with': 'XMLHttpRequest',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'user-agen': ' Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
            'x-csrf-token': token
          },
          transformRequest: [
            data => {
              let ret = '';
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
              }
              return ret;
            }
          ]
        }).then(res => {
          const dom = new JSDOM(res.data);
          const { children } = dom.window.document.body;
          for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName === 'SCRIPT') {
              const [, ids] = children[i].innerHTML.match(/\n    var articleIds =  {"articles": \[(.*)\]\n    };\n/);
              if (ids) {
                ids
                  .split(',')
                  .filter(item => item)
                  .forEach(item => EXIST_ARTICLE_IDS.push(item));
              }
              continue;
            }
            if (children[i].children.length === 3) {
              QUALIFIED_LIST.push(children[i]);
            }
          }
          resolve();
        });
      })
      .catch(error => reject(error));
  });
  if (QUALIFIED_LIST.length !== SIZE) {
    loadData(pageNum + 1);
  }
  const result = JSON.stringify({
    success: true,
    list: QUALIFIED_LIST.map(item => {
      const [a, info, pic] = item.children;
      return {
        link: `https://yq.aliyun.com${a.getAttribute('href')}?userCode=kjqxfok3`,
        title: info.children[0].children[0].innerHTML.trim(),
        pic: pic.children[0].children[0].getAttribute('src')
      };
    })
  });
  const distPath = path.join(__dirname, '../dist/data');
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }
  fs.writeFileSync(`${distPath}/aliyun-config.json`, result);
}

loadData();
