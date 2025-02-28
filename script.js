// 현재 선택된 옵션 추적
let currentHair = 1;
let currentHairColor = 'black';
let currentMakeup = 'none';
let currentClothes = 1;

// 머리 스타일 변경 함수
function changeHairStyle(styleNumber) {
    currentHair = styleNumber;
    document.getElementById('hair').src = `images/hair/hair-${styleNumber}.png`;
    applyHairColor(); // 머리색 유지하기 위해 다시 적용
}

// 머리색 변경 함수
function changeHairColor(color) {
    currentHairColor = color;
    applyHairColor();
}

// 머리색 적용 함수
function applyHairColor() {
    const hairImg = document.getElementById('hair');
    
    // CSS 필터를 사용하여 이미지 색상 변경
    // 참고: 실제로는 각 색상별 이미지를 준비하는 것이 더 좋을 수 있습니다
    switch(currentHairColor) {
        case 'black':
            hairImg.style.filter = 'brightness(0.7)';
            break;
        case 'brown':
            hairImg.style.filter = 'sepia(1) saturate(0.8)';
            break;
        case 'blonde':
            hairImg.style.filter = 'sepia(0.5) saturate(1.5) brightness(1.2)';
            break;
        case 'red':
            hairImg.style.filter = 'sepia(0.8) saturate(2) hue-rotate(340deg)';
            break;
    }
}

// 화장 변경 함수
function changeMakeup(style) {
    currentMakeup = style;
    document.getElementById('makeup').src = `images/makeup/${style}.png`;
}

// 의상 변경 함수
function changeClothes(outfitNumber) {
    currentClothes = outfitNumber;
    document.getElementById('clothes').src = `images/clothes/outfit-${outfitNumber}.png`;
}

// 캐릭터 저장 기능
document.getElementById('save-btn').addEventListener('click', function() {
    // 캐릭터 이미지를 캡처하여 다운로드하는 코드
    // 실제 구현을 위해서는 html2canvas 같은 라이브러리를 사용할 수 있습니다
    alert('캐릭터 저장 기능은 아직 개발 중입니다!');
    
    // 현재 선택된 옵션 출력 (테스트용)
    console.log('저장된 캐릭터 정보:');
    console.log('머리 스타일:', currentHair);
    console.log('머리색:', currentHairColor);
    console.log('화장:', currentMakeup);
    console.log('의상:', currentClothes);
});
