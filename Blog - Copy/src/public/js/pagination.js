let currentPage = 1; // Trang hiện tại
const itemsPerPage = 5; // Số lượng khóa học trên mỗi trang

// Gọi API để lấy dữ liệu khóa học
async function fetchCourses(page = 1) {
  try {
    const response = await fetch(
      `/course/api/courses?page=${page}&limit=${itemsPerPage}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    renderCourses(data.courses); // Render danh sách khóa học
    updatePagination(data.currentPage, data.totalPages); // Cập nhật phân trang
  } catch (error) {
    console.error("Error fetching courses:", error.message);
  }
}

// Render danh sách khóa học
function renderCourses(courses) {
  const courseList = document.getElementById("course-list");
  courseList.innerHTML = ""; // Xóa nội dung cũ

  courses.forEach((course) => {
    const courseHTML = `
            <div class="containers col-sm-6 col-lg-3">
                <div class="card card-course-item">
                    <a href="/course/${course.slug}">
                        <img
                            src="${course.image}"
                            class="card-img-top"
                            alt="${course.name}"
                        />
                    </a>
                    <div class="card-body">
                        <a href="/course/${course.slug}">
                            <h5 class="card-title">${course.name}</h5>
                        </a>
                        <p class="card-text">${course.description}</p>
                        <a href="#" class="btn btn-primary">Mua khóa học</a>
                    </div>
                </div>
            </div>`;
    courseList.innerHTML += courseHTML;
  });
}

// Cập nhật phân trang
function updatePagination(current, totalPages) {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const pageInfo = document.getElementById("page-info");

  prevBtn.disabled = current === 1; // Vô hiệu hóa nút "Previous" nếu là trang đầu tiên
  nextBtn.disabled = current === totalPages; // Vô hiệu hóa nút "Next" nếu là trang cuối

  pageInfo.textContent = `Page ${current} of ${totalPages}`;

  prevBtn.onclick = () => {
    if (current > 1) fetchCourses(current - 1);
  };

  nextBtn.onclick = () => {
    if (current < totalPages) fetchCourses(current + 1);
  };
}

// Gọi API lần đầu tiên khi tải trang
fetchCourses(currentPage);
