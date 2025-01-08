// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector("form");
//   const loading = document.getElementById("loading");
//   const app = document.querySelector(".app");

//   if (loading && app) {
//     // Hiển thị nội dung chính, ẩn loading khi trang đã tải
//     loading.style.display = "none";
//     app.style.display = "block";
//   }

//   if (form) {
//     form.addEventListener("submit", function () {
//       if (loading && app) {
//         loading.style.display = "flex"; // Hiển thị loading khi form được submit
//         app.style.display = "none"; // Ẩn nội dung chính
//       }
//     });
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // Chọn form trong trang
  const loading = document.getElementById("loading"); // Chọn phần tử loading

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Ngừng gửi form ngay lập tức

      // Hiển thị hiệu ứng loading
      loading.classList.add("active");

      // Giả lập quá trình xử lý với setTimeout
      setTimeout(() => {
        form.submit(); // Gửi form sau khi chờ
      }, 2000); // Thời gian chờ 2 giây
    });
  }
});
