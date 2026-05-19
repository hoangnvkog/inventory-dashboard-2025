#!/usr/bin/env python3
"""
Phân tích dữ liệu sản phẩm tồn và đề xuất thông tin biểu diễn trên Dashboard
"""

import json
import math
from collections import defaultdict

def safe_float(val, default=0):
    try:
        v = float(val)
        if math.isnan(v):
            return default
        return v
    except (TypeError, ValueError):
        return default

def safe_str(val, default=''):
    if val is None or (isinstance(val, float) and math.isnan(val)):
        return default
    return str(val)

with open('/home/tokhatnhi/.openclaw/workspace/product-inventory-dashboard/data/dashboard_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("=" * 80)
print("📊 PHân tích dữ liệu sản phẩm tồn - Đề xuất Dashboard Báo cáo")
print("=" * 80)

# ============ 1. OVERVIEW ============
print("\n" + "=" * 80)
print("SECTION 1: TỔNG QUAN METRICS")
print("=" * 80)

overview = data['tong_quan']
print(f"\n📈 Tổng dự án: {overview['tong_du_an']}")
print(f"📈 Tổng sản phẩm: {overview['tong_sp']:,}")
print(f"📈 Đã bán: {overview['da_ban']:,}")
print(f"📈 Tồn kho: {overview['ton_kho']:,}")
print(f"📈 Tỷ lệ bán: {overview['ty_le_ban']}%")

# ============ 2. PROCESSING ============
print("\n" + "=" * 80)
print("SECTION 2: PHÂN TÍCH CHI TIẾT THEO DỰ ÁN")
print("=" * 80)

projects = []
for item in data['chi_tiet']:
    stt = item.get('Stt')
    if stt is not None and stt != '':
        proj = {
            'Stt': stt,
            'Dự_án': safe_str(item.get('Dự_án')),
            'Tổng_SP': safe_float(item.get('Tổng_SP')),
            'Đã_bán': safe_float(item.get('Đã_bán')),
            'SP_điều_chỉnh_QH': safe_float(item.get('SP_điều_chỉnh_QH')),
            'SP_Sếp_giữ': safe_float(item.get('SP_Sếp_giữ')),
            'SP_bình_thường': safe_float(item.get('SP_bình_thường')),
            'Tổng_SP_tồn': safe_float(item.get('Tổng_SP_tồn')),
            'Giá_trị_rổ_hàng_KD': safe_float(item.get('Giá_trị_rổ_hàng_KD')),
            'Giá_trị_SP_giữ_lại': safe_float(item.get('Giá_trị_SP_giữ_lại')),
            'TỔNG_CỘNG': safe_float(item.get('TỔNG_CỘNG')),
            'Ghi_chú': safe_str(item.get('Ghi_chú')),
        }
        name = proj['Dự_án']
        if 'ĐỒNG NAI' in name or 'ĐỒNG NAI' in name:
            proj['Vùng'] = 'Đồng Nai'
        elif 'BÌNH DƯƠNG' in name or 'BÌNH DƯƠNG' in name:
            proj['Vùng'] = 'Bình Dương'
        elif 'TP.HCM' in name:
            proj['Vùng'] = 'TP.HCM'
        else:
            proj['Vùng'] = 'Khác'
        projects.append(proj)

print(f"\n✅ Tổng số dự án hợp lệ: {len(projects)}")

region_stats = defaultdict(lambda: {'count': 0, 'total_sp': 0, 'sold': 0, 'inventory': 0, 'value': 0})
for p in projects:
    r = p['Vùng']
    region_stats[r]['count'] += 1
    region_stats[r]['total_sp'] += p['Tổng_SP']
    region_stats[r]['sold'] += p['Đã_bán']
    region_stats[r]['inventory'] += p['Tổng_SP_tồn']
    region_stats[r]['value'] += p['TỔNG_CỘNG']

print("\n📍 Thống kê theo vùng:")
for r, s in region_stats.items():
    rate = (s['sold']/s['total_sp']*100) if s['total_sp'] > 0 else 0
    print(f"  {r}: {s['count']} dự án | SP: {s['total_sp']:,} | Bán: {s['sold']:,.0f} | Tồn: {s['inventory']:,.0f} | Tỷ lệ bán: {rate:.1f}% | GT: {s['value']/1e9:.1f} tỷ")

# ============ 3. STATUS ============
print("\n" + "=" * 80)
print("SECTION 3: PHÂN LOẠI TRẠNG THÁI DỰ ÁN")
print("=" * 80)

for p in projects:
    note = p['Ghi_chú'].lower()
    if 'ngưng' in note and 'môi giới' in note:
        p['Trạng_thái'] = 'Ngưng môi giới'
        p['Status_code'] = 'danger'
    elif 'không triển khai' in note or 'khóa' in note:
        p['Trạng_thái'] = 'Bị khóa/Không KD'
        p['Status_code'] = 'warning'
    elif 'đang triển khai' in note or 'sản phẩm bình thường' in note or 'đang triển kd' in note:
        p['Trạng_thái'] = 'Đang KD'
        p['Status_code'] = 'success'
    else:
        p['Trạng_thái'] = 'Khác'
        p['Status_code'] = 'info'
    
    if p['Tổng_SP_tồn'] == 0 and p['Tổng_SP'] > 0:
        if 'ngưng' not in note:
            p['Trạng_thái'] = 'Đã bán hết'
            p['Status_code'] = 'success'

status_count = defaultdict(int)
for p in projects:
    status_count[p['Trạng_thái']] += 1

print("\nPhân bố trạng thái:")
for s, c in status_count.items():
    print(f"  {s}: {c} dự án")

# ============ 4. INVENTORY TYPE ============
print("\n" + "=" * 80)
print("SECTION 4: PHÂN TÍCH PHÂN LOẠI TỒN KHO")
print("=" * 80)

total_qh = sum(p['SP_điều_chỉnh_QH'] for p in projects)
total_giu = sum(p['SP_Sếp_giữ'] for p in projects)
total_bt = sum(p['SP_bình_thường'] for p in projects)

print(f"\n🏗️ Phân loại sản phẩm tồn kho:")
print(f"  SP điều chỉnh QH (vướng pháp lý): {total_qh:,.0f}")
print(f"  SP Sếp giữ/bị khóa: {total_giu:,.0f}")
print(f"  SP bình thường (có thể KD): {total_bt:,.0f}")

# ============ 5. VALUE ANALYSIS ============
print("\n" + "=" * 80)
print("SECTION 5: PHÂN TÍCH GIÁ TRỊ TỒN KHO")
print("=" * 80)

total_rhkd = sum(p['Giá_trị_rổ_hàng_KD'] for p in projects)
total_gl = sum(p['Giá_trị_SP_giữ_lại'] for p in projects)
total_value = sum(p['TỔNG_CỘNG'] for p in projects)

print(f"\n💰 Giá trị tồn kho:")
print(f"  Giá trị rổ hàng KD (có thể bán): {total_rhkd/1e9:,.1f} tỷ VND")
print(f"  Giá trị SP bị giữ lại/khóa: {total_gl/1e9:,.1f} tỷ VND")
print(f"  TỔNG CỘNG giá trị tồn: {total_value/1e9:,.1f} tỷ VND")

print("\n🏆 Top 5 dự án có giá trị tồn cao nhất:")
sorted_p = sorted([p for p in projects if p['TỔNG_CỘNG'] > 0], key=lambda x: x['TỔNG_CỘNG'], reverse=True)
for p in sorted_p[:5]:
    short = p['Dự_án'].split('\n')[0][:30]
    print(f"  {short:30} | {p['TỔNG_CỘNG']/1e9:>8.1f} tỷ | Tồn: {p['Tổng_SP_tồn']:>4.0f} SP")

# ============ 6. SALES VELOCITY ============
print("\n" + "=" * 80)
print("SECTION 6: PHÂN TÍCH TỐC ĐỘ BÁN HÀNG")
print("=" * 80)

for p in projects:
    if p['Tổng_SP'] > 0:
        p['ty_le_ban'] = p['Đã_bán'] / p['Tổng_SP'] * 100
    else:
        p['ty_le_ban'] = 0

sorted_sale = sorted(projects, key=lambda x: x['ty_le_ban'], reverse=True)
print("\n🚀 Top dự án bán hàng tốt nhất:")
for p in sorted_sale[:5]:
    if p['Tổng_SP'] > 0:
        short = p['Dự_án'].split('\n')[0][:30]
        print(f"  {short:30} | Bán: {p['ty_le_ban']:>6.1f}% | {p['Đã_bán']:>4.0f}/{p['Tổng_SP']:>4.0f} SP")

print("\n⚠️ Dự án cần chú ý (bán chậm, còn tồn):")
low_perf = [p for p in projects if p['ty_le_ban'] < 95 and p['Tổng_SP_tồn'] > 5]
for p in sorted(low_perf, key=lambda x: x['ty_le_bán'] if hasattr(x, 'ty_láy') else x['ty_le_ban'])[:5]:
    short = p['Dự_án'].split('\n')[0][:30]
    print(f"  {short:30} | Bán: {p['ty_le_ban']:>6.1f}% | Tồn: {p['Tổng_SP_tồn']:>4.0f} SP | GT: {p['TỔNG_CỘNG']/1e9:.1f} tỷ")

# ============ 7. INSIGHTS ============
print("\n" + "=" * 80)
print("SECTION 7: INSIGHTS NÂNG CAO & ĐỀ XUẤT DASHBOARD")
print("=" * 80)

for p in projects:
    if p['Tổng_SP'] > 0 and p['TỔNG_CỘNG'] > 0:
        p['gia_trung_binh'] = p['TỔNG_CỘNG'] / p['Tổng_SP']
    else:
        p['gia_trung_binh'] = 0

print("\n📊 Phân tích giá trung bình:")
avg_prices = [p['gia_trung_binh'] for p in projects if p['gia_trung_binh'] > 0]
if avg_prices:
    print(f"  Giá trung bình/SP: {sum(avg_prices)/len(avg_prices)/1e6:,.1f} triệu VND")

print("\n🔴 Dự án GT cao nhưng bán chậm (cần ưu tiên):")
for p in sorted(projects, key=lambda x: x['TỔNG_CỘNG'], reverse=True):
    if p['ty_le_ban'] < 90 and p['Tổng_SP_tồn'] > 10:
        short = p['Dự_án'].split('\n')[0][:30]
        print(f"  {short:30} | GT tồn: {p['TỔNG_CỘNG']/1e9:>8.1f} tỷ | Bán: {p['ty_le_ban']:>5.1f}% | Tồn: {p['Tổng_SP_tồn']:>4.0f} SP")

print("\n" + "=" * 80)
print("✅ PHÂN TÍCH HOÀN TẤT - Xem phần đề xuất dưới đây")
print("=" * 80)