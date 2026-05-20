/**
 * Enhanced Analytics Data & Charts
 * Unified data + chart helpers for all 5 themes
 */

const ENHANCED_DATA = [
  {"Stt":1,"Dự_án":"TAM PHƯỚC - ĐỒNG NAI\n(GOLDEN CENTER CITY 3)","Tổng_SP":815,"Đã_bán":488,"SP_điều_chỉnh_QH":3,"SP_Sếp_giữ":324,"SP_bình_thường":0,"Tổng_SP_tồn":327,"Giá_trị_rổ_hàng_KD":0,"Giá_trị_SP_giữ_lại":244.4,"TỔNG_CỘNG":244.4,"Ghi_chú":"Pháp lý dự án"},
  {"Stt":2,"Dự_án":"PHÚ HỘI - ĐỒNG NAI\n(MEGA CITY 2)","Tổng_SP":3160,"Đã_bán":3036,"SP_điều_chỉnh_QH":117,"SP_Sếp_giữ":2,"SP_bình_thường":5,"Tổng_SP_tồn":124,"Giá_trị_rổ_hàng_KD":20.1,"Giá_trị_SP_giữ_lại":117.5,"TỔNG_CỘNG":137.5,"Ghi_chú":"Pháp lý dự án, SP vướng QH"},
  {"Stt":3,"Dự_án":"BỬU HÒA - ĐỒNG NAI\n(BIEN HOA NEWTOWN 2)","Tổng_SP":167,"Đã_bán":157,"SP_điều_chỉnh_QH":1,"SP_Sếp_giữ":5,"SP_bình_thường":4,"Tổng_SP_tồn":10,"Giá_trị_rổ_hàng_KD":16.0,"Giá_trị_SP_giữ_lại":28.3,"TỔNG_CỘNG":44.3,"Ghi_chú":"Đang triển khai KD bình thường"},
  {"Stt":4,"Dự_án":"PHƯỚC TÂN - ĐỒNG NAI\n(PARADISE RIVERSIDE)","Tổng_SP":555,"Đã_bán":449,"SP_điều_chỉnh_QH":99,"SP_Sếp_giữ":2,"SP_bình_thường":5,"Tổng_SP_tồn":106,"Giá_trị_rổ_hàng_KD":15.1,"Giá_trị_SP_giữ_lại":90.4,"TỔNG_CỘNG":105.6,"Ghi_chú":"Thanh lý 120 nền, hoán đổi"},
  {"Stt":5,"Dự_án":"HÓA AN - ĐỒNG NAI\n(BIEN HOA NEWTOWN 1)","Tổng_SP":222,"Đã_bán":221,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":1,"SP_bình_thường":0,"Tổng_SP_tồn":1,"Giá_trị_rổ_hàng_KD":0,"Giá_trị_SP_giữ_lại":0.9,"TỔNG_CỘNG":0.9,"Ghi_chú":"Pháp lý - SP vướng"},
  {"Stt":6,"Dự_án":"TÂN HẠNH - ĐỒNG NAI\n(BIEN HOA RIVER SIDE)","Tổng_SP":275,"Đã_bán":258,"SP_điều_chỉnh_QH":16,"SP_Sếp_giữ":0,"SP_bình_thường":1,"Tổng_SP_tồn":17,"Giá_trị_rổ_hàng_KD":0.75,"Giá_trị_SP_giữ_lại":11.9,"TỔNG_CỘNG":12.7,"Ghi_chú":"Khóa SP, không triển khai KD"},
  {"Stt":7,"Dự_án":"KĐT BÀU XÉO - ĐỒNG NAI","Tổng_SP":145,"Đã_bán":137,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":0,"SP_bình_thường":8,"Tổng_SP_tồn":8,"Giá_trị_rổ_hàng_KD":31.1,"Giá_trị_SP_giữ_lại":0,"TỔNG_CỘNG":31.1,"Ghi_chú":"Đang triển khai KD bình thường"},
  {"Stt":8,"Dự_án":"SIÊU THỊ TRẢNG BOM","Tổng_SP":224,"Đã_bán":223,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":0,"SP_bình_thường":1,"Tổng_SP_tồn":1,"Giá_trị_rổ_hàng_KD":7.5,"Giá_trị_SP_giữ_lại":0,"TỔNG_CỘNG":7.5,"Ghi_chú":"Đang triển khai KD bình thường"},
  {"Stt":9,"Dự_án":"KDC KIM OANH - ĐỒNG NAI\n(CENTURY CITY)","Tổng_SP":2128,"Đã_bán":2052,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":13,"SP_bình_thường":63,"Tổng_SP_tồn":76,"Giá_trị_rổ_hàng_KD":188.7,"Giá_trị_SP_giữ_lại":32.6,"TỔNG_CỘNG":221.3,"Ghi_chú":"Đang triển khai KD, vay cá nhân"},
  {"Stt":10,"Dự_án":"MP4A - BÌNH DƯƠNG\n(GOLDEN CENTER CITY 1)","Tổng_SP":691,"Đã_bán":664,"SP_điều_chỉnh_QH":23,"SP_Sếp_giữ":4,"SP_bình_thường":0,"Tổng_SP_tồn":27,"Giá_trị_rổ_hàng_KD":0,"Giá_trị_SP_giữ_lại":23.1,"TỔNG_CỘNG":23.1,"Ghi_chú":"Thanh lý 35 SP chưa ra sổ"},
  {"Stt":11,"Dự_án":"MP4B - BÌNH DƯƠNG\n(GOLDEN CENTER CITY 2)","Tổng_SP":1123,"Đã_bán":1082,"SP_điều_chỉnh_QH":115,"SP_Sếp_giữ":13,"SP_bình_thường":8,"Tổng_SP_tồn":136,"Giá_trị_rổ_hàng_KD":4.9,"Giá_trị_SP_giữ_lại":107.8,"TỔNG_CỘNG":112.7,"Ghi_chú":"Thanh lý, khóa SP, cho môi giới"},
  {"Stt":12,"Dự_án":"NHÀ Ở XÃ HỘI CẦU ĐÒ\n(RICH HOME 3)","Tổng_SP":276,"Đã_bán":271,"SP_điều_chỉnh_QH":4,"SP_Sếp_giữ":0,"SP_bình_thường":1,"Tổng_SP_tồn":5,"Giá_trị_rổ_hàng_KD":1.5,"Giá_trị_SP_giữ_lại":6.2,"TỔNG_CỘNG":7.7,"Ghi_chú":"Đang triển khai KD, đất lúa"},
  {"Stt":13,"Dự_án":"AN ĐIỀN - BÌNH DƯƠNG\n(BEN CAT CENTER CITY 2)","Tổng_SP":413,"Đã_bán":413,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":0,"SP_bình_thường":0,"Tổng_SP_tồn":0,"Giá_trị_rổ_hàng_KD":0,"Giá_trị_SP_giữ_lại":0,"TỔNG_CỘNG":0,"Ghi_chú":"Ngưng môi giới, ra sổ"},
  {"Stt":14,"Dự_án":"CẦU ĐÒ - BÌNH DƯƠNG\n(MEGA CITY 1)","Tổng_SP":2023,"Đã_bán":2011,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":6,"SP_bình_thường":6,"Tổng_SP_tồn":12,"Giá_trị_rổ_hàng_KD":8.85,"Giá_trị_SP_giữ_lại":15.2,"TỔNG_CỘNG":24.0,"Ghi_chú":"Đang triển khai KD, cho môi giới"},
  {"Stt":15,"Dự_án":"METRO TOWER - BÌNH DƯƠNG\n(THE EAST GATE)","Tổng_SP":712,"Đã_bán":709,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":2,"SP_bình_thường":1,"Tổng_SP_tồn":3,"Giá_trị_rổ_hàng_KD":2.45,"Giá_trị_SP_giữ_lại":3.85,"TỔNG_CỘNG":6.3,"Ghi_chú":"Đang triển khai KD, vay cá nhân"},
  {"Stt":16,"Dự_án":"CĂN HỘ THUẬN GIAO\nLEGACY - BÌNH DƯƠNG","Tổng_SP":940,"Đã_bán":935,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":1,"SP_bình_thường":4,"Tổng_SP_tồn":5,"Giá_trị_rổ_hàng_KD":4.26,"Giá_trị_SP_giữ_lại":4.8,"TỔNG_CỘNG":9.06,"Ghi_chú":"TMDV, khóa CLKD"},
  {"Stt":17,"Dự_án":"GOLDEN FUTURE - BÌNH DƯƠNG\n(Trung Quân)","Tổng_SP":509,"Đã_bán":504,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":0,"SP_bình_thường":5,"Tổng_SP_tồn":5,"Giá_trị_rổ_hàng_KD":5.36,"Giá_trị_SP_giữ_lại":0,"TỔNG_CỘNG":5.36,"Ghi_chú":"Đang triển khai KD bình thường"},
  {"Stt":18,"Dự_án":"ROYAL TOWN - BÌNH DƯƠNG","Tổng_SP":22,"Đã_bán":22,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":0,"SP_bình_thường":0,"Tổng_SP_tồn":0,"Giá_trị_rổ_hàng_KD":0,"Giá_trị_SP_giữ_lại":0,"TỔNG_CỘNG":0,"Ghi_chú":"Đang triển khai KD bình thường"},
  {"Stt":19,"Dự_án":"NEWLAND - BÌNH DƯƠNG","Tổng_SP":254,"Đã_bán":251,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":0,"SP_bình_thường":3,"Tổng_SP_tồn":3,"Giá_trị_rổ_hàng_KD":4.57,"Giá_trị_SP_giữ_lại":0,"TỔNG_CỘNG":4.57,"Ghi_chú":"Đang triển khai KD bình thường"},
  {"Stt":20,"Dự_án":"TRƯỜNG LƯU QUẬN 9 - TP.HCM\n(SINGA CITY)","Tổng_SP":431,"Đã_bán":425,"SP_điều_chỉnh_QH":5,"SP_Sếp_giữ":1,"SP_bình_thường":0,"Tổng_SP_tồn":6,"Giá_trị_rổ_hàng_KD":0,"Giá_trị_SP_giữ_lại":10.6,"TỔNG_CỘNG":10.6,"Ghi_chú":"Ngưng môi giới"},
  {"Stt":21,"Dự_án":"RICHLAND RESIDENCE\n(THUẬN LỢI 2)","Tổng_SP":748,"Đã_bán":694,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":6,"SP_bình_thường":48,"Tổng_SP_tồn":54,"Giá_trị_rổ_hàng_KD":130.5,"Giá_trị_SP_giữ_lại":22.9,"TỔNG_CỘNG":153.5,"Ghi_chú":"Đang triển khai KD bình thường"},
  {"Stt":22,"Dự_án":"NHÀ Ở H2 - MP3","Tổng_SP":8,"Đã_bán":8,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":0,"SP_bình_thường":0,"Tổng_SP_tồn":0,"Giá_trị_rổ_hàng_KD":0,"Giá_trị_SP_giữ_lại":0,"TỔNG_CỘNG":0,"Ghi_chú":"Đang triển khai KD"},
  {"Stt":23,"Dự_án":"HÒA LỢI 69 NỀN","Tổng_SP":8,"Đã_bán":8,"SP_điều_chỉnh_QH":0,"SP_Sếp_giữ":0,"SP_bình_thường":0,"Tổng_SP_tồn":0,"Giá_trị_rổ_hàng_KD":0,"Giá_trị_SP_giữ_lại":0,"TỔNG_CỘNG":0,"Ghi_chú":"Đang triển khai KD"}
];

// ============ CHART 1: Rổ hàng KD vs SP Giữ lại ============
function renderPie1(ctx, theme) {
  const tRHD = ENHANCED_DATA.reduce((s,d) => s + d.Giá_trị_rổ_hàng_KD, 0);
  const tGHL = ENHANCED_DATA.reduce((s,d) => s + d.Giá_trị_SP_giữ_lại, 0);
  const c = theme === 'warm' ? ['#f97316','#ea580c'] : theme === 'emerald' ? ['#22c55e','#15803d'] : theme === 'cyberpunk' ? ['#22d3ee','#f472b6'] : theme === 'monochrome' ? ['#e2e8f0','#94a3b8'] : ['#818cf8','#6366f1'];
  return new Chart(ctx,{type:'doughnut',data:{labels:['Rổ hàng KD','SP Giữ lại'],datasets:[{data:[tRHD,tGHL],backgroundColor:c,borderWidth:0}]},options:{plugins:{title:{display:true,text:'Tỷ lệ Rổ hàng KD vs SP Giữ lại',color:'#fff',font:{size:13}},legend:{position:'bottom',labels:{color:'#94a3b8'}}}}});
}

// ============ CHART 2: Phân bố SP tồn theo loại ============
function renderStackedBar2(ctx, theme) {
  const labels = ENHANCED_DATA.map(d => d.Dự_án.split('\n')[0].substring(0,20));
  const c = theme === 'warm' ? ['#f97316','#ea580c','#fdba74'] : theme === 'emerald' ? ['#052e16','#14532d','#22c55e'] : theme === 'cyberpunk' ? ['#22d3ee','#f472b6','#a855f7'] : theme === 'monochrome' ? ['#f8fafc','#e2e8f0','#94a3b8'] : ['#818cf8','#6366f1','#c4b5fd'];
  return new Chart(ctx,{type:'bar',data:{labels,datasets:[{label:'Điều chỉnh QH',data:ENHANCED_DATA.map(d=>d.SP_điều_chỉnh_QH),backgroundColor:c[0]},{label:'Sếp giữ',data:ENHANCED_DATA.map(d=>d.SP_Sếp_giữ),backgroundColor:c[1]},{label:'Bình thường',data:ENHANCED_DATA.map(d=>d.SP_bình_thường),backgroundColor:c[2]}]},options:{scales:{x:{stacked:true,grid:{color:'rgba(255,255,255,0.05)'}},y:{stacked:true,grid:{color:'rgba(255,255,255,0.05)'}}},plugins:{title:{display:true,text:'Phân bố SP tồn theo loại',color:'#fff',font:{size:13}}}}});
}

// ============ CHART 3: Heatmap Rủi ro ============
function renderHeatmap3(ctx, theme) {
  const maxGT = Math.max(...ENHANCED_DATA.map(d=>d.TỔNG_CỘNG),1);
  const labels = ENHANCED_DATA.map(d => d.Dự_án.split('\n')[0].substring(0,15));
  const risk = ENHANCED_DATA.map(d => {
    const tyLeBan = d.Đã_bán / d.Tổng_SP * 100;
    const gtTon = d.Tổng_SP_tồn > 0 ? d.TỔNG_CỘNG / d.Tổng_SP_tồn : 0;
    return ((1 - tyLeBan/100) * (gtTon / maxGT) * 100); // 0-100 scale
  });
  const bg = risk.map(r => {
    if (r > 50) return 'rgba(239,68,68,0.7)';
    if (r > 25) return 'rgba(251,191,36,0.7)';
    return 'rgba(52,211,153,0.7)';
  });
  return new Chart(ctx,{type:'bar',data:{labels,datasets:[{data:risk.map(r=>5),backgroundColor:bg,borderWidth:0}]},options:{scales:{x:{display:false},y:{display:false}},plugins:{title:{display:true,text:'Heatmap Mức độ rủi ro',color:'#fff',font:{size:13}},tooltip:{callbacks:{label:(c)=>{const i=c.dataIndex;return `${labels[i]}: Rủi ro ${risk[i].toFixed(1)}%`}}}}}},
  });
n}

// ============ CHART 4: Phân tích theo khu vực ============
function renderDistrict4(ctx, theme) {
  const districts = {};
  ENHANCED_DATA.forEach(d => {
    const name = d.Dự_án.toUpperCase();
    let dist = 'Khác';
    if (name.includes('QUẬN 9')) dist = 'Quận 9, TP.HCM';
    else if (name.includes('ĐỒNG NAI')) dist = 'Đồng Nai';
    else if (name.includes('BÌNH DƯƠNG')) dist = 'Bình Dương';
    else if (name.includes('TP.HCM')) dist = 'TP.HCM (khác)';
    if (!districts[dist]) districts[dist] = {sp:0,gt:0};
    districts[dist].sp += d.Tổng_SP_tồn;
    districts[dist].gt += d.TỔNG_CỘNG;
  });
  const labels = Object.keys(districts);
  const c = theme === 'warm' ? '#f97316' : theme === 'emerald' ? '#22c55e' : theme === 'cyberpunk' ? '#22d3ee' : theme === 'monochrome' ? '#e2e8f0' : '#818cf8';
  return new Chart(ctx,{type:'bar',data:{labels,datasets:[{label:'Số SP tồn',data:labels.map(l=>districts[l].sp),backgroundColor:c}]},options:{indexAxis:'y',plugins:{title:{display:true,text:'Phân tích theo khu vực',color:'#fff',font:{size:13}}},scales:{x:{grid:{color:'rgba(255,255,255,0.05)'}},y:{grid:{display:false}}}});
}

// ============ CHART 5: Tốc độ thanh lý ============
function renderClearance5(ctx, theme) {
  const labels = ENHANCED_DATA.filter(d=>d.Tổng_SP_tồn>0).map(d=>d.Dự_án.split('\n')[0].substring(0,20));
  const avgMonthlySale = ENHANCED_DATA.reduce((s,d)=>s+d.Đã_bán,0) / ENHANCED_DATA.length / 12; // rough monthly avg
  const months = ENHANCED_DATA.filter(d=>d.Tổng_SP_tồn>0).map(d=>{
    const m = avgMonthlySale > 0 ? d.Tổng_SP_tồn / avgMonthlySale : 99;
    return Math.min(m, 36);
  });
  const c = theme === 'warm' ? '#f97316' : theme === 'emerald' ? '#22c55e' : theme === 'cyberpunk' ? '#22d3ee' : theme === 'monochrome' ? '#e2e8f0' : '#818cf8';
  return new Chart(ctx,{type:'line',data:{labels,datasets:[{label:'Tháng thanh lý (dự kiến)',data:months,borderColor:c,backgroundColor:c.replace('0.8','0.1'),fill:true,tension:0.3}]},options:{plugins:{title:{display:true,text:'Tốc độ thanh lý dự đoán',color:'#fff',font:{size:13}}},scales:{x:{grid:{color:'rgba(255,255,255,0.05)'}},y:{grid:{color:'rgba(255,255,255,0.05)'}}}}});
}

// ============ CHART 6: Phân tích ghi chú ============
function renderNotes6(ctx, theme) {
  const cats = {'Pháp lý':0,'Thanh lý':0,'Vay':0,'Khóa':0,'TMDV':0,'Khác':0};
  ENHANCED_DATA.forEach(d => {
    const note = String(d.Ghi_chú||'').toLowerCase();
    if (note.includes('pháp lý')) cats['Pháp lý']++;
    else if (note.includes('thanh lý')) cats['Thanh lý']++;
    else if (note.includes('vay')) cats['Vay']++;
    else if (note.includes('khóa')) cats['Khóa']++;
    else if (note.includes('tmdv')) cats['TMDV']++;
    else cats['Khác']++;
  });
  const c = theme === 'warm' ? ['#f97316','#ea580c','#fdba74','#fed7aa','#ffedd5','#fff7ed'] : theme === 'emerald' ? ['#052e16','#14532d','#166534','#22c55e','#86efac','#dcfce7'] : theme === 'cyberpunk' ? ['#22d3ee','#f472b6','#a855f7','#c084fc','#e879f9','#f0abfc'] : theme === 'monochrome' ? ['#0f172a','#1e293b','#334155','#475569','#64748b','#94a3b8'] : ['#818cf8','#6366f1','#a78bfa','#c4b5fd','#ddd6fe','#ede9fe'];
  return new Chart(ctx,{type:'bar',data:{labels:Object.keys(cats),datasets:[{data:Object.values(cats),backgroundColor:c,borderRadius:4}]},options:{plugins:{title:{display:true,text:'Phân tích ghi chú',color:'#fff',font:{size:13}}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(255,255,255,0.05)'}}}}});
}

// ============ CHART 7: Báo động giá trị bị khóa ============
function renderGauge7(ctx, theme) {
  const total = ENHANCED_DATA.reduce((s,d)=>s+d.TỔNG_CỘNG,0);
  const locked = ENHANCED_DATA.reduce((s,d)=>s+d.Giá_trị_SP_giữ_lại,0);
  const pct = total > 0 ? (locked/total*100) : 0;
  const c = theme === 'warm' ? ['#f97316','#fee2e2'] : theme === 'emerald' ? ['#22c55e','#dcfce7'] : theme === 'cyberpunk' ? ['#f472b6','#020617'] : theme === 'monochrome' ? ['#e2e8f0','#0f172a'] : ['#818cf8','#1e293b'];
  return new Chart(ctx,{type:'doughnut',data:{labels:['Giữ lại','Khả dụng'],datasets:[{data:[pct,100-pct],backgroundColor:c,borderWidth:0}]},options:{rotation:-90,circumference:180,cutout:'70%',plugins:{title:{display:true,text:'Giá trị bị khóa: '+pct.toFixed(1)+'%',color:'#fff',font:{size:13}}}}});
}

// ============ CHART 8: Hiệu suất theo vùng ============
function renderRadar8(ctx, theme) {
  const zones = {};
  ENHANCED_DATA.forEach(d => {
    const name = d.Dự_án.toUpperCase();
    let zone = 'Khác';
    if (name.includes('ĐỒNG NAI')) zone = 'Đồng Nai';
    else if (name.includes('BÌNH DƯƠNG')) zone = 'Bình Dương';
    else if (name.includes('TP.HCM')) zone = 'TP.HCM';
    if (!zones[zone]) zones[zone] = {ton:0,ban:0,gt:0};
    zones[zone].ton += d.Tổng_SP_tồn;
    zones[zone].ban += d.Đã_bán;
    zones[zone].gt += d.TỔNG_CỘNG;
  });
  const labels = Object.keys(zones);
  const c = theme === 'warm' ? ['#f97316','#ea580c','#fdba74'] : theme === 'emerald' ? ['#22c55e','#15803d','#86efac'] : theme === 'cyberpunk' ? ['#22d3ee','#f472b6','#a855f7'] : theme === 'monochrome' ? ['#e2e8f0','#94a3b8','#64748b'] : ['#818cf8','#6366f1','#c4b5fd'];
  const maxTon = Math.max(...labels.map(l=>zones[l].ton),1);
  const maxBan = Math.max(...labels.map(l=>zones[l].ban),1);
  const maxGT = Math.max(...labels.map(l=>zones[l].gt),1);
  return new Chart(ctx,{type:'radar',data:{labels,datasets:[
    {label:'Tồn kho %',data:labels.map(l=>(zones[l].ton/maxTon)*100),borderColor:c[0],backgroundColor:c[0].replace('0.8','0.2')},
    {label:'Đã bán %',data:labels.map(l=>(zones[l].ban/maxBan)*100),borderColor:c[1],backgroundColor:c[1].replace('0.8','0.2')},
    {label:'Giá trị %',data:labels.map(l=>(zones[l].gt/maxGT)*100),borderColor:c[2],backgroundColor:c[2].replace('0.8','0.2')}
  ]},options:{plugins:{title:{display:true,text:'Hiệu suất bán hàng theo vùng',color:'#fff',font:{size:13}}},scales:{r:{grid:{color:'rgba(255,255,255,0.1)'},angleLines:{color:'rgba(255,255,255,0.1)'},pointLabels:{color:'#94a3b8'},ticks:{display:false}}}}});
}

// ============ CHART 9: Top dự án ưu tiên ============
function renderScatter9(ctx, theme) {
  const c = theme === 'warm' ? '#f97316' : theme === 'emerald' ? '#22c55e' : theme === 'cyberpunk' ? '#22d3ee' : theme === 'monochrome' ? '#e2e8f0' : '#818cf8';
  const pts = ENHANCED_DATA.filter(d=>d.Tổng_SP_tồn>0).map(d => ({
    x: (d.Đã_bán/d.Tổng_SP*100),
    y: d.Tổng_SP_tồn,
    r: Math.min(Math.max(d.TỔNG_CỘNG/10, 4), 20)
  }));
  return new Chart(ctx,{type:'scatter',data:{datasets:[{label:'Dự án',data:pts,backgroundColor:c,pointRadius:6}]},options:{plugins:{title:{display:true,text:'Top dự án cần ưu tiên',color:'#fff',font:{size:13}},tooltip:{callbacks:{label:(c)=>`Bán: ${c.raw.x.toFixed(1)}%, Tồn: ${c.raw.y}`}}},scales:{x:{title:{display:true,text:'Tỷ lệ bán (%)',color:'#94a3b8'},grid:{color:'rgba(255,255,255,0.05)'}},y:{title:{display:true,text:'Số lượng tồn',color:'#94a3b8'},grid:{color:'rgba(255,255,255,0.05)'}}}}});
}

// ============ CHART 10: So sánh giá trị TB/SP ============
function renderAvgValue10(ctx, theme) {
  const labels = ENHANCED_DATA.filter(d=>d.Tổng_SP_tồn>0).map(d => d.Dự_án.split('\n')[0].substring(0,20));
  const values = ENHANCED_DATA.filter(d=>d.Tổng_SP_tồn>0).map(d => (d.TỔNG_CỘNG / d.Tổng_SP_tồn));
  const c = theme === 'warm' ? '#f97316' : theme === 'emerald' ? '#22c55e' : theme === 'cyberpunk' ? '#22d3ee' : theme === 'monochrome' ? '#e2e8f0' : '#818cf8';
  return new Chart(ctx,{type:'bar',data:{labels,datasets:[{label:'Giá trị TB (Tỷ/SP)',data:values,backgroundColor:c,borderRadius:4}]},options:{indexAxis:'y',plugins:{title:{display:true,text:'So sánh giá trị TB / Sản phẩm',color:'#fff',font:{size:13}}},scales:{x:{grid:{color:'rgba(255,255,255,0.05)'}},y:{grid:{display:false}}}}});
}

// Export render functions
window.EnhancedCharts = {
  renderPie1, renderStackedBar2, renderHeatmap3, renderDistrict4,
  renderClearance5, renderNotes6, renderGauge7, renderRadar8,
  renderScatter9, renderAvgValue10
};
