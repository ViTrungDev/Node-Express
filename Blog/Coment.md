Câu lệnh khởi tạo: npm init
tạo file index.js
câu lệnh cài đặt express: npm install express
để chạy ứng dụng dùng câu lệnh node index.js
cài đặt thư viện nodemon: npm i nodemon --save-dev
"scripts": {
"start": "nodemon --inspect index.js",
"test": "echo \"Error: no test specified\" && exit 1"
}

cài đặt thư viện morgan: npm i morgan --save-dev

---**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***

sử dụng thư viện express Handlebars
câu lệnh install: npm install express-handlebars

<!-- install sass -->

install sass: npm install node-sass --save-dev
thêm "scripts": {
"start": "nodemon --inspect src/index.js",
"watch": "node-sass --watch src/resources/scss -o -w src/public/css",
"test": "echo \"Error: no test specified\" && exit 1"
},
dùng câu lệnh: npm run watch:scss

fix lỗi node-sass không tương thích với phiên bản Node.js hoặc đang sử dụng hoặc do node-sass đã bị ngừng hỗ trợ:
hay thế node-sass bằng sass: node-sass đã bị ngừng hỗ trợ, vì vậy bạn nên chuyển sang sử dụng sass. Chạy các lệnh sau để gỡ bỏ node-sass và cài đặt sass:
npm uninstall node-sass
npm install sass --save-dev

/* install library prettier, lint-staged, husky*/
 npm i prettier lint-staged husky
    "beautiful": "prettier docs package.json 'src/**/*.{js,json,scss}' --tab-width 4 --write --single-quote --trailing-comma all",

lint-staged
 "lint-staged": {
    "src/**/*.{js,json,scss": "prettier docs package.json --tab-width 4 --write --single-quote --trailing-comma all"
  },}

    "beautiful": "lint-staged",

husky:
  "husky":{
"hooks":{
  "pre-commit":"lint-staged"
}}

install mongoose connect db
npm install mongoose