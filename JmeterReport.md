# Báo cáo kiểm thử hiệu năng với JMeter

## 1. Thông tin chung

- **Công cụ:** Apache JMeter 5.6.3
- **Trang web kiểm thử:** https://www.wikipedia.org
- **Ngày thực hiện:** 27/02/2026

## 2. Kịch bản kiểm thử

### 2.1 Thread Group 1 - Cơ bản
- **Số lượng người dùng:** 10
- **Ramp-up Period:** 1 giây
- **Loop Count:** 5
- **Hành vi:** Gửi HTTP GET đến trang chủ (`/`)

### 2.2 Thread Group 2 - Tải nặng
- **Số lượng người dùng:** 50
- **Ramp-up Period:** 30 giây
- **Loop Count:** 1
- **Hành vi:** Gửi HTTP GET đến trang chủ (`/`) và trang con (`/wiki/Vietnam`)

### 2.3 Thread Group 3 - Tùy chỉnh
- **Số lượng người dùng:** 20
- **Ramp-up Period:** 1 giây
- **Duration:** 60 giây (chạy liên tục)
- **Hành vi:** Gửi HTTP GET đến 2 trang con (`/wiki/Ho_Chi_Minh` và `/wiki/Hanoi`)

## 3. Kết quả kiểm thử

### 3.1 Thread Group 1 - Cơ bản

| Chỉ số | Giá trị |
|---|---|
| # Samples | 50 |
| Average (ms) | 182 |
| Min (ms) | 75 |
| Max (ms) | 471 |
| Std. Dev. | 119.10 |
| Error % | 0.00% |
| Throughput | 28.9/sec |
| Avg. Bytes | 131,401 |

### 3.2 Thread Group 2 - Tải nặng

| Chỉ số | Giá trị |
|---|---|
| # Samples | 11 |
| Average (ms) | 551 |
| Min (ms) | 352 |
| Max (ms) | 970 |
| Std. Dev. | 210.61 |
| Error % | 0.00% |
| Throughput | 3.2/sec |
| Avg. Bytes | 739,453 |

### 3.3 Thread Group 3 - Tùy chỉnh

| Chỉ số | Giá trị |
|---|---|
| # Samples | 64 |
| Average (ms) | 1,598 |
| Min (ms) | 561 |
| Max (ms) | 4,903 |
| Std. Dev. | 980.65 |
| Error % | 0.00% |
| Throughput | 10.0/sec |
| Avg. Bytes | 742,797 |

## 4. Phân tích kết quả

### 4.1 Thời gian phản hồi (Response Time)
- **Thread Group 1 (10 users):** Thời gian phản hồi trung bình **182ms** — rất nhanh, trang web phản hồi tốt với tải nhẹ.
- **Thread Group 2 (50 users):** Thời gian phản hồi tăng lên **551ms** — tăng khoảng 3 lần khi số người dùng tăng 5 lần.
- **Thread Group 3 (20 users, chạy liên tục 60s):** Thời gian phản hồi **1,598ms** — tăng đáng kể do gửi request liên tục trong thời gian dài, trang con có nội dung nặng hơn trang chủ.

### 4.2 Tỷ lệ lỗi (Error Rate)
- Cả 3 kịch bản đều có **Error % = 0.00%** — trang web Wikipedia hoạt động ổn định, không có lỗi server.

### 4.3 Throughput
- **Thread Group 1:** 28.9 req/sec — throughput cao nhất do request nhẹ (trang chủ).
- **Thread Group 2:** 3.2 req/sec — giảm mạnh do ramp-up 30s và nội dung trang con nặng hơn.
- **Thread Group 3:** 10.0 req/sec — mức trung bình, server vẫn xử lý tốt khi chạy liên tục.

## 5. Kết luận

- Wikipedia có hiệu năng **rất tốt**, xử lý được đồng thời nhiều người dùng mà không phát sinh lỗi.
- Thời gian phản hồi tăng tỷ lệ thuận với số lượng người dùng và độ phức tạp của trang.
- Trang web có khả năng chịu tải cao, phù hợp cho lượng truy cập lớn.

## 6. Ảnh chụp kết quả

- ![Thread Group 1](screenshots/threadgroup1.png)
- ![Thread Group 2](screenshots/threadgroup2.png)
- ![Thread Group 3](screenshots/threadgroup3.png)