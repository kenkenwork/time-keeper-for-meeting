// import express from 'express'
const express = require('express');
// import cors from 'cors'
const cors = require('cors');

const app = express()

//ブラウザが異なるオリジン間でリソースを共有できるようにするための仕組み。
app.use(cors())
// 特定のオリジンのみを許可する場合は以下のように引数に設定する。
// const corsOptions = {
//   origin: 'http://127.0.0.1:5173',
//   optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions))


//jsonデータ利用時には必ず必要！
// JSON パース用ミドルウェア。順番に注意。
app.use(express.json());

// ログを記録するミドルウェア
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

// ここまで必要事項
// ----------------------------------------------------------
// 以下ルート定義

app.get('/jsonData', (req, res) => {
  res.json({
    "2024-07-15":{
      General:"本徳賢朗",
      OpeningPrayer:"長瀬行廣",
      Talk:"松本健男",
      Gems:"竹澤陽介",
      BibleReading:"炭谷健太郎",
    },
    "2024-07-22":{General:"守屋誠太郎",
      OpeningPrayer:"竹澤陽介",
      Talk:"石田　睦",
      Gems:"西田定雄",
      BibleReading:"島村　誠",
    },
    "2024-07-29":{General:"長瀬壮行",
      OpeningPrayer:"松本健男",
      Talk:"梅本雅志",
      Gems:"長瀬行廣",
      BibleReading:"森田正寿",
    },
  })
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.json({ firstName: 'Jiro', lastName: 'Tanaka' },)
})

app.get('/contact', (req, res) => {
  res.send('Contact Page')
})

// ----------------------------------------------------------------------


app.put('/about', (req, res) => {
  // const firstName = req.body.firstName
  // const LastName = req.body.LastName
  // POSTリクエストで受け取ったデータを処理する

  // res.json(req.body)
  res.send(req.body)
  console.log('Received POST request with data:', req.body)
})

app.put('/about', (req, res) => {
  // const firstName = req.body.firstName
  // const LastName = req.body.LastName
  // POSTリクエストで受け取ったデータを処理する

  // res.json(req.body)
  res.send(req.body)
  console.log('Received POST request with data:', req.body)
})

app.post('/about', (req, res) => {
  // const firstName = req.body.firstName
  // const LastName = req.body.LastName
  // POSTリクエストで受け取ったデータを処理する

  // res.json(req.body)
  res.send(req.body)
  console.log('Received POST request with data:', req.body)

})

app.delete('/about', (req, res) => {

  res.send("Delete!!")
  console.log('Received POST request with data:', req.body)

})
//  ----------------------------------------------------------------------
// サーバーの起動
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

app.use(express.static('public'))
