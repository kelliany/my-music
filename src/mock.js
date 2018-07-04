// 引入mockjs
const Mock = require('mockjs')

// mock一组数据
const produceNewsData = function () {
  let articles = []
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: 'xxx',
      num: i
    }
    articles.push(newArticleObject)
  }
  return {
    articles: articles
  }
}
Mock.mock('/content', 'post', produceNewsData)
