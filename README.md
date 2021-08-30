# AC 學期 3 ｜ vue-alpha-shop

使用 vue 打造購物車分步表單
[GitHub page](https://indexhui.github.io/vue-alpha-shop/#/checkout/address).

### 基礎功能實作

- 使用 vue-cli 建立專案
- 適當的拆分 component 實作
- 使用 props 向下傳遞資料
- 使用 vue 指令綁定事件

### 挑戰功能實作

- 結帳明細 | 點擊「確認下單」，明細以 Modal 顯示於畫面中央
- Nested Routes | 以 Vue Router Nested Routes 完成結帳分步表單頁面切換
- localStorage | 將使用者的資料保存起來

### 時間分配

- 環境安排 | 2hr | 確認開發方式和初始化專案 vue-cli
- router 設定 | 2hr | 分析 Nested Routes 設定 router 和頁面以及相關 component
- 查找 tailwind css 寫法 | 2hr | CSS 以 tailwind 重構(寫)
- 分布表單 | 12hr | 相關 component 拆分，以及資料傳遞構想
- 購物車 | 3hr | 圖片 assets 研究
- 控制 | 3hr | Steps 和 Controller

### 備註

- Vue3 開發
- Tailwind CSS
- 目前以實作作業功能為主，手機板尚未進行，視覺細節也尚須優化

### 尚未解決的問題疑惑和項目

- 不確定 UI components 拆分時機， 嘗試把重複出現的原件 input 和 label 文字結合成一組 FormInput，處理下來好像有點費時，雖然看起來很愉悅
- 不確定寫法是否符合慣例: 特別在傳遞資料，我有利用 props 的方式，把 function 傳到 component ，來達成改變資料。部分 input 為了對照我是使用 emit 的方式來達成。

## 環境準備

#### clone 此專案

```
git clone https://github.com/indexhui/vue-alpha-shop.git
```

#### Install by yarn or npm

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
