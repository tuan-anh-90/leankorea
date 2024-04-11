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
    case "boPhanCoThe":
      shuffle(boPhanCoThe);
      shuffledVocabulary = boPhanCoThe.slice();
      break;
    case "diadiem":
      shuffle(diadiem);
      shuffledVocabulary = diadiem.slice();
      break;
    case "dongtu":
      shuffle(dongtu);
      shuffledVocabulary = dongtu.slice();
      break;

    case "dongVat":
      shuffle(dongVat);
      shuffledVocabulary = dongVat.slice();
      break;
    case "dongVatDuoiNuoc":
      shuffle(dongVatDuoiNuoc);
      shuffledVocabulary = dongVatDuoiNuoc.slice();
      break;
    case "dungCuHocTap":
      shuffle(dungCuHocTap);
      shuffledVocabulary = dungCuHocTap.slice();
      break;
    case "dungCuTrongNha":
      shuffle(dungCuTrongNha);
      shuffledVocabulary = dungCuTrongNha.slice();
      break;
    case "giaVi":
      shuffle(giaVi);
      shuffledVocabulary = giaVi.slice();
      break;
    case "hoa":
      shuffle(hoa);
      shuffledVocabulary = hoa.slice();
      break;
    case "hoaQua":
      shuffle(kazohoaQuaku);
      shuffledVocabulary = hoaQua.slice();
      break;
    case "kazoku":
      shuffle(kazoku);
      shuffledVocabulary = kazoku.slice();
      break;
    case "nghenghiep":
      shuffle(nghenghiep);
      shuffledVocabulary = nghenghiep.slice();
      break;
    case "ngayTrongThang":
      shuffle(ngayTrongThang);
      shuffledVocabulary = ngayTrongThang.slice();
      break;
    case "phuongTienGiaoThong":
      shuffle(phuongTienGiaoThong);
      shuffledVocabulary = phuongTienGiaoThong.slice();
      break;
    case "quanAo":
      shuffle(quanAo);
      shuffledVocabulary = quanAo.slice();
      break;
    case "soDem":
      shuffle(soDem);
      shuffledVocabulary = soDem.slice();
      break;
    case "thoiGian":
      shuffle(thoiGian);
      shuffledVocabulary = thoiGian.slice();
      break;
    case "thoiGian1":
      shuffle(thoiGian1);
      shuffledVocabulary = thoiGian1.slice();
      break;
    case "vi":
      shuffle(vi);
      shuffledVocabulary = vi.slice();
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
