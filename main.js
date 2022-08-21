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
  td[7].innerHTML = "";
  
  /**버튼 객체 생성**/
  var btn1 = document.querySelectorAll('.btn');
  
  /**버튼 클릭 시 이벤트 발생(카테고리에 대한 내용)**/
  btn1[0].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><산술적 특성></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra1.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<h1><산술 연산 예시></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra2.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra3.PNG'/><br/><br/>";
  })
  btn1[1].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><지수의 성질></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra4.PNG'/><br/><br/>";
  })
  btn1[2].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><근의 공식></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra5.PNG'/><br/><br/>";
  })
  btn1[3].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><허수의 성질></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra6.PNG'/><br/><br/>";
  })
  btn1[4].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><루트의 성질></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra7.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "n이 홀수일 경우<br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra8.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "n이 짝수일 경우<br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra9.PNG'/><br/><br/>";
  })
  btn1[5].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><로그의 성질></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra10.PNG'/><br/><br/>";
  })
  btn1[6].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><알아두면 좋은 예시들></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra11.PNG'/><br/><br/>";
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
    document.querySelector('#grid2').innerHTML = "<br/><h1><알아두면 좋은 예시들></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/algebra11.PNG'/><br/><br/>";
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
