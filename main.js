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
    document.querySelector('#grid2').innerHTML = "<br/><h1><알아두면 좋은 정리들></h1><br/>";
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
  td[3].innerHTML = "<button class='btn'>입체도형</button>";
  td[4].innerHTML = "<button class='btn'>삼각법</button>";
  td[5].innerHTML = "<button class='btn'>삼각 함수<br/>그래프</button>";
  td[6].innerHTML = "<button class='btn'>삼각 함수<br/>응용</button>";
  td[7].innerHTML = "";
  
  /**버튼 객체 생성**/
  var btn2 = document.querySelectorAll('.btn');
  
  /**버튼 클릭 시 이벤트 발생(카테고리에 대한 내용)**/
  btn2[0].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><정사각형></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry1.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry1_1.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><직사각형></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry2.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry2_1.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><평행사변형></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry3.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry3_1.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><사다리꼴></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry7.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry7_1.PNG'/><br/><br/>";
    })
  btn2[1].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><삼각형></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry4.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry4_1.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><직사삼각형과 피타고라스 정리></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry5.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry5_1.PNG'/><br/><br/>";
    })
  btn2[2].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><원></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry6.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry6_1.PNG'/><br/><br/>";
    })
  btn2[3].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><원통></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry8.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry8_1.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><구></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry9.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry9_1.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><직육면체></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry10.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry10_1.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><원뿔></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry11.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/geometry11_1.PNG'/><br/><br/>";
    })
  btn2[4].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><삼각법의 기본></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry1.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry2.PNG'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry7.PNG'/><br/><br/>";
    })
  btn2[5].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><사인 함수></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry3.jpg'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><코사인 함수></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry4.jpg'/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><탄젠트 함수></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry5.jpg'/><br/><br/>";
    })
  btn2[6].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><알아두면 좋은 정리들></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry6.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry8.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry9.PNG'/><br/>";
    document.querySelector('#grid2').innerHTML += "<p>※ n은 정수</p><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry10.PNG'/><br/><br/><br/>"
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry11.PNG'/><br/><br/><br/>"
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
  
  /**버튼 클릭 시 이벤트 발생(카테고리에 대한 내용)**/
  btn3[0].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    })
  btn3[1].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    })
  btn3[2].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
  btn3[3].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
  btn3[4].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
  btn3[5].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
  btn3[6].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
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
  
  /**버튼 클릭 시 이벤트 발생(카테고리에 대한 내용)**/
  btn4[0].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
  btn4[1].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
  btn4[2].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
  btn4[3].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
  btn4[4].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
  btn4[5].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
  btn4[6].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "";
    document.querySelector('#grid2').innerHTML += "";
    })
})
