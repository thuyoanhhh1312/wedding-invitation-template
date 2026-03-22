# Thông Số Font Chữ — Mẫu 5 Bách Niên

> Trích xuất từ file gốc `.ai` (Adobe Illustrator) ngày 2026-03-21.

## Danh sách font

| # | Font Family | Font Name (kỹ thuật) | Vai trò trong thiết kế |
|---|-------------|----------------------|------------------------|
| 1 | **VL Ragazza Script** | `VLRagazzaScript` | Script / chữ viết tay nổi bật (tên cô dâu chú rể, tiêu đề cảm xúc) |
| 2 | **VL Hertine** | `VL-Hertine` | Display / tiêu đề trang trọng |
| 3 | **VL Calmius** | `VL-Calmius-Regular` | Serif / nội dung chính, ngày tháng |
| 4 | **Mulish Medium** | `Mulish-Medium` | Sans-serif / body text, label nhỏ, nút bấm |
| 5 | **Aylia** | `Aylia-Regular` | Script phụ / điểm nhấn trang trí |

## Mapping font cũ → mới

| CSS Variable / Class | Font cũ (Google Fonts) | Font mới (từ file .ai) | Lý do |
|----------------------|------------------------|-------------------------|-------|
| `--font-script` / `.font-script` | Great Vibes | **VL Ragazza Script** | Script chính, dùng cho tên, tagline |
| `--font-display` / `.font-display` | Cormorant Garamond | **VL Calmius** | Serif display, dùng cho heading, số, ngày |
| `--font-formal` / `.font-formal` | Bodoni Moda | **VL Hertine** | Formal display, dùng cho quote, intro |
| `body` font-family | Manrope | **Mulish** | Sans-serif body text |
| *(mới)* `--font-accent` | *(không có)* | **Aylia** | Script phụ, điểm nhấn trang trí |

## Nguồn font

- **Mulish**: Google Fonts (miễn phí) — `https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700`
- **VL Ragazza Script, VL Hertine, VL Calmius**: Font thương mại VL Font — cần file `.woff2`/`.ttf` local
- **Aylia**: Font thương mại — cần file `.woff2`/`.ttf` local

## Ghi chú

- Các font VL và Aylia **không có trên Google Fonts**, cần được đặt vào `src/assets/fonts/` và khai báo `@font-face` trong CSS.
- Font Mulish có sẵn trên Google Fonts, có thể import trực tiếp.
