// 網站內容集中在這裡，修改文字、價格、聯絡方式只需要改這個檔案

export const site = {
  name: 'Elmo Web Studio',
  tagline: '幫在地小店，做一個會幫你接生意的網站',
  email: 'alvin4883889@gmail.com',
  // 到 https://web3forms.com 輸入上面的 email 取得 access key，貼在這裡表單就能直接寄信
  // 留空時會改為開啟訪客的信箱程式
  web3formsKey: 'f90a7a59-6aee-40c2-9095-a21bf7cbeab5',
  lineUrl: '', // 例如 'https://line.me/ti/p/~yourid'，留空就不顯示 LINE 按鈕
}

// 作品依排列順序顯示，第一個最顯眼，建議放最滿意的作品
// shot 對應 public/works/{shot}-desktop.jpg 與 {shot}-mobile.jpg 兩張截圖
// 概念作品（非真實客戶）請加上 concept: true，會標示「概念作品」
export const works = [
  {
    name: '霧夜 Nafu cafe',
    type: '咖啡廳 + 線上訂位',
    location: '桃園',
    url: 'https://nafucafe-a.web.app',
    shot: 'nafu',
    summary: '在霧裡，替夜晚留一盞燈。用暗色調與手寫字還原店裡夜晚的氛圍，菜單、毛孩須知、營業時間整理清楚，看完就能直接線上訂位。',
    tags: ['線上訂位', '菜單展示', '品牌氛圍'],
  },
  {
    name: '匹克俱樂部 PICKLE CLUB',
    type: '匹克球俱樂部 + 體驗課預約',
    location: '台北・新北・桃園',
    url: 'https://pickleball-a.web.app',
    shot: 'pickle',
    summary: '給第一次打匹克球的人。活潑的螢光綠配插畫球拍，用場地圖解說明第一堂課會做什麼，近期場次、剩餘名額與候補一目了然，三個場館分開介紹，團體包班也能直接詢問。',
    tags: ['體驗課預約', '名額與候補', '多場館介紹'],
  },
  {
    name: 'DAILY BREW',
    type: '精品咖啡品牌 + 線上點餐',
    location: '台北',
    url: 'https://dailybrew-a.web.app',
    shot: 'dailybrew',
    summary: '城市步調的精品咖啡品牌。深咖啡底色搭配大字標題與立體咖啡杯、豆袋，菜單、三間門市與各自營業時間一次看清楚，客人可以線上先點、到店直接取餐。',
    tags: ['線上點餐', '多門市資訊', '品牌視覺'],
  },
  {
    name: '初色 Hatsu Nail Atelier',
    type: '美甲工作室 + 線上預約',
    location: '台北大安',
    url: 'https://nail-reservation-a.web.app',
    shot: 'nail',
    summary: '預約制美甲工作室。安靜的米白配色搭配大幅甲片照片，價目、本季款式與美甲師介紹一目了然。客人可以指定美甲師即時預約，也能自己查詢或取消，店家有專屬後台管理時段。',
    tags: ['線上即時預約', '指定美甲師', '店家後台'],
  },
  {
    name: '靜所 Still Studio',
    type: '皮拉提斯教室 + 線上預約',
    location: '台北大安',
    url: 'https://pilates-reservation-a.web.app',
    shot: 'still',
    summary: '精品皮拉提斯教室。Reformer、墊上、產前與私人課程分類清楚，搭配預約系統，留住每一位想上課的客人。',
    tags: ['線上預約', '品牌形象', '課表'],
  },
  {
    name: 'June Cakee',
    type: '甜點工作室網站',
    location: '中壢平鎮',
    url: 'https://junecakee.com',
    shot: 'june',
    summary: '鮮奶油蛋糕、巴斯克的甜點工作室。手繪感的插畫與溫暖配色，商品一覽清楚好逛，看完直接透過 LINE 預訂，並綁定專屬網域。',
    tags: ['商品展示', 'LINE 預訂', '自有網域'],
  },
  {
    name: '即動 ACTION GYM',
    type: '健身工作室 + 線上預約',
    location: '楊梅',
    url: 'https://gymactiongym.web.app',
    shot: 'gym',
    summary: '1 對 1、1 對 2 小班制私人教練課程。學員可以直接在網站上預約每週固定時段，減少來回訊息。',
    tags: ['線上預約', '課程介紹', '會員時段'],
  },
  {
    name: '里昂影像 Leon Photography',
    type: '攝影師作品集網站',
    location: '人像・婚禮・商業攝影',
    url: 'https://leonphotography.web.app',
    shot: 'leon',
    summary: '以作品為主角的攝影師網站。六大分類相簿點開即可全螢幕瀏覽，方案價格清楚，看完直接私訊預約檔期。',
    tags: ['作品集相簿', '全螢幕燈箱', '方案價目'],
  },
  // 尚未上線，上線後取消註解即可
  // {
  //   name: '新月 LUNE Pilates',
  //   type: '器械皮拉提斯教室',
  //   location: '台北大安',
  //   url: 'https://lunepilates.web.app',
  //   shot: 'lune',
  //   summary: '柔和的奶茶色搭配月亮意象，呈現器械皮拉提斯的安靜與平衡。課程、器械、團課課表與場地租借分類清楚，從一堂體驗課開始預約。',
  //   tags: ['體驗課預約', '團課課表', '場地租借'],
  // },
  // 暫時隱藏，要恢復時取消註解並補上截圖
  // {
  //   name: '1000cc coffee & cookie',
  //   type: '咖啡廳形象網站',
  //   location: '桃園中壢',
  //   url: 'https://cccafe-a52e2.web.app',
  //   shot: 'cccafe',
  //   summary: '木格窗邊的小咖啡廳。用照片與溫暖的排版呈現店內氛圍，營業時間、地址與寵物友善資訊一眼就能看到。',
  //   tags: ['形象網站', '菜單展示', 'Google 地圖'],
  // },
]

export const services = [
  {
    title: '形象網站',
    desc: '把店的故事、照片、營業資訊放在一個好看又好找的地方。客人搜尋你的店名時，看到的是你自己的網站。',
  },
  {
    title: '線上預約系統',
    desc: '課程、座位、服務時段讓客人自己選。不用再一則一則回訊息排時間，也不怕漏接。',
  },
  {
    title: '手機優先設計',
    desc: '八成以上的客人是用手機看。每個頁面都先為手機設計，再延伸到電腦。',
  },
  {
    title: 'Google 搜尋與地圖',
    desc: '基本 SEO、Google 商家與地圖設定，讓附近的人更容易找到你。',
  },
  {
    title: '網域與主機',
    desc: '協助申請專屬網域（例如 yourshop.com），主機、SSL 安全憑證一次處理好。',
  },
  {
    title: '上線後維護',
    desc: '換菜單、改價格、加公告，傳訊息給我就好，不用自己學後台。',
  },
]

export const steps = [
  { title: '聊聊需求', desc: '免費諮詢。了解你的店、你的客人，以及你希望網站幫你做到什麼。' },
  { title: '提案報價', desc: '依需求給出頁面規劃與明確報價，沒有隱藏費用。' },
  { title: '設計製作', desc: '你提供照片與文字（或由我協助整理），我負責設計與開發，過程中隨時可以看進度。' },
  { title: '上線交付', desc: '確認沒問題後正式上線，並教你如何查看與分享網站。' },
]

// 價格請依實際情況調整
export const plans = [
  {
    name: '基本形象',
    price: 'NT$ 12,000 起',
    desc: '剛開始經營網路的小店',
    features: ['單頁式形象網站', '手機 / 電腦自適應', '營業資訊與 Google 地圖', 'LINE / IG 連結', '基本 SEO 設定'],
  },
  {
    name: '品牌完整',
    price: 'NT$ 25,000 起',
    desc: '想好好呈現品牌的店家',
    features: ['多頁式網站（最多 5 頁）', '菜單 / 商品展示頁', '專屬網域設定協助', '分享預覽圖', '上線後 1 個月免費修改'],
    featured: true,
  },
  {
    name: '預約系統',
    price: 'NT$ 40,000 起',
    desc: '課程、工作室、服務業',
    features: ['包含「品牌完整」所有內容', '線上預約與時段管理', '預約通知', '店家管理後台', '上線後 3 個月免費修改'],
  },
]

export const faqs = [
  {
    q: '我完全不懂網站，也可以做嗎？',
    a: '可以。我合作的客戶大多是第一次做網站。你只要準備好店的照片和基本資訊，其他的我會一步一步帶你完成。',
  },
  {
    q: '做一個網站大概要多久？',
    a: '基本形象網站約 1–2 週，有預約功能的網站約 3–5 週，實際時間會依內容準備的速度而定。',
  },
  {
    q: '我已經有 IG / 粉專了，還需要網站嗎？',
    a: '社群適合發布近況，但貼文容易被洗掉。網站能把最重要的資訊（菜單、價格、地址、預約）整理好，也更容易被 Google 搜尋到，兩者搭配效果最好。',
  },
  {
    q: '之後想修改內容怎麼辦？',
    a: '每個方案都包含上線後的免費修改期。之後也可以按次或按月維護，文字、照片、價格的小修改通常當天就能完成。',
  },
  {
    q: '每年還需要付什麼費用？',
    a: '若使用專屬網域，每年約需支付網域費用（約 NT$ 400–1,000）。一般流量的小店網站，主機費用通常非常低甚至免費，報價時會先跟你說清楚。',
  },
]
