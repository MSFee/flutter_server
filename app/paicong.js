const superagent = require('superagent');
const cherrio = require('cheerio');
const iconv = require('iconv-lite');
const http = require('http');

const getRandomMuch = () => {
    const tem = Math.floor(Math.random() * 800);
    return `￥${tem + 300}`;
}

const getHotNews = (res) => {
    let hotNews = [];
    let $ = cherrio.load(res);
    $('div.slist ul li a img').each((idx, ele) => {
        let news = {
            imgUrl: `http://pic.netbian.com/${$(ele).attr('src')}`,
            desc:  $(ele).attr('alt'),
            much: getRandomMuch(),
        };
        hotNews.push(news);
    })
    return hotNews;
}

function  getData(index = 1) {
    return new Promise((resolve, reject) => {
        http.get(`http://pic.netbian.com/4kmeinv/index_${index}.html`,function(res){
            var htmlData=[];//用于接收获取到的网页
            var htmlDataLength=0;
            res.on('data',function(chunk){
                htmlData.push(chunk);
                htmlDataLength+=chunk.length;
            })
     
            res.on('end',function(){
                //数据获取完毕后，开始解码
                var bufferHtmlData=Buffer.concat(htmlData,htmlDataLength);
                var decodeHtmlData=iconv.decode(bufferHtmlData,'gbk');
                const  data = getHotNews(decodeHtmlData);
                return resolve(data);
            })
        })
    })

};

async function getAllData() {
   let allData = [];
   for(let i = 1; i < 10; i++) {
        const temData  = await  getData(i);
        allData.push(...temData);
   }
   return allData;
}


module.exports = { getAllData };


        // return new Promise((resolve, reject) => {
        //     superagent.get('http://pic.netbian.com/4kmeinv/index_2.html').end((err, res) => {
        //         if(err) {
        //             console.log('新闻抓取失败')
        //         }else {
        //            const  data = getHotNews(res);
        //            return resolve(data);
        //         }
        //     })
        // })