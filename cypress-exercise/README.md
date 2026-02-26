# Cypress E2E Testing - Bài tập thực hành

## Mô tả
Bài tập thực hành kiểm thử tự động End-to-End với Cypress trên trang web mẫu [saucedemo.com](https://www.saucedemo.com).

## Cài đặt

```bash
npm install
```

## Chạy kiểm thử

### Mở Cypress UI (chế độ tương tác)
```bash
npm run cy:open
```

### Chạy tất cả test (chế độ headless)
```bash
npm run cy:run
```

### Chạy trên Chrome
```bash
npm run cy:run:chrome
```

## Cấu trúc dự án

```
cypress-exercise/
├── cypress/
│   ├── e2e/
│   │   ├── login_spec.cy.js    # Kịch bản 1 & 2: Đăng nhập
│   │   └── cart_spec.cy.js     # Kịch bản 3-6: Giỏ hàng & Thanh toán
│   ├── fixtures/
│   │   └── example.json
│   └── support/
│       ├── commands.js          # Custom commands (login, addToCart,...)
│       └── e2e.js
├── cypress.config.js            # Cấu hình Cypress
├── package.json
└── .gitignore
```

## Các kịch bản kiểm thử

| # | Kịch bản | File | Trạng thái |
|---|----------|------|------------|
| 1 | Đăng nhập thành công | login_spec.cy.js | ✅ Pass |
| 2 | Đăng nhập thất bại | login_spec.cy.js | ✅ Pass |
| 3 | Thêm sản phẩm vào giỏ hàng | cart_spec.cy.js | ✅ Pass |
| 4 | Lọc sản phẩm theo giá | cart_spec.cy.js | ✅ Pass |
| 5 | Xóa sản phẩm khỏi giỏ hàng | cart_spec.cy.js | ✅ Pass |
| 6 | Quy trình thanh toán | cart_spec.cy.js | ✅ Pass |

## Thông tin đăng nhập test
- **Username:** standard_user
- **Password:** secret_sauce
