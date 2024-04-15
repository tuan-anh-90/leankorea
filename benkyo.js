const kazoku = [
  { korean: "가족", vietnamese: "Gia đình" },
  { korean: "아버지", vietnamese: "Ba" },
  { korean: "어머니", vietnamese: "Mẹ" },
  { korean: "형제", vietnamese: "Anh em" }, // Siblings
  { korean: "자매", vietnamese: "Chị em" }, // Siblings (sisters)
  { korean: "할아버지", vietnamese: "Ông" }, // Grandfather
  { korean: "할머니", vietnamese: "Bà" }, // Grandmother
  { korean: "아들", vietnamese: "Con trai" }, // Son
  { korean: "딸", vietnamese: "Con gái" }, // Daughter
  { korean: "손자", vietnamese: "Cháu trai" }, // Grandson
  { korean: "손녀", vietnamese: "Cháu gái" }, // Granddaughter
  { korean: "부모", vietnamese: "Bố mẹ" }, // Parents
  { korean: "조부모", vietnamese: "Ông bà" }, // Grandparents
  { korean: "삼촌", vietnamese: "Chú" }, // Uncle
  { korean: "이모", vietnamese: "Dì" }, // Aunt
  { korean: "조카", vietnamese: "Cháu" }, // Nephew/Niece
];

const dongtu = [
  {
    korean: "가다",
    vietnamese: "Đi",
  },
  {
    korean: "자다",
    vietnamese: "Ngủ",
  },
  {
    korean: "먹다",
    vietnamese: "Ăn",
  },
  {
    korean: "마시다",
    vietnamese: "Uống",
  },
  {
    korean: "읽다",
    vietnamese: "Đọc",
  },
  {
    korean: "듣다",
    vietnamese: "Nghe",
  },
  {
    korean: "보다",
    vietnamese: "Xem, nhìn",
  },
  {
    korean: "공부하다",
    vietnamese: "Học",
  },
  {
    korean: "일하다",
    vietnamese: "Làm việc",
  },
  {
    korean: "사다",
    vietnamese: "Mua",
  },
];

const nghenghiep = [
  {
    korean: "의사",
    vietnamese: "Bác sĩ",
  },
  {
    korean: "가수",
    vietnamese: "Ca sĩ",
  },
  {
    korean: "경찰",
    vietnamese: "Cảnh sát",
  },
  {
    korean: "공무원",
    vietnamese: "Nhân viên công chức",
  },
  {
    korean: "배우, 연주자",
    vietnamese: "Diễn viên",
  },
  {
    korean: "약사",
    vietnamese: "Dược sĩ",
  },
  {
    korean: "선생님",
    vietnamese: "Giáo viên",
  },
  {
    korean: "학생",
    vietnamese: "Học sinh",
  },
];

const diadiem = [
  {
    korean: "공원",
    vietnamese: "Công viên",
  },
  {
    korean: "은행",
    vietnamese: "Ngân hàng",
  },
  {
    korean: "병원",
    vietnamese: "Bệnh viện",
  },
  {
    korean: "약국",
    vietnamese: "Hiệu thuốc",
  },
  {
    korean: "식당",
    vietnamese: "Nhà hàng",
  },
  {
    korean: "쇼핑몰",
    vietnamese: "Trung tâm mua sắm",
  },
  {
    korean: "학교",
    vietnamese: "Trường học",
  },
];

const thoiGian = [
  {
    korean: "가을",
    vietnamese: "Mùa thu",
  },
  {
    korean: "겨울",
    vietnamese: "Mùa đông",
  },
  {
    korean: "봄",
    vietnamese: "Mùa xuân",
  },
  {
    korean: "여름",
    vietnamese: "Mùa hè",
  },
  {
    korean: "날",
    vietnamese: "Ngày",
  },
  {
    korean: "개월",
    vietnamese: "Tháng",
  },
  {
    korean: "년",
    vietnamese: "Năm",
  },
  {
    korean: "시",
    vietnamese: "Giờ",
  },
  {
    korean: "분",
    vietnamese: "Phút",
  },
];

const boPhanCoThe = [
  { korean: "머리", vietnamese: "Đầu" },
  { korean: "눈", vietnamese: "Mắt" },
  { korean: "코", vietnamese: "Mũi" },
  { korean: "입", vietnamese: "Miệng" },
  { korean: "귀", vietnamese: "Tai" },
  { korean: "얼굴", vietnamese: "Mặt" },
  { korean: "목", vietnamese: "Cổ" },
  { korean: "어깨", vietnamese: "Vai" },
  { korean: "가슴", vietnamese: "Ngực" },
  { korean: "등", vietnamese: "Lưng" },
  { korean: "팔", vietnamese: "Cánh tay" },
  { korean: "손", vietnamese: "Bàn tay" },
  { korean: "배", vietnamese: "Bụng" },
  { korean: "허리", vietnamese: "Hông" },
  { korean: "다리", vietnamese: "Chân" },
  { korean: "무릎", vietnamese: "Đầu gối" },
  { korean: "발", vietnamese: "Bàn chân" },
];

const dungCuHocTap = [
  { korean: "책", vietnamese: "Sách" },
  { korean: "펜", vietnamese: "Bút" },
  { korean: "연필", vietnamese: "Bút chì" },
  { korean: "칠판", vietnamese: "Bảng đen" },
  { korean: "컴퓨터", vietnamese: "Máy tính" },
  { korean: "키보드", vietnamese: "Bàn phím" },
  { korean: "자", vietnamese: "Cặp sách" },
  { korean: "필통", vietnamese: "Hộp bút" },
  { korean: "지우개", vietnamese: "Cục tẩy" },
];

const mauSac = [
  { korean: "빨강", vietnamese: "Đỏ" },
  { korean: "주황", vietnamese: "Cam" },
  { korean: "노랑", vietnamese: "Vàng" },
  { korean: "초록", vietnamese: "Xanh lá cây" },
  { korean: "파랑", vietnamese: "Xanh dương" },
  { korean: "보라", vietnamese: "Tím" },
  { korean: "분홍", vietnamese: "Hồng" },
  { korean: "갈색", vietnamese: "Nâu" },
  { korean: "회색", vietnamese: "Xám" },
  { korean: "검정", vietnamese: "Đen" },
  { korean: "하양", vietnamese: "Trắng" },
  { korean: "은색", vietnamese: "Bạc" },
  { korean: "보라색", vietnamese: "Màu tím" },
];

const dongVat = [
  { korean: "개", vietnamese: "Chó" },
  { korean: "고양이", vietnamese: "Mèo" },
  { korean: "새", vietnamese: "Chim" },
  { korean: "돼지", vietnamese: "Heo" },
  { korean: "소", vietnamese: "Bò" },
  { korean: "말", vietnamese: "Ngựa" },
  { korean: "양", vietnamese: "Cừu" },
  { korean: "쥐", vietnamese: "Chuột" },
  { korean: "토끼", vietnamese: "Thỏ" },
  { korean: "원숭이", vietnamese: "Khỉ" },
  { korean: "사자", vietnamese: "Sư tử" },
  { korean: "호랑이", vietnamese: "Hổ" },
  { korean: "코끼리", vietnamese: "Voi" },
  { korean: "기린", vietnamese: "Hươu cao cổ" },
  { korean: "오리", vietnamese: "Vịt" },
  { korean: "닭", vietnamese: "Gà" },
  { korean: "곰", vietnamese: "Gấu" },
];

const dongVatDuoiNuoc = [
  { korean: "고등어", vietnamese: "Cá thu" },
  { korean: "연어", vietnamese: "Cá hồi" },
  { korean: "참치", vietnamese: "Cá ngừ" },
  { korean: "상어", vietnamese: "Cá mập" },
  { korean: "돌고래", vietnamese: "Cá heo" },
  { korean: "고래", vietnamese: "Cá voi" },
  { korean: "오징어", vietnamese: "Mực" },
  { korean: "해마", vietnamese: "Sứa" },
  { korean: "가재", vietnamese: "Tôm" },
  { korean: "문어", vietnamese: "Bạch tuộc" },
];

const phuongTienGiaoThong = [
  { korean: "자동차", vietnamese: "Ô tô" },
  { korean: "오토바이", vietnamese: "Xe máy" },
  { korean: "자전거", vietnamese: "Xe đạp" },
  { korean: "기차", vietnamese: "Tàu hỏa" },
  { korean: "버스", vietnamese: "Xe bus" },
  { korean: "택시", vietnamese: "Taxi" },
  { korean: "비행기", vietnamese: "Máy bay" },
  { korean: "배", vietnamese: "Tàu" },
  { korean: "주유소", vietnamese: "Trạm xăng" },
  { korean: "공항", vietnamese: "Sân bay" },
];
const soDem = [
  { korean: "하나", vietnamese: "Một" },
  { korean: "둘", vietnamese: "Hai" },
  { korean: "셋", vietnamese: "Ba" },
  { korean: "넷", vietnamese: "Bốn" },
  { korean: "다섯", vietnamese: "Năm" },
  { korean: "여섯", vietnamese: "Sáu" },
  { korean: "일곱", vietnamese: "Bảy" },
  { korean: "여덟", vietnamese: "Tám" },
  { korean: "아홉", vietnamese: "Chín" },
  { korean: "열", vietnamese: "Mười" },
  { korean: "스물", vietnamese: "Hai mươi" },
  { korean: "서른", vietnamese: "Ba mươi" },
  { korean: "마흔", vietnamese: "Bốn mươi" },
  { korean: "쉰", vietnamese: "Năm mươi" },
  { korean: "예순", vietnamese: "Sáu mươi" },
  { korean: "일흔", vietnamese: "Bảy mươi" },
  { korean: "여든", vietnamese: "Tám mươi" },
  { korean: "아흔", vietnamese: "Chín mươi" },
  { korean: "백", vietnamese: "Một trăm" },
];

const ngayTrongThang = [
  { korean: "일요일", vietnamese: "Chủ Nhật" },
  { korean: "월요일", vietnamese: "Thứ Hai" },
  { korean: "화요일", vietnamese: "Thứ Ba" },
  { korean: "수요일", vietnamese: "Thứ Tư" },
  { korean: "목요일", vietnamese: "Thứ Năm" },
  { korean: "금요일", vietnamese: "Thứ Sáu" },
  { korean: "토요일", vietnamese: "Thứ Bảy" },
];

const thoiGian1 = [
  { korean: "어제", vietnamese: "Hôm qua" },
  { korean: "오늘", vietnamese: "Hôm nay" },
  { korean: "내일", vietnamese: "Ngày mai" },
  { korean: "일주일의 시작", vietnamese: "Đầu tuần" },
  { korean: "주말", vietnamese: "Cuối tuần" },
  { korean: "한 달의 시작", vietnamese: "Đầu tháng" },
  { korean: "한 달의 마지막", vietnamese: "Cuối tháng" },
  { korean: "한 해의 시작", vietnamese: "Đầu năm" },
  { korean: "한 해의 마지막", vietnamese: "Cuối năm" },
  { korean: "한 주의 중간", vietnamese: "Giữa tuần" },
  { korean: "한 달의 중간", vietnamese: "Giữa tháng" },
  { korean: "한 해의 중간", vietnamese: "Giữa năm" },
];
const Qua = [
  { korean: "사과", vietnamese: "Quả táo" },
  { korean: "바나나", vietnamese: "Quả chuối" },
  { korean: "딸기", vietnamese: "Quả dâu" },
  { korean: "수박", vietnamese: "Quả dưa hấu" },
  { korean: "포도", vietnamese: "Quả nho" },
  { korean: "배", vietnamese: "Quả lê" },
  { korean: "복숭아", vietnamese: "Quả đào" },
  { korean: "토마토", vietnamese: "Quả cà chua" },
  { korean: "딸기", vietnamese: "Quả dâu tây" },
  { korean: "배", vietnamese: "Quả lê" },
  { korean: "오렌지", vietnamese: "Quả cam" },
  { korean: "키위", vietnamese: "Quả kiwi" },
  { korean: "망고", vietnamese: "Quả xoài" },
  { korean: "복숭아", vietnamese: "Quả đào" },
  { korean: "자몽", vietnamese: "Quả bưởi" },
  { korean: "레몬", vietnamese: "Quả chanh" },
  { korean: "매실", vietnamese: "Quả mận" },
  { korean: "체리", vietnamese: "Quả cherry" },
  { korean: "파인애플", vietnamese: "Quả dứa" },
  { korean: "아보카도", vietnamese: "Quả bơ" },
];

const hoa = [
  { korean: "장미", vietnamese: "Hoa hồng" },
  { korean: "국화", vietnamese: "Hoa cúc" },
  { korean: "수선화", vietnamese: "Hoa nhài" },
  { korean: "모란", vietnamese: "Hoa mai" },
  { korean: "튤립", vietnamese: "Hoa tulip" },
  { korean: "민들레", vietnamese: "Hoa bồ công anh" },
  { korean: "벚꽃", vietnamese: "Hoa anh đào" },
];

const dungCuTrongNha = [
  { korean: "칼", vietnamese: "Dao" },
  { korean: "컵", vietnamese: "Cốc" },
  { korean: "접시", vietnamese: "Đĩa" },
  { korean: "가위", vietnamese: "Kéo" },
  { korean: "포크", vietnamese: "Nĩa" },
  { korean: "숟가락", vietnamese: "Muỗng" },
  { korean: "프라이팬", vietnamese: "Chảo" },
  { korean: "전자레인지", vietnamese: "Lò vi sóng" },
  { korean: "냄비", vietnamese: "Nồi" },
  { korean: "냉장고", vietnamese: "Tủ lạnh" },
  { korean: "청소기", vietnamese: "Máy hút bụi" },
  { korean: "침대", vietnamese: "Giường" },
  { korean: "의자", vietnamese: "Ghế" },
];

const quanAo = [
  { korean: "셔츠", vietnamese: "Áo sơ mi" },
  { korean: "바지", vietnamese: "Quần" },
  { korean: "치마", vietnamese: "Váy" },
  { korean: "스웨터", vietnamese: "Áo len" },
  { korean: "자켓", vietnamese: "Áo khoác" },
  { korean: "청바지", vietnamese: "Quần jean" },
  { korean: "양말", vietnamese: "Tất" },
  { korean: "모자", vietnamese: "Mũ" },
  { korean: "속옷", vietnamese: "Đồ lót" },
  { korean: "정장", vietnamese: "Bộ vest" },
  { korean: "비옷", vietnamese: "Áo mưa" },
  { korean: "비니", vietnamese: "Mũ len" },
];
const giaVi = [
  { korean: "소금", vietnamese: "Muối" },
  { korean: "설탕", vietnamese: "Đường" },
  { korean: "후추", vietnamese: "Tiêu" },
  { korean: "간장", vietnamese: "Nước tương" },
  { korean: "마늘", vietnamese: "Tỏi" },
  { korean: "생강", vietnamese: "Gừng" },
  { korean: "식초", vietnamese: "Giấm" },
  { korean: "고추", vietnamese: "Ớt" },
];
const vi = [
  { korean: "매운", vietnamese: "Cay" },
  { korean: "짠", vietnamese: "Mặn" },
  { korean: "단", vietnamese: "Ngọt" },
  { korean: "싱겁다", vietnamese: "Nhạt" },
  { korean: "시다", vietnamese: "Chua" },
  { korean: "쓴", vietnamese: "Đắng" },
];

const list1 = [
  { korean: "가구", vietnamese: "Gia cụ" },
  { korean: "가능", vietnamese: "Khả năng" },
  { korean: "가보", vietnamese: "Gia bảo" },
  { korean: "가수", vietnamese: "Ca sĩ" },
  { korean: "가스", vietnamese: "Ga" },
  { korean: "가시", vietnamese: "Cái gai" },
  { korean: "가정", vietnamese: "Gia đình" },
  { korean: "가족", vietnamese: "Gia tộc" },
  { korean: "가짜", vietnamese: "Giả" },
  { korean: "가축", vietnamese: "Gia súc" },
  { korean: "가치", vietnamese: "Giá trị" },
  { korean: "각도", vietnamese: "Góc độ" },
  { korean: "각부분", vietnamese: "Các bộ phận" },
  { korean: "간", vietnamese: "Gan" },
  { korean: "간단", vietnamese: "Đơn giản" },
  { korean: "간병", vietnamese: "Bệnh gan" },
  { korean: "간병", vietnamese: "Khám bệnh" },
  { korean: "간부", vietnamese: "Cán bộ" },
  { korean: "간염", vietnamese: "Viêm gan" },
  { korean: "간접", vietnamese: "Gián tiếp" },
  { korean: "간첩", vietnamese: "Gián điệp" },
  { korean: "간호", vietnamese: "Giám hộ" },
  { korean: "감각", vietnamese: "Cảm giác" },
  { korean: "감격", vietnamese: "Cảm kích" },
  { korean: "감기", vietnamese: "Cảm cúm" },
  { korean: "감동", vietnamese: "Cảm động" },
  { korean: "감동", vietnamese: "Cảm thông" },
];

const list2 = [
  { korean: "감속", vietnamese: "Giảm tốc độ" },
  { korean: "감정", vietnamese: "Tình cảm" },
  { korean: "갑", vietnamese: "Con giáp" },
  { korean: "값(가)", vietnamese: "Giá cả" },
  { korean: "강국", vietnamese: "Cường quốc" },
  { korean: "강도", vietnamese: "Cường độ" },
  { korean: "강산", vietnamese: "Giang sơn" },
  { korean: "강제", vietnamese: "Cưỡng chế" },
  { korean: "강하다", vietnamese: "Cứng" },
  { korean: "개념", vietnamese: "Khái niệm" },
  { korean: "개막", vietnamese: "Khai mạc" },
  { korean: "개선", vietnamese: "Cải thiện" },
  { korean: "개성", vietnamese: "Cá tính" },
  { korean: "개인", vietnamese: "Cá nhân" },
  { korean: "개통", vietnamese: "Khai thông" },
  { korean: "객관", vietnamese: "Khách quan" },
  { korean: "객실", vietnamese: "Phòng khách" },
  { korean: "객지", vietnamese: "Đất khách" },
  { korean: "거주", vietnamese: "Cư trú" },
  { korean: "거품", vietnamese: "Bong bóng" },
  { korean: "거행", vietnamese: "Cử hành" },
  { korean: "건축", vietnamese: "Kiến trúc" },
  { korean: "검사", vietnamese: "Kiểm tra" },
  { korean: "검정", vietnamese: "Kiểm định" },
  { korean: "겨울", vietnamese: "Mùa đông" },
  { korean: "격려", vietnamese: "Khích lệ" },
  { korean: "견고", vietnamese: "Kiên cố" },
  { korean: "결과", vietnamese: "Kết quả" },
  { korean: "결국", vietnamese: "Kết cục" },
  { korean: "결단", vietnamese: "Đoàn kết" },
  { korean: "결론", vietnamese: "Kết luận" },
];

const list3 = [
  { korean: "결승전", vietnamese: "Trận chung kết" },
  { korean: "결연", vietnamese: "Kết nghĩa" },
  { korean: "결정", vietnamese: "Quyết định" },
  { korean: "결합", vietnamese: "Kết hợp" },
  { korean: "결혼", vietnamese: "Kết hôn" },
  { korean: "겸손", vietnamese: "Khiêm tốn" },
  { korean: "겸하다", vietnamese: "Kiêm nhiệm" },
  { korean: "경(가볍다)", vietnamese: "Nhẹ" },
  { korean: "경고", vietnamese: "Cảnh cáo" },
  { korean: "경과하다", vietnamese: "Trải qua" },
  { korean: "경관", vietnamese: "Cảnh quan" },
  { korean: "경도", vietnamese: "Kinh độ" },
  { korean: "경력", vietnamese: "Kinh nghiệm làm việc" },
  { korean: "경보", vietnamese: "Cảnh báo" },
  { korean: "경비", vietnamese: "Kinh phí" },
  { korean: "경영", vietnamese: "Kinh doanh" },
  { korean: "경우", vietnamese: "Cảnh ngộ" },
  { korean: "경쟁", vietnamese: "Cạnh tranh" },
  { korean: "경제", vietnamese: "Kinh tế" },
  { korean: "경찰", vietnamese: "Cảnh sát" },
  { korean: "경축", vietnamese: "Kính chúc" },
  { korean: "경향", vietnamese: "Khuynh hướng" },
  { korean: "경험", vietnamese: "Kinh nghiệm" },
  { korean: "계급", vietnamese: "Giai cấp" },
  { korean: "계모", vietnamese: "Mẹ kế" },
  { korean: "계약", vietnamese: "Hợp đồng" },
  { korean: "계획", vietnamese: "Kế hoạch" },
  { korean: "고객", vietnamese: "Khách" },
  { korean: "고급", vietnamese: "Cao cấp" },
  { korean: "고난", vietnamese: "Khó khăn" },
  { korean: "고뇌", vietnamese: "Khó xử" },
];

const list4 = [
  { korean: "고대", vietnamese: "Cổ đại" },
  { korean: "고도", vietnamese: "Độ cao" },
  { korean: "고립", vietnamese: "Cô lập" },
  { korean: "고문", vietnamese: "Cố vấn" },
  { korean: "고민", vietnamese: "Khó xử" },
  { korean: "고속", vietnamese: "Cao tốc" },
  { korean: "고의", vietnamese: "Cố ý" },
  { korean: "고전", vietnamese: "Cổ điển" },
  { korean: "고정", vietnamese: "Cố định" },
  { korean: "고향", vietnamese: "Quê hương" },
  { korean: "곤충", vietnamese: "Côn trùng" },
  { korean: "공", vietnamese: "Quả bóng" },
  { korean: "공간", vietnamese: "Không gian" },
  { korean: "공감", vietnamese: "Thông cảm" },
  { korean: "공개", vietnamese: "Công khai" },
  { korean: "공고", vietnamese: "Công bố" },
  { korean: "공구", vietnamese: "Công cụ" },
  { korean: "공급", vietnamese: "Cung cấp" },
  { korean: "공기", vietnamese: "Không khí" },
  { korean: "공동", vietnamese: "Cộng đồng" },
  { korean: "공룡", vietnamese: "Khủng long" },
  { korean: "공립", vietnamese: "Công lập" },
  { korean: "공문서", vietnamese: "Công văn" },
  { korean: "공민", vietnamese: "Công dân" },
  { korean: "공병", vietnamese: "Công binh" },
  { korean: "공산당", vietnamese: "Đảng cộng sản" },
  { korean: "공업", vietnamese: "Công nghiệp" },
];

const list5 = [
  { korean: "공원", vietnamese: "Công viên" },
  { korean: "공인", vietnamese: "Công nhận" },
  { korean: "공작", vietnamese: "Con công" },
  { korean: "공정", vietnamese: "Công bằng" },
  { korean: "공정", vietnamese: "Công đoạn" },
  { korean: "공주", vietnamese: "Công chúa" },
  { korean: "공중", vietnamese: "Công cộng" },
  { korean: "공평", vietnamese: "Công bằng" },
  { korean: "공화", vietnamese: "Cộng hòa" },
  { korean: "공황", vietnamese: "Khủng hoảng" },
  { korean: "과거", vietnamese: "Quá khứ" },
  { korean: "과부", vietnamese: "Quả phụ" },
  { korean: "과언", vietnamese: "Nói quá" },
  { korean: "과연", vietnamese: "Quả nhiên" },
  { korean: "과정", vietnamese: "Quá trình" },
  { korean: "과학", vietnamese: "Khoa học" },
  { korean: "관계", vietnamese: "Quan hệ" },
  { korean: "관람", vietnamese: "Tham quan" },
  { korean: "관련", vietnamese: "Liên quan" },
  { korean: "관리", vietnamese: "Quản lý" },
  { korean: "관심", vietnamese: "Quan tâm" },
  { korean: "관중", vietnamese: "Quần chúng" },
  { korean: "관찰", vietnamese: "Quan sát" },
  { korean: "광고", vietnamese: "Quảng cáo" },
  { korean: "광물", vietnamese: "Khoáng sản" },
  { korean: "광장", vietnamese: "Quảng trường" },
];

const list6 = [
  { korean: "교류", vietnamese: "Giao lưu" },
  { korean: "교만", vietnamese: "Kiêu căng" },
  { korean: "교수", vietnamese: "Giáo sư" },
  { korean: "교육", vietnamese: "Giáo dục" },
  { korean: "교제", vietnamese: "Giao lưu" },
  { korean: "교통", vietnamese: "Giao thông" },
  { korean: "교황", vietnamese: "Giáo hoàng" },
  { korean: "구", vietnamese: "Quận" },
  { korean: "구경", vietnamese: "Tham quan" },
  { korean: "구급", vietnamese: "Cấp cứu" },
  { korean: "구역", vietnamese: "Khu vực" },
  { korean: "구조", vietnamese: "Cứu trợ" },
  { korean: "구체", vietnamese: "Cụ thể" },
  { korean: "구호", vietnamese: "Cứu hộ" },
  { korean: "구혼", vietnamese: "Cầu hôn" },
  { korean: "국가", vietnamese: "Quốc gia" },
  { korean: "국기", vietnamese: "Quốc kỳ" },
  { korean: "국내", vietnamese: "Quốc nội" },
  { korean: "국로", vietnamese: "Quốc lộ" },
  { korean: "국립", vietnamese: "Quốc lập" },
  { korean: "국민", vietnamese: "Quốc dân" },
  { korean: "국방", vietnamese: "Quốc phòng" },
  { korean: "국적", vietnamese: "Quốc tịch" },
  { korean: "국제", vietnamese: "Quốc tế" },
];

const list7 = [
  { korean: "국화", vietnamese: "Hoa cúc" },
  { korean: "국화", vietnamese: "Quốc hoa" },
  { korean: "국회", vietnamese: "Quốc hội" },
  { korean: "군도", vietnamese: "Quần đảo" },
  { korean: "군사", vietnamese: "Quân sự" },
  { korean: "군인", vietnamese: "Quân nhân" },
  { korean: "권력", vietnamese: "Quyền lực" },
  { korean: "권리", vietnamese: "Quyền" },
  { korean: "궤도", vietnamese: "Quỹ đạo" },
  { korean: "귀격", vietnamese: "Qui cách" },
  { korean: "귀인", vietnamese: "Quí nhân" },
  { korean: "귀족", vietnamese: "Quí tộc" },
  { korean: "귀중", vietnamese: "Quí trọng" },
  { korean: "귀한", vietnamese: "Quí hiếm" },
  { korean: "규격", vietnamese: "Qui cách" },
  { korean: "규모", vietnamese: "Qui mô" },
  { korean: "규약", vietnamese: "Qui ước" },
  { korean: "규정", vietnamese: "Qui định" },
  { korean: "규칙", vietnamese: "Qui tắc" },
  { korean: "극", vietnamese: "Cực" },
  { korean: "극", vietnamese: "Kịch" },
  { korean: "극단", vietnamese: "Cực đoan" },
  { korean: "극대", vietnamese: "Cực đại" },
];

const list8 = [
  { korean: "극복", vietnamese: "Khắc phục" },
  { korean: "극본", vietnamese: "Kịch bản" },
  { korean: "근", vietnamese: "Căn" },
  { korean: "근거", vietnamese: "Căn cứ" },
  { korean: "근대", vietnamese: "Cận đại" },
  { korean: "근로", vietnamese: "Lao động" },
  { korean: "근면", vietnamese: "Cần cù" },
  { korean: "근본", vietnamese: "Căn bản" },
  { korean: "근시", vietnamese: "Cận thị" },
  { korean: "금강", vietnamese: "Kim cương" },
  { korean: "금성", vietnamese: "Sao Kim" },
  { korean: "금지", vietnamese: "Cấm" },
  { korean: "급", vietnamese: "Cấp" },
  { korean: "급보", vietnamese: "Cấp báo" },
  { korean: "기간", vietnamese: "Thời gian" },
  { korean: "기공", vietnamese: "Khởi công" },
  { korean: "기관", vietnamese: "Cơ quan" },
  { korean: "기관지", vietnamese: "Khí quản" },
  { korean: "기관지염", vietnamese: "Viêm phế quản" },
  { korean: "기구", vietnamese: "Cơ quan" },
  { korean: "기구", vietnamese: "Khí cầu" },
  { korean: "기념", vietnamese: "Kỷ niệm" },
  { korean: "기능", vietnamese: "Chức năng" },
  { korean: "기능", vietnamese: "Kỹ năng" },
];
const list9 = [
  { korean: "기대", vietnamese: "Chờ đợi" },
  { korean: "기록", vietnamese: "Kỷ lục" },
  { korean: "기본", vietnamese: "Cơ bản" },
  { korean: "기분", vietnamese: "Cảm giác" },
  { korean: "기사", vietnamese: "Kỹ sư" },
  { korean: "기생", vietnamese: "Ký sinh" },
  { korean: "기숙사", vietnamese: "Ký túc xá" },
  { korean: "기술", vietnamese: "Kỹ thuật" },
  { korean: "기압", vietnamese: "Khí áp" },
  { korean: "기억", vietnamese: "Ghi nhớ" },
  { korean: "기자", vietnamese: "Ký giả" },
  { korean: "기재", vietnamese: "Ghi chép" },
  { korean: "기초", vietnamese: "Cơ sở" },
  { korean: "기타", vietnamese: "Khác" },
  { korean: "기한", vietnamese: "Kỳ hạn" },
  { korean: "기호", vietnamese: "Ký hiệu" },
  { korean: "기회", vietnamese: "Cơ hội" },
  { korean: "기후", vietnamese: "Khí hậu" },
  { korean: "긴급", vietnamese: "Khẩn cấp" },
  { korean: "김치", vietnamese: "Kim chi" },
  { korean: "꽃", vietnamese: "Hoa" },
  { korean: "끈기", vietnamese: "Kiên trì" },
  { korean: "낙관", vietnamese: "Lạc quan" },
  { korean: "낙원", vietnamese: "Thiên đường" },
  { korean: "낙타", vietnamese: "Lạc đà" },
  { korean: "낙태", vietnamese: "Nạo thai" },
  { korean: "낙후", vietnamese: "Lạc hậu" },
  { korean: "난로", vietnamese: "Lò" },
];

const list10 = [
  { korean: "난시", vietnamese: "Loạn thị" },
  { korean: "난처", vietnamese: "Khó xử" },
  { korean: "남극", vietnamese: "Nam cực" },
  { korean: "남녀", vietnamese: "Nam nữ" },
  { korean: "남방", vietnamese: "Phương nam" },
  { korean: "남북", vietnamese: "Nam bắc" },
  { korean: "남성", vietnamese: "Nam tính" },
  { korean: "남용", vietnamese: "Lạm dụng" },
  { korean: "낭비", vietnamese: "Lãng phí" },
  { korean: "내규", vietnamese: "Nội qui" },
  { korean: "내란", vietnamese: "Nội chiến" },
  { korean: "내무", vietnamese: "Nội vụ" },
  { korean: "내부", vietnamese: "Nội bộ" },
  { korean: "내심", vietnamese: "Nội tâm" },
  { korean: "내용", vietnamese: "Nội dung" },
  { korean: "내장", vietnamese: "Nội tạng" },
  { korean: "내전", vietnamese: "Nội chiến" },
  { korean: "냉", vietnamese: "Lạnh" },
  { korean: "냉담", vietnamese: "Lạnh lùng" },
  { korean: "냉동", vietnamese: "Đông lạnh" },
  { korean: "냉동창고", vietnamese: "Kho đông lạnh" },
  { korean: "냉방", vietnamese: "Phòng lạnh" },
  { korean: "냉수", vietnamese: "Nước lạnh" },
  { korean: "냉장고", vietnamese: "Tủ lạnh" },
];
const list11 = [
  { korean: "냉장차", vietnamese: "Xe lạnh" },
  { korean: "노동", vietnamese: "Lao động" },
  { korean: "노력", vietnamese: "Nỗ lực" },
  { korean: "노련", vietnamese: "Lão luyện" },
  { korean: "노비", vietnamese: "Lộ phí" },
  { korean: "노승", vietnamese: "Lão tăng" },
  { korean: "노예", vietnamese: "Nô lệ" },
  { korean: "노인", vietnamese: "Lão nhân" },
  { korean: "노자", vietnamese: "Lão Tử" },
  { korean: "노장", vietnamese: "Lão tướng" },
  { korean: "노천", vietnamese: "Lộ thiên" },
  { korean: "노출", vietnamese: "Lộ ra" },
  { korean: "노화", vietnamese: "Lão hóa" },
  { korean: "논란", vietnamese: "Loạn" },
  { korean: "논리", vietnamese: "Lôgic" },
  { korean: "논문", vietnamese: "Luận văn" },
  { korean: "논어", vietnamese: "Luận ngữ" },
  { korean: "논의", vietnamese: "Bàn bạc" },
  { korean: "농가", vietnamese: "Nhà nông" },
  { korean: "농기구", vietnamese: "Nông cụ" },
  { korean: "농도", vietnamese: "Nồng độ" },
  { korean: "농민", vietnamese: "Nông dân" },
  { korean: "농업", vietnamese: "Nông nghiệp" },
  { korean: "농장", vietnamese: "Nông trường" },
  { korean: "농촌", vietnamese: "Nông thôn" },
  { korean: "뇌", vietnamese: "Não" },
];
const list12 = [
  { korean: "느낌", vietnamese: "Cảm giác" },
  { korean: "능동", vietnamese: "Năng động" },
  { korean: "능력", vietnamese: "Năng lực" },
  { korean: "능율", vietnamese: "Năng suất" },
  { korean: "다능", vietnamese: "Đa năng" },
  { korean: "다르다", vietnamese: "Khác" },
  { korean: "다소", vietnamese: "Đa số" },
  { korean: "다스리다", vietnamese: "Quản lý" },
  { korean: "다양", vietnamese: "Đa dạng" },
  { korean: "다의", vietnamese: "Đa nghĩa" },
  { korean: "다재", vietnamese: "Đa tài" },
  { korean: "다정", vietnamese: "Đa tình" },
  { korean: "단가", vietnamese: "Đơn giá" },
  { korean: "단결", vietnamese: "Đoàn kết" },
  { korean: "단계", vietnamese: "Giai đoạn" },
  { korean: "단단하다", vietnamese: "Cứng" },
  { korean: "단독", vietnamese: "Đơn độc" },
  { korean: "단련", vietnamese: "Luyện" },
  { korean: "단성", vietnamese: "Đơn tính" },
  { korean: "단순", vietnamese: "Đơn thuần" },
];
const list13 = [
  { korean: "담", vietnamese: "Đờm" },
  { korean: "담임", vietnamese: "Đảm nhiệm" },
  { korean: "담판", vietnamese: "Đàm phán" },
  { korean: "답례", vietnamese: "Đáp lễ" },
  { korean: "답안", vietnamese: "Đáp án" },
  { korean: "당", vietnamese: "Dường" },
  { korean: "당뇨병", vietnamese: "Bệnh đái đường" },
  { korean: "당연", vietnamese: "Đương nhiên" },
  { korean: "당원", vietnamese: "Đảng viên" },
  { korean: "당황", vietnamese: "Bàng hoàng" },
  { korean: "대가족", vietnamese: "Đại gia đình" },
  { korean: "대개", vietnamese: "Đại khái" },
  { korean: "대기", vietnamese: "Khói" },
  { korean: "대내", vietnamese: "Đối nội" },
  { korean: "대다수", vietnamese: "Đại đa số" },
  { korean: "대로", vietnamese: "Đại lộ" },
  { korean: "대륙", vietnamese: "Đại lục" },
  { korean: "대립", vietnamese: "Đối lập" },
  { korean: "대변", vietnamese: "Đại tiện" },
  { korean: "대사", vietnamese: "Đại sứ" },
  { korean: "대사", vietnamese: "Đại sự" },
  { korean: "대사관", vietnamese: "Đại sứ quán" },
  { korean: "대승", vietnamese: "Đại thắng" },
];

const list14 = [
  { korean: "대양", vietnamese: "Đại Dương" },
  { korean: "대양주", vietnamese: "Châu Đại dương" },
  { korean: "대우", vietnamese: "Đối xử" },
  { korean: "대장", vietnamese: "Đại tướng" },
  { korean: "대장부", vietnamese: "Đại trượng phu" },
  { korean: "대전", vietnamese: "Đại chiến" },
  { korean: "대접", vietnamese: "Tiếp đãi" },
  { korean: "대조", vietnamese: "Đối chiếu" },
  { korean: "대주다", vietnamese: "Cho" },
  { korean: "대중", vietnamese: "Đại chúng" },
  { korean: "대표", vietnamese: "Đại biểu" },
  { korean: "대학", vietnamese: "Đại học" },
  { korean: "대회", vietnamese: "Đại hội" },
  { korean: "덕", vietnamese: "Đức" },
  { korean: "도구", vietnamese: "Công cụ" },
  { korean: "도덕", vietnamese: "Đạo đức" },
  { korean: "도리", vietnamese: "Đạo lý" },
  { korean: "도산", vietnamese: "Phá sản" },
  { korean: "도시", vietnamese: "Đô thị" },
  { korean: "독", vietnamese: "Độc" },
  { korean: "독기", vietnamese: "Khí độc" },
  { korean: "독립", vietnamese: "Độc lập" },
];
const list15 = [
  { korean: "독자", vietnamese: "Độc giả" },
  { korean: "독재", vietnamese: "Độc tài" },
  { korean: "독점", vietnamese: "Độc chiếm" },
  { korean: "독해", vietnamese: "Đọc hiểu" },
  { korean: "돌변", vietnamese: "Đột biến" },
  { korean: "돌연", vietnamese: "Đột nhiên" },
  { korean: "돌파", vietnamese: "Đột phá" },
  { korean: "동(冬)", vietnamese: "Mùa đông" },
  { korean: "동(東)", vietnamese: "Phía đông" },
  { korean: "동감", vietnamese: "Đồng cảm" },
  { korean: "동등", vietnamese: "Bình đẳng" },
  { korean: "동류", vietnamese: "Đồng loại" },
  { korean: "동맥", vietnamese: "Động mạch" },
  { korean: "동맹", vietnamese: "Đồng minh" },
  { korean: "동심", vietnamese: "Đồng tâm" },
  { korean: "동요", vietnamese: "Dao động" },
  { korean: "동원", vietnamese: "Động viên" },
  { korean: "동일", vietnamese: "Đồng nhất" },
  { korean: "동작", vietnamese: "Động tác" },
  { korean: "동정", vietnamese: "Đồng tình" },
  { korean: "동정", vietnamese: "Thông cảm" },
];
const list16 = [
  { korean: "동지", vietnamese: "Đồng chí" },
  { korean: "동포", vietnamese: "Đồng bào" },
  { korean: "동행", vietnamese: "Đồng hành" },
  { korean: "두부", vietnamese: "Đậu phụ" },
  { korean: "등기", vietnamese: "Đăng ký" },
  { korean: "마술", vietnamese: "Ma thuật" },
  { korean: "만능", vietnamese: "Vạn năng" },
  { korean: "만물", vietnamese: "Vạn vật" },
  { korean: "만사", vietnamese: "Vạn sự" },
  { korean: "만세", vietnamese: "Vạn tuế" },
  { korean: "매복", vietnamese: "Mai phục" },
  { korean: "매장", vietnamese: "Mai táng" },
  { korean: "매춘", vietnamese: "Mại dâm" },
  { korean: "매화", vietnamese: "Hoa mai" },
  { korean: "맹렬", vietnamese: "Mãnh liệt" },
  { korean: "면대", vietnamese: "Đối diện" },
  { korean: "면역", vietnamese: "Miễn dịch" },
  { korean: "면적", vietnamese: "Diện tích" },
];
const list17 = [
  { korean: "모방", vietnamese: "Mô phỏng" },
  { korean: "모순", vietnamese: "Mâu thuẫn" },
  { korean: "모험", vietnamese: "Mạo hiểm" },
  { korean: "모형", vietnamese: "Mô hình" },
  { korean: "목성", vietnamese: "Sao mộc" },
  { korean: "목적", vietnamese: "Mục đích" },
  { korean: "목차", vietnamese: "Mục lục" },
  { korean: "목표", vietnamese: "Mục tiêu" },
  { korean: "몽롱", vietnamese: "Mông lung" },
  { korean: "몽상", vietnamese: "Mộng tưởng" },
  { korean: "몽설", vietnamese: "Mộng tinh" },
  { korean: "몽유병", vietnamese: "Bệnh mộng du" },
  { korean: "무기", vietnamese: "Vũ khí" },
  { korean: "무례", vietnamese: "Vô lễ" },
  { korean: "무리", vietnamese: "Vô lý" },
  { korean: "무명", vietnamese: "Vô danh" },
];

const list18 = [
  { korean: "무미", vietnamese: "Vô vị" },
  { korean: "무산", vietnamese: "Vô sản" },
  { korean: "무선", vietnamese: "Vô tuyến" },
  { korean: "무성", vietnamese: "Vô tính" },
  { korean: "무수", vietnamese: "Vô số" },
  { korean: "무술", vietnamese: "Võ thuật" },
  { korean: "무식", vietnamese: "Vô học" },
  { korean: "무심", vietnamese: "Vô tâm" },
  { korean: "무역", vietnamese: "Mậu dịch" },
  { korean: "무용", vietnamese: "Vô dụng" },
  { korean: "무조건", vietnamese: "Vô điều kiện" },
  { korean: "무죄", vietnamese: "Vô tội" },
  { korean: "문명", vietnamese: "Văn minh" },
  { korean: "문예", vietnamese: "Văn nghệ" },
  { korean: "문학", vietnamese: "Văn học" },
  { korean: "문화", vietnamese: "Văn hoá" },
  { korean: "물리", vietnamese: "Vật lý" },
  { korean: "미술", vietnamese: "Mỹ thuật" },
  { korean: "미신", vietnamese: "Mê tín" },
  { korean: "미인", vietnamese: "Mỹ nhân" },
  { korean: "민족", vietnamese: "Dân tộc" },
];

const maxWrongAttempts = 3; // Define maxWrongAttempts here
let shuffledVocabulary = [];
let currentIndex = 0;
let wrongAttempts = 0; // Define wrongAttempts here
let timer; // Add this line to declare the timer variable
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function selectCategory() {
  const categorySelect = document.getElementById("category-select");
  const selectedCategory = categorySelect.value;

  switch (selectedCategory) {
    case "list1":
      shuffle(list1);
      shuffledVocabulary = list1.slice();
      break;
    case "list2":
      shuffle(list2);
      shuffledVocabulary = list2.slice();
      break;
    case "list3":
      shuffle(list3);
      shuffledVocabulary = list3.slice();
      break;

    case "list4":
      shuffle(list4);
      shuffledVocabulary = list4.slice();
      break;
    case "list5":
      shuffle(list5);
      shuffledVocabulary = list5.slice();
      break;
    case "list6":
      shuffle(list6);
      shuffledVocabulary = list6.slice();
      break;
    case "list7":
      shuffle(list7);
      shuffledVocabulary = list7.slice();
      break;
    case "list8":
      shuffle(list8);
      shuffledVocabulary = list8.slice();
      break;
    case "list9":
      shuffle(list9);
      shuffledVocabulary = list9.slice();
      break;
    case "list10":
      shuffle(list10);
      shuffledVocabulary = list10.slice();
      break;
    case "list11":
      shuffle(list11);
      shuffledVocabulary = list11.slice();
      break;
    case "list12":
      shuffle(list12);
      shuffledVocabulary = list12.slice();
      break;
    case "list13":
      shuffle(list13);
      shuffledVocabulary = list13.slice();
      break;
    case "list14":
      shuffle(list14);
      shuffledVocabulary = list14.slice();
      break;
    case "list15":
      shuffle(list15);
      shuffledVocabulary = list15.slice();
      break;
    case "list16":
      shuffle(list16);
      shuffledVocabulary = list16.slice();
      break;
    case "list17":
      shuffle(list17);
      shuffledVocabulary = list17.slice();
      break;
    case "list18":
      shuffle(list18);
      shuffledVocabulary = list18.slice();
      break;

    // Add cases for other categories
    default:
      shuffle(kazoku);
      shuffledVocabulary = kazoku.slice();
  }

  currentIndex = 0;
  displayNextWord();
}

function displayNextWord() {
  const koreanWordElement = document.getElementById("korean-word");
  const vietnameseInput = document.getElementById("vietnamese-input");
  const messageElement = document.getElementById("message");

  if (currentIndex < shuffledVocabulary.length) {
    koreanWordElement.textContent = shuffledVocabulary[currentIndex].korean;
    vietnameseInput.value = "";
    messageElement.textContent = "";
  } else {
    koreanWordElement.textContent = "Bạn đã hoàn thành danh sách từ vựng!";
  }
}

function checkVietnamese() {
  const vietnameseInput = document.getElementById("vietnamese-input");
  const userAnswer = vietnameseInput.value.trim().toLowerCase();
  const messageElement = document.getElementById("message");

  if (
    userAnswer === shuffledVocabulary[currentIndex].vietnamese.toLowerCase()
  ) {
    messageElement.textContent = "Chính xác, bé iu quá giỏi";
    messageElement.style.color = "green";
    currentIndex = (currentIndex + 1) % shuffledVocabulary.length;
    wrongAttempts = 0;
    clearTimeout(timer);
    timer = setTimeout(() => {
      displayNextWord();
    }, 1000); // Move to next word after 3 seconds
  } else {
    wrongAttempts++;
    vietnameseInput.value = "";
    if (wrongAttempts >= maxWrongAttempts) {
      messageElement.textContent =
        "Đáp án đúng là: " + shuffledVocabulary[currentIndex].vietnamese;
      currentIndex = (currentIndex + 1) % shuffledVocabulary.length;
      wrongAttempts = 0;
      messageElement.style.color = "orange";
      clearTimeout(timer);
      timer = setTimeout(() => {
        displayNextWord();
      }, 1000); // Move to next word after 3 seconds
    } else {
      messageElement.style.color = "red";
      messageElement.textContent = "Sai rồi! Suy nghĩ lại đi cưng";
    }
  }
}
