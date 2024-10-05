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