//3.3 UX향상을 위한 이미지 레이지 로드 구축
//사용자가 보고 있는 이미지만을 효율적으로 로드해서 UX를 향상시키기

//1. express를 이용해 서버 구축하기
const express = require('express')
const path = require('path')
const app = express()
const _path = path.join(__dirname, './dist1')
app.use('/', express.static(_path))
app.listen(12010, () => {
    console.log('lazy image server : 12010시작 http://127.0.0.1:12010')
})