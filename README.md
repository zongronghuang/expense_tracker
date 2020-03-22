# 老爸的私房錢
---
老爸的私房錢 (Alpha Camp 學期三迷你專案)

![Demo](/Demo.png)

## 開發目的
---
做為個人記帳用的網頁應用程式。[<sup>1</sup>](#1)

# 建立環境
1. 必須先在個人電腦上安裝及執行 MongoDB。

# 安裝專案及相依套件
---
若要執行此專案，請在 console 內執行下列步驟：

1. 從 GitHub 下載此專案：
```
git clone https://github.com/zongronghuang/expense_tracker.git expense_tracker
``` 
2. 前往 **expense_tracker** 資料夾。

3. 透過 console 安裝下列相依套件：
```
npm install 
express 
express-handlebars 
body-parser 
method-override 
mongoose 
express-session 
bcryptjs 
connect-flash 
passport 
passport-local 
passport-facebook
```

4. **[非必要]** 在個人電腦上啟動 MongoDB。然後，透過下列指令來建立預設的使用者帳號。
```
npm run seeder
```

5. 啟動本地伺服器：
```
npm run start
```

6. 開啟網路瀏覽器並輸入下列網址：
```
localhost:3000
```

7. 現在您已可以開始使用此專案。

# 功能介紹
---
### 登入
可透過個人的 FaceBook 帳號登入，或是註冊個人帳號。也可以使用下方的預設使用者帳號：
```
user1@example.com/12345678
user2@example.com/12345678
```

登入後可使用下列個人化功能：

### 依類別瀏覽對應的支出項目
1. 按一下上方的購物類別及月份清單，再選擇適合的項目，即可顯示符合此範圍的支出。
2. 下方會顯示該種類支出的金額、總金額及所佔比例。

### 新增支出項目
1. 按一下**新增支出**即可前往建立新的支出項目。

### 編輯及刪除支出項目
1. 按一下**編輯**或**刪除**，即可編輯或刪除支出項目。

---
<a class="anchor" id="1">1</a>: 此專案及所有內容皆作為學習用途，並無侵犯著作權之意圖。