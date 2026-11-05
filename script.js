'use strict';
// please do not delete the 'use strict' line above

const side = [
  {
    name:"冷奴",
    ingredients:["豆腐"]
  },
  {
    name:"ほうれん草のお浸し",
    ingredients:["ほうれん草", "かつお節"]    
  },
  {
    name:"ほうれん草の胡麻和え",
    ingredients:["ほうれん草","ゴマ"]
  },
  {
    name:"ほうれん草のマスタードめんつゆ和え",
    ingredients:["ほうれん草","マスタード", "めんつゆ"]
  },
  {
    name:"小松菜と油揚げのおひたし",
    ingredients:["小松菜", "油揚げ"]
  },
  {
    name:"きんぴらごぼう",
    ingredients:["ごぼう", "ニンジン", "ごま"]
  },
  {
    name:"アボカド長芋マグロのワサビ醤油",
    ingredients:["アボカド", "長芋", "マグロ", "ワサビ"]
  },
  {
    name:"揚げ出し豆腐",
    ingredients:["豆腐", "厚揚げ", "片栗粉"]
  },
  {
    name:"ハムもやきゅうりのナムル",
    ingredients:["きゅうり", "ハム", "もやし"]
  },

]

const dinner = [
  {
    name:"鮭の塩焼き",
    ingredients:["鮭"]
  },
  {
    name:"鯖の塩焼き",
    ingredients:["鯖"]
  },
  {
    name:"鰆の塩焼き",
    ingredients:["鰆"]
  },
  {
    name:"鰤の塩焼き",
    ingredients:["鰤"]
  },
  {
    name:"ぶりの照り焼き",
    ingredients:["ぶり"]
  },
  {
    name:"豚の生姜焼き",
    ingredients:["生姜", "豚肉（ロースorバラ）"]
  },
  {
    name:"唐揚げ",
    ingredients:["鶏肉（モモorムネ）", "唐揚げのもと", "片栗粉", "卵"]
  },
  {
    name:"カレー",
    ingredients:["肉（牛、豚、鶏）", "カレー粉", "じゃがいも", "にんじん", "たまねぎ"]
  },
  {
    name:"シチュー",
    ingredients:["肉（牛、豚、鶏）", "カレー粉", "じゃがいも", "にんじん", "たまねぎ"]
  },
  { 
    name:"白菜と豚バラのミルフィーユ鍋",
    ingredients:["豚バラ肉", "白菜1/2以上", "だしの素"]
  },
  {
    name:"麻婆豆腐",
    ingredients:["豆腐", "麻婆豆腐のもと", "ひき肉"]
  },
  {
    name:"回鍋肉",
    ingredients:["豚バラ肉", "回鍋肉のもと", "キャベツ", "ピーマンorパプリカ"]
  },
  {
    name:"豚バラ大根",
    ingredients:["豚バラ肉", "大根"]
  },
  {
    name:"ぶり大根",
    ingredients:["ぶり", "大根"]
  },
  {
    name:"ハンバーグ",
    ingredients:["ひき肉", "パン粉", "卵", "玉ねぎ", "デミグラスソース"]
  },
  {
    name:"鶏肉の甘酢餡",
    ingredients:["にんじん", "玉ねぎ", "鶏肉"]
  },
  {
    name:"照り焼きチキン",
    ingredients:["鶏肉", "醤油", "砂糖", "みりん"]
  },
  {
    name:"照りマヨチキン",
    ingredients:["鶏肉", "醤油", "マヨネーズ", "砂糖", "みりん"]
  },
  {
    name:"チキン南蛮",
    ingredients:["鶏肉","卵", "マヨネーズ", "ネギ", "玉ねぎ", "小麦粉or片栗粉"]
  },
  {
    name:"豚の味噌焼き",
    ingredients:["豚肉", "味噌"]
  },
  {
    name:"鶏のトマト煮",
    ingredients:["鶏肉", "トマトorトマト缶", "ニンジン", "玉ねぎ", "チーズ", "ウィンナー"]
  },
  {
    name:"鶏肉のカレー炒め",
    ingredients:["鶏肉", "カレーパウダー"]
  },
  {
    name:"鶏むね肉のガーリックバター炒め",
    ingredients:["鶏肉", "ニンニク", "バター"]
  },
 
]

const lunch = [
  {
    name:"ソース焼きそば",
    ingredients:["麺", "ソース", "肉", "キャベツ", "もやし"]
  },
  {
    name:"うどん",
    ingredients:["うどん", "うどんスープのもと", "めんつゆ"]
  },
  {
    name:"ラーメン",
    ingredients:["ラーメン"]
  },
  {
    name:"オムライス",
    ingredients:["卵", "ごはん", "鶏肉", "ケチャップ", "デミグラスソース", "玉ねぎ"]
  },
  {
    name:"牛丼",
    ingredients:["牛肉", "玉ねぎ", "紅ショウガ"]
  },
  {
    name:"親子丼", 
    ingredients:["鶏肉", "卵", "玉ねぎ"]
  },
 
]


const morning = [
  "食パン",
  "菓子パン",
  "総菜パン",
  "ごはん＆味噌汁（和食）"
]

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
]

const dayName = [
  "月曜日",
  "火曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日",
  "日曜日"
]



const shoppingList = document.getElementById("shoppingList");
const button = document.getElementById("sakusei-button");

button.addEventListener("click", function() {

  // 前回の購入材料を消す
  shoppingList.innerHTML = "";

  for (let i = 0; i < days.length; i++) {

    // 朝・昼・晩をランダムに選択
    const morningIndex = Math.floor(Math.random() * morning.length);
    const lunchIndex = Math.floor(Math.random() * lunch.length);
    const dinnerIndex = Math.floor(Math.random() * dinner.length);
    const sideIndex = Math.floor(Math.random() * side.length);

    // --------------------
    // 献立を表示
    // --------------------

    const day = document.getElementById(days[i]);

    day.innerHTML = `
  <span class="day-name">${dayName[i]}</span>
  <span class="menu-item">🌅 ${morning[morningIndex]}</span>
  <span class="menu-item">☀️ ${lunch[lunchIndex].name}</span>
  <span class="menu-item">🌙 ${dinner[dinnerIndex].name} + 
  <span class="side-dish">${side[sideIndex].name}</span>
`;


    // --------------------
    // 購入材料を作成
    // --------------------

    // 昼＋晩の材料を1つの配列にまとめる
    const ingredients = [
      ...lunch[lunchIndex].ingredients,
      ...dinner[dinnerIndex].ingredients,
      ...side[sideIndex].ingredients
    ];

    // 重複する材料を削除
    const uniqueIngredients = [...new Set(ingredients)];

    // 曜日ごとに1行作成
    const li = document.createElement("li");

    li.innerHTML =
      `<span class="day-name">${dayName[i]}</span>：
       ${uniqueIngredients.join(" ・ ")}`;

    // 購入材料欄に追加
    shoppingList.appendChild(li);
  }

});