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
"watch:scss": "node-sass --watch src/resources/scss/app.scss -o src/resources/public/css",
"test": "echo \"Error: no test specified\" && exit 1"
},
dùng câu lệnh: npm run watch:scss
