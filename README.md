# Mini CI Demo

Project nhỏ để học CI với GitHub Actions.

## Cấu trúc

```text
mini-ci-demo/
├── calculator.js
├── calculator.test.js
├── package.json
├── .gitignore
└── .github/
    └── workflows/
        └── ci.yml
```

## Chạy test local

Yêu cầu: Node.js 20+

```bash
npm test
```

## CI flow

```text
Push / Pull Request
        ↓
GitHub Actions
        ↓
Ubuntu Runner
        ↓
Checkout source
        ↓
Setup Node.js
        ↓
npm test
        ↓
PASS / FAIL
```

## Bài tập

1. Tạo branch `feature/multiply`.
2. Thêm hàm `multiply(a, b)`.
3. Viết test `4 * 3 = 12`.
4. Commit và push branch.
5. Tạo Pull Request vào `main`.
6. Quan sát GitHub Actions chạy CI.
7. Cố tình sửa hàm sai để thấy pipeline FAIL.
