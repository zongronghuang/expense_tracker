# 老爸的私房錢 (CRUD)
---
老爸的私房錢 web app project for Alpha Camp Semester 3

![Demo](/Demo.png)

## Getting Started
---
做為個人記帳用的 web app。[<sup>1</sup>](#1)

# Prerequisites
1. You have to install and run both MongoDB and Mongoose on your local computer.

# Installing Project and Dependent Packages
---
To run this project, take the steps using the console:

1. Download this project from GitHub:
```
git clone https://github.com/zongronghuang/expense_tracker.git expense_tracker
``` 
2. Go to the **expense_tracker** folder.

3. Install Express using the console:
```
npm install express
```

4. Install Handlebars
```
npm install express-handlebars
```

5. Install body-parser
```
npm install body-parser
```

6. Install method-override
```
npm install method-override
```

7. Install Mongoose
```
npm install mongoose
```

8. Install express-session
```
npm install express-session
```

9. Install bcryptjs
```
npm install bcryptjs
```

10. Install connect-flash
```
npm install connect-flash
```

11. Install dotenv
```
npm install dotenv
```

12. Install passport
```
npm install mongoose
```

13. Install passport-local
```
npm install passport-local
```

14. Install passport-facebook
```
npm install passport-facebook
```

8. **[Optional]** Launch MongoDB on your local computer. Then, initialize this project with default users and restaurants.
```
npm run seeder
```

9. Launch the local server:
```
npm run dev
```

9. Open a web browser and enter the URL:
```
localhost:3000
```

10. Now you can use the web app to view and search restaurants.

# Features
---
### Login
You may log in to this web app using a personal FaceBook account, a locally registered account, or a default user account:
```
user1@example.com/12345678
user2@example.com/12345678
```

The following managements are user-specific.

### 依類別瀏覽對應的支出項目
1. 按一下上方的項目來顯示對應的支出。
2. 下方會顯示該種類的總支出及細項

### 新增支出項目
1. 按一下「新增支出」即可前往建立新的支出項目。

### 編輯及刪除支出項目
1. 按一下 Edit 或 Delete 即可編輯或刪除支出項目。

---
<a class="anchor" id="1">1</a>: The restaurant profiles and the project as well as the screenshot are only for educational purpose, with no intention of copyright infringement.