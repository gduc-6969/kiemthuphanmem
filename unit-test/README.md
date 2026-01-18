# Bài tập thực hành kiểm thử với JUnit
**Chủ đề:** Phân tích dữ liệu điểm số học sinh  

---

## 1. Mục tiêu học tập
- Biết cách viết kiểm thử tự động bằng **JUnit 5**.
- Biết cách xây dựng hàm có validate dữ liệu đầu vào.
- Thực hành GitHub: tạo **Issues**, commit gắn issue, viết tài liệu dự án.

---

## 2. Mô tả yêu cầu chức năng
Xây dựng lớp `StudentAnalyzer` có 2 phương thức:

### 2.1 `countExcellentStudents(List<Double> scores)`
**Chức năng:** Đếm số học sinh đạt loại **Giỏi**  

- Điểm Giỏi: **>= 8.0**
- Điểm hợp lệ: **0 đến 10**
- Bỏ qua điểm sai: `< 0` hoặc `> 10`
- Nếu danh sách rỗng → trả về **0**

---

### 2.2 `calculateValidAverage(List<Double> scores)`
**Chức năng:** Tính điểm trung bình các điểm hợp lệ  

- Tính trung bình chỉ với điểm hợp lệ (0..10)
- Bỏ qua điểm sai: `< 0` hoặc `> 10`
- Nếu danh sách rỗng hoặc không có điểm hợp lệ → trả về **0.0**

---

## 3. Cấu trúc thư mục
Thư mục bài tập được tổ chức như sau:
unit-test/
├─ src/
│ └─ StudentAnalyzer.java
├─ test/
│ └─ StudentAnalyzerTest.java
└─ README.md


---

## 4. Các Issues đã tạo trên GitHub
Tạo tối thiểu 4 issues:

| Issue | Tên Issue | Mô tả |
|------|----------|------|
| #1 | Viết hàm countExcellentStudents() | Validate điểm hợp lệ và đếm học sinh giỏi |
| #2 | Viết hàm calculateValidAverage() | Tính trung bình các điểm hợp lệ |
| #3 | Viết test cho 2 hàm trên | Dùng JUnit để kiểm thử đầy đủ |
| #4 | Viết tài liệu README.md | Mô tả bài toán + hướng dẫn chạy test |

---

## 5. Commit gắn với Issue
Khi hoàn thành từng phần, commit sẽ ghi rõ liên kết issue bằng cú pháp `#<số issue>`

Ví dụ:

```bash
feat: implement countExcellentStudents() #1
feat: implement calculateValidAverage() #2
test: add unit tests for both methods #3
docs: update README with instructions #4
