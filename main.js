/**객체 설정**/
var img = document.querySelectorAll('img');
var td = document.querySelectorAll('td');
var tb = document.getElementById("tb");


/**4개의 상위 카테고리 클릭 시 하위 카테고리가 나옴**/
img[1].addEventListener('click', function(){
  /**테이블 데이터에 class를 부여하여 줄맞춤**/
  for (i=0; i<8; i++){
    td[i].removeAttribute('class');
    td[i].setAttribute('class', 'line');
  }
  
  /**테이블에 버튼 추가**/
  td[0].innerHTML = "<button class='btn'>대수의<br/>성질</button>";
  td[1].innerHTML = "<button class='btn'>지수</button>";
  td[2].innerHTML = "<button class='btn'>근의 공식</button>";
  td[3].innerHTML = "<button class='btn'>허수</button>";
  td[4].innerHTML = "<button class='btn'>루트</button>";
  td[5].innerHTML = "<button class='btn'>로그</button>";
  td[6].innerHTML = "<button class='btn'>인수분해</button>";
  td[7].innerHTML = "<button class='btn'>절대값</button>";
  
  /**버튼 객체 생성**/
  var btn1 = document.querySelectorAll('.btn');
  
  /**버튼 클릭 시 이벤트 발생(카테고리에 대한 내용)**/
  btn1[0].addEventListener('click', function(){
    alert("클릭 완료");
    })
  })
  
img[2].addEventListener('click', function(){
  /**테이블 데이터에 class를 부여하여 줄맞춤**/
  for (i=0; i<8; i++){
    td[i].removeAttribute('class');
    td[i].setAttribute('class', 'line');
  }
  
  /**테이블에 버튼 추가**/
  td[0].innerHTML = "<button class='btn'>사각형</button>";
  td[1].innerHTML = "<button class='btn'>삼각형</button>";
  td[2].innerHTML = "<button class='btn'>원</button>";
  td[3].innerHTML = "<button class='btn'>구</button>";
  td[4].innerHTML = "<button class='btn'>직육면체</button>";
  td[5].innerHTML = "<button class='btn'>원기둥</button>";
  td[6].innerHTML = "<button class='btn'>원뿔</button>";
  td[7].innerHTML = "";
  
  /**버튼 객체 생성**/
  var btn2 = document.querySelectorAll('.btn');
  
  /**버튼 클릭 시 이벤트 발생(카테고리에 대한 내용)**/
  btn2[0].addEventListener('click', function(){
    alert("클릭2 완료");
    })
})

img[3].addEventListener('click', function(){
  /**테이블 데이터에 class를 부여하여 줄맞춤**/
  for (i=0; i<8; i++){
    td[i].removeAttribute('class');
    td[i].setAttribute('class', 'line');
  }
  
  /**테이블에 버튼 추가**/
  td[0].innerHTML = "<button class='btn'></button>";
  td[1].innerHTML = "<button class='btn'></button>";
  td[2].innerHTML = "<button class='btn'></button>";
  td[3].innerHTML = "<button class='btn'></button>";
  td[4].innerHTML = "<button class='btn'></button>";
  td[5].innerHTML = "<button class='btn'></button>";
  td[6].innerHTML = "<button class='btn'></button>";
  td[7].innerHTML = "";
  
  /**버튼 객체 생성**/
  var btn3 = document.querySelectorAll('.btn');
})

img[4].addEventListener('click', function(){
  /**테이블 데이터에 class를 부여하여 줄맞춤**/
  for (i=0; i<8; i++){
    td[i].removeAttribute('class');
    td[i].setAttribute('class', 'line');
  }
  
  /**테이블에 버튼 추가**/
  td[0].innerHTML = "<button class='btn'></button>";
  td[1].innerHTML = "<button class='btn'></button>";
  td[2].innerHTML = "<button class='btn'></button>";
  td[3].innerHTML = "<button class='btn'></button>";
  td[4].innerHTML = "<button class='btn'></button>";
  td[5].innerHTML = "<button class='btn'></button>";
  td[6].innerHTML = "<button class='btn'></button>";
  td[7].innerHTML = "";
  
  /**버튼 객체 생성**/
  var btn4 = document.querySelectorAll('.btn');
})
