# ĐỀ XUẤT DASHBOARD BÁO CÁO SẢN PHẨM TỒN

## 📋 Tóm tắt Data hiện tại

| Chỉ số | Giá trị |
|--------|---------|
| Tổng dự án | 23 |
| Tổng sản phẩm | 17,060 |
| Đã bán | 16,127 |
| Tồn kho | 933 |
| Tỷ lệ bán | 94.5% |
| Tổng giá trị tồn | **1,178.9 tỷ VND** |

---

## 🎯 CÁC PHẦN NÊN THÊM VÀO DASHBOARD

### 1. KPI CARDS (Cards tổng quan)

**Nên thêm:**
- **Tổng số dự án đang hoạt động** (Đang KD) vs Dự án bị khóa/Không KD
- **Tổng giá trị tồn kho có thể kinh doanh** (447.9 tỷ) vs Giá trị SP bị giữ lại/khóa (731.0 tỷ)
- **Tỷ lệ sản phẩm bị khóa/vướng pháp lý** (383 SP điều chỉnh QH + 383 SP sếp giữ)
- **Số dự án "cần chú ý"** (bán < 95%, còn tồn nhiều)

```
┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│ 23 Dự án        │ 1,178.9 Tỷ    │ 447.9 Tỷ      │ 933 SP Tồn     │
│ Tổng cộng      │ GT Tồn Kho    │ Có thể KD     │ ngang tuần    │
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘
```

---

### 2. BIỂU ĐỒ PHÂN LOẠI TỒN KHO (Stacked Bar/Donut)

**Biểu đồ 1: Phân loại tồn kho theo loại sản phẩm**

| Loại SP | Số lượng | Giá trị |
|---------|----------|---------|
| SP điều chỉnh QH (vướng pháp lý) | 383 | ~TBD |
| SP Sếp giữ/bị khóa | 383 | ~731 tỷ |
| SP bình thường (có thể KD) | 167 | ~447.9 tỷ |

**Recommendation:** Donut chart hoặc stacked bar chart cho phân loại này, giúp thấy rõ tỷ lệ SP có thể kinh doanh vs không thể.

---

### 3. BIỂU ĐỒ PHÂN BỐ THEO VÙNG (Geo + Bar)

| Vùng | Số dự án | Tổng SP | Đã bán | Tồn | Tỷ lệ bán | Giá trị tồn |
|------|----------|---------|--------|-----|-----------|-------------|
| Đồng Nai | 8 | 7,467 | 6,798 | 669 | 91.0% | 797.8 tỷ |
| Bình Dương | 9 | 6,687 | 6,591 | 191 | 98.6% | 185.1 tỷ |
| TP.HCM | 1 | 431 | 425 | 6 | 98.6% | 10.6 tỷ |
| Khác | 8 | 2,475 | 2,313 | 67 | 93.5% | 185.5 tỷ |

**Nên thêm:**
- **Bar chart grouped** theo vùng (Tổng SP vs Đã bán vs Tồn kho)
- **Map/Heatmap** thể hiện sự phân bố dự án
- **Bubble chart**: x=vùng, y=tỷ lệ bán, size=tổng giá trị tồn

---

### 4. BIỂU ĐỒ PHÂN BỐ TRẠNG THÁI DỰ ÁN (Pie/Donut)

| Trạng thái | Số dự án | Tổng SP tồn | Giá trị tồn |
|------------|----------|-------------|-------------|
| Bị khóa/Không KD | 10 | ~670 | ~700 tỷ |
| Đang KD | 9 | ~175 | ~267 tỷ |
| Đã bán hết | 5 | 0 | 0 |
| Ngưng môi giới | 2 | ~88 | ~212 tỷ |

**Recommendation:** Pie/Donut chart với màu sắc phân biệt rõ ràng.

---

### 5. BIỂU ĐỒ BAR CHART TOP DỰ ÁN THEO GIÁ TRỊ TỒN

| STT | Dự án | Giá trị tồn | SP tồn | Tỷ lệ bán |
|-----|-------|-------------|--------|-----------|
| 1 | Tam Phước - ĐN | 244.4 tỷ | 327 | 59.9% |
| 2 | KDC Kim Oanh - ĐN | 221.3 tỷ | 76 | 96.4% |
| 3 | Richland Residence | 153.5 tỷ | 54 | 92.8% |
| 4 | Phú Hội - ĐN | 137.5 tỷ | 124 | 96.1% |
| 5 | MP4B - Bình Dương | 112.7 tỷ | 136 | 96.3% |

---

### 6. BIỂU ĐỘ TỐC ĐỘ BÁN HÀNG (Performance Chart)

**Horizontal bar chart** so sánh tỷ lệ bán của tất cả dự án:
- Sắp xếp theo tỷ lệ bán tăng dần
- Màu đỏ: < 95% (Cần chú ý)
- Màu vàng: 95-99%
- Màu xanh: 100%

**Dự án cần chú ý nhất:**
| Dự án | Tỷ lệ bán | SP Tồn | GT tồn | Lý do |
|-------|-----------|--------|--------|-------|
| Tam Phước - ĐN | 59.9% | 327 | 244.4 tỷ | Pháp lý dự án |
| Phước Tân - ĐN | 80.9% | 106 | 105.6 tỷ | Thanh lý 120 nền |
| MP4B - Bình Dương | 95.4% | 136 | 112.7 tỷ | Cho môi giới |

---

### 7. BẢNG CHI TIẾT DỰ ÁN (Data Table)

Bảng này nên có sort/filter theo các cột:
- Tên dự án, Vùng
- Tổng SP, Đã bán, SP tồn, Tỷ lệ bán
- Phân loại tồn kho (QH, Sếp giữ, Bình thường)
- Giá trị tồn kho
- Trạng thái kinh doanh
- Ghi chú (có thể hover để xem)

---

### 8. PHÂN TÍCH XU HƯỚNG (Nếu có data tháng/quý)

Nếu có data thời gian, nên thêm:
- **Line chart**: Tổng tồn kho theo tháng
- **Line chart**: Doanh số bán theo tháng
- **Comparative bar**: So sánh tồn kho giữa các quý

*(Data hiện tại có vẻ là snapshot tại 1 thời điểm, chưa có dữ liệu lịch sử)*

---

## 📐 ĐỀ XUẤT BỐ CỤC DASHBOARD

```
┌──────────────────────────────────────────────────────────────────┐
│                    KPI CARDS (Overview Metrics)                   │
│  [Dự án]  [SP Tồn]  [GT Tồn]  [Tỷ lệ bán]  [Cần xử lý]        │
├───────────────────────┬──────────────────────────────────────────┤
│                       │                                          │
│  PHÂN LOẠI TỒN KHO    │  PHÂN BỐ TRẠNG THÁI DỰ ÁN              │
│  (Donut chart)        │  (Donut chart)                          │
│                       │                                          │
├───────────────────────┴──────────────────────────────────────────┤
│                                                                  │
│  PHÂN BỐ THEO VÙNG (Bar chart + Map)                             │
│                                                                  │
├───────────────────────────────────────────────────────────────┐
│                                                                │
│  TỐC ĐỘ BÁN HÀNG THEO DỰ ÁN (Horizontal bar)                   │
│  [Dự án A ████████████████]  100%                              │
│  [Dự án B ████████████████████] 80.9%                         │
│  ...                                                           │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  TOP 10 DỰ ÁN THEO GIÁ TRỊ TỒN (Bar chart)                    │
│                                                                │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  BẢNG CHI TIẾT DỰ ÁN (Sortable table with filters)            │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

---

## 🎨 GỢI Ý MÀU SẮC & TRỰC QUAN

| Trạng thái | Màu | Ý nghĩa |
|-----------|------|---------|
| Đang KD | 🟢 Xanh lá | Hoạt động bình thường |
| Bị khóa/Không KD | 🟡 Vàng | Cần giải quyết |
| Ngưng môi giới | 🔴 Đỏ | Cấp báo động |
| Đã bán hết | 🔵 Xanh dương | Hoàn thành |

**Tỷ lệ bán:**
- 🔴 < 80%: Nguy hiểm
- 🟡 80-95%: Cần chú ý
- 🟢 > 95%: Tốt
- ✅ 100%: Xuất sắc

---

## 📝 TÓM TẮT INSIGHTS QUAN TRỌNG

1. **Tam Phước - Đồng Nai** là dự án cần ưu tiên nhất: GT tồn 244.4 tỷ, nhưng tỷ lệ bán chỉ 59.9% do vướng pháp lý
2. **Đồng Nai** có tỷ lệ bán thấp nhất (91.0%) nhưng giá trị tồn cao nhất (797.8 tỷ)
3. **731 tỷ VND** giá trị tồn đang bị giữ lại/khóa (không thể KD) - cần giải quyết
4. **383 SP điều chỉnh QH** - đây là các SP vướng quy hoạch, cần theo dõi tiến độ xử lý

---

*File này được tạo từ phân tích data dashboard_data.json - Date: 2026-05-18*