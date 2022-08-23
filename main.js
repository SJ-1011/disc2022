/**객체 설정**/
var img = document.querySelectorAll('img');
var td = document.querySelectorAll('td');
var tb = document.getElementById("tb");
var grid = document.getElementById("grid3");
var grid2 = document.getElementById("grid2");

/**4개의 상위 카테고리 클릭 시 하위 카테고리가 나옴**/
img[1].addEventListener('click', function(){
  grid2.setAttribute('class', 'grid2');
  grid.removeAttribute('class');
  grid.innerHTML = ""
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
  grid2.setAttribute('class', 'grid2');
  grid.removeAttribute('class');
  grid.innerHTML = ""
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
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry10.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry14.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1>배각 공식</h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry11.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1>반각 공식</h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry12.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1>사인 법칙</h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/trigonometry13.PNG'/><br/><br/><br/>";



    })
})

img[3].addEventListener('click', function(){
  grid2.setAttribute('class', 'grid2');
  grid.removeAttribute('class');
  grid.innerHTML = ""
  /**테이블 데이터에 class를 부여하여 줄맞춤**/
  for (i=0; i<8; i++){
    td[i].removeAttribute('class');
    td[i].setAttribute('class', 'line');
  }
  
  /**테이블에 버튼 추가**/
  td[0].innerHTML = "<button class='btn'>미분의<br/>정의</button>";
  td[1].innerHTML = "<button class='btn'>미분의<br/>성질</button>";
  td[2].innerHTML = "<button class='btn'>극한</button>";
  td[3].innerHTML = "<button class='btn'>로피탈<br/>법칙</button>";
  td[4].innerHTML = "<button class='btn'>적분의<br/>정의</button>";
  td[5].innerHTML = "<button class='btn'>적분의<br/>성질</button>";
  td[6].innerHTML = "<button class='btn'>삼각치환</button>";
  td[7].innerHTML = "";
  
  /**버튼 객체 생성**/
  var btn3 = document.querySelectorAll('.btn');
  
  /**버튼 클릭 시 이벤트 발생(카테고리에 대한 내용)**/
  btn3[0].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><미분의 정의></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives1.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives3.PNG'/><br/><br/><br/>";
    })
  btn3[1].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><기본 성질></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives2.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives6.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><곱미분></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives4.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><몫미분></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives5.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><이중미분></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives7.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><기타 미분법></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives8.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives9.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives10.PNG'/><br/><br/><br/>";
    })
  btn3[2].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><극한의 성질></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives13.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives14.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><극한 찾는 방법></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives12.PNG'/><br/><br/><br/>";
    })
  btn3[3].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><로피탈 법칙></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/derivatives11.PNG'/><br/><br/><br/>";
    
    })
  btn3[4].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><적분의 정의></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/integrals1.PNG'/><br/><br/><br/>";
    })
  btn3[5].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><기본 성질></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/integrals2.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><적분법></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/integrals3.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<br/><h1><삼각함수의 적분법></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/integrals4.PNG'/><br/><br/><br/>";
    })
  btn3[6].addEventListener('click', function(){
    document.querySelector('#grid2').innerHTML = "<br/><h1><삼각치환법></h1><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/integrals7.PNG'/><br/><br/><br/>";
    document.querySelector('#grid2').innerHTML += "<img src='images/integrals6.PNG'/><br/><br/><br/>";
    })
})

img[4].addEventListener('click', function(){
  grid.removeAttribute('class');
  grid.innerHTML = ""
  grid.setAttribute('class', 'container');
  grid.innerHTML = '<canvas id="canvas" width="1000" height="800"></canvas><canvas id="ui" width="1000" height="800"></canvas>';

      function randomInt(...args) {
        if (args.length === 1) {
          const [n] = args;
          return Math.ceil(Math.random() * n);
        }

        if (args.length === 2) {
          const [start, end] = args;

          if (start > end) throw Error("시작값이 끝값보다 큼");

          return Math.ceil(Math.random() * (end - start)) + start;
        }
      }

      function random(...args) {
        if (args.length === 1) {
          const [n] = args;
          return Math.random() * n;
        }

        if (args.length === 2) {
          const [start, end] = args;

          if (start > end) throw Error("시작값이 끝값보다 큼");

          return Math.random() * (end - start) + start;
        }
      }

      function normalize(n) {
        return n < 0 ? -1 : n > 0 ? 1 : 0;
      }

      function clamp(v, min, max) {
        return Math.max(min, Math.min(max, v));
      }

      function between(v, min, max) {
        return min <= v && v <= max;
      }
      /**
       * Vector Library
       **/
      class Vector {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }

        add(v) {
          this.x += v.x;
          this.y += v.y;
        }

        sub(v) {
          this.x -= v.x;
          this.y -= v.y;
        }

        mult(n) {
          this.x *= n;
          this.y *= n;
        }

        mag() {
          return Math.sqrt(this.x * this.x + this.y + this.y);
        }

        get() {
          return new Vector(this.x, this.y);
        }

        normalize() {
          this.x = normalize(this.x);
          this.y = normalize(this.y);
        }
      }

      Vector.mult = (v, n) => new Vector(v.x * n, v.y * n);

      Vector.div = (v, n) => new Vector(v.x / n, v.y / n);
      /**
       *   Canvas Library
       **/
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");

      const uiCanvas = document.getElementById("ui");
      const uiContext = uiCanvas.getContext("2d");

      const width = 1000;
      const height = 800;

      canvas.width = width;
      canvas.height = height;

      uiCanvas.width = width;
      uiCanvas.height = height;

      function rect(x, y, w, h) {
        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = "#ffffff";
        context.stroke();
        context.closePath();
      }

      function fillRect(x, y, w, h, color = "#171717") {
        context.save();
        context.beginPath();
        context.fillStyle = color;
        context.fillRect(x, y, w, h);
        context.stroke();
        context.closePath();
        context.restore();
      }

      function circle(x, y, r) {
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.lineWidth = 3;

        context.strokeStyle = "#fff";
        context.stroke();
        context.closePath();
      }

      function fillText(text, x, y, fontSize, color = "white") {
        uiContext.fillStyle = "white";
        uiContext.font = `${fontSize}px Arial`;
        uiContext.fillText(text, x, y);
      }

      function clear() {
        context.clearRect(-100000, -100000, 200000, 200000);
      }
      /**
       *   User Code
       **/
      const BLOCK_START_WIDTH = 500;
      const BLOCK_HEIGHT = 50;
      const SLIDE_START_LEVEL = 10;
      const X_TOLERANCE_PERCENT = 0.02;

      class Block {
        constructor(x, width, level) {
          this.velocity = new Vector(5 + ~~(level / 15), 0);
          this.height = BLOCK_HEIGHT;
          this.level = level;
          this.width = width;
          this.moving = true;
          this.position = new Vector(x, this.targetY);
        }

        draw() {
          fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height - 1,
            this.color
          );
        }

        get color() {
          return `hsl(${this.level*10}, 100%, 60%)`;
        }

        fitStack({ stackStartX, stackWidth }) {
          const stackEndX = stackStartX + stackWidth;
          const fit =
            between(this.position.x, stackStartX, stackEndX) ||
            between(this.position.x + this.width, stackStartX, stackEndX);

          return fit;
        }

        trim({ stackStartX, stackWidth }) {
          if (
            Math.abs(stackStartX - this.position.x) <
            this.width * X_TOLERANCE_PERCENT
          ) {
            this.position.x = stackStartX;
          } else {
            const stackEndX = stackStartX + stackWidth;
            const blockEndX = clamp(
              this.position.x + this.width,
              stackStartX,
              stackEndX
            );
            this.position.x = clamp(this.position.x, stackStartX, stackEndX);
            this.width = blockEndX - this.position.x;
          }
        }

        stop() {
          this.velocity = new Vector(0, 0);
          this.moving = false;
        }

        down() {
          this.velocity = new Vector(0, 30);
        }

        get targetY() {
          return height - this.level * this.height;
        }

        get finishMoving() {
          return !this.moving;
        }

        update(state) {
          this.position.add(this.velocity);

          if (this.moving && this.finishMoving && this.fitStack(state)) {
            this.stop();
            this.position.y = this.targetY;
          }
        }

        checkEdges() {
          if (this.position.x > width - this.width) {
            this.position.x = width - this.width;
            this.velocity.x *= -1;
          } else if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x *= -1;
          }

          if (this.position.y > height - this.height) {
            this.stop();
            this.position.y = height - this.height;
          }
        }
      }

      class Slider {
        constructor(t) {
          this.t = t;
        }

        slide(t) {
          this.t += t;
        }

        update(state) {
          if (this.t > 0) {
            this.t -= 2;
            context.translate(0, 2);
          }
        }

        get finishSliding() {
          return this.t <= 0;
        }
      }

      class Scaler {
        constructor(level) {
          this.level = level;
          this.totalHeight = BLOCK_HEIGHT * this.level + 150;
          this.ratio = (height / this.totalHeight) * 100;
          this.t = 100;
        }

        update() {
          const totalHeight = BLOCK_HEIGHT * this.level + 150;
          const ratio = this.t / 100;

          if (totalHeight > height && this.t > this.ratio) {
            this.t -= 1;
            const scaleX = ratio;
            const scaleY = ratio;
            const translateX = 5 * (100 - this.t);
            const translateY = (totalHeight - height) * ratio + 150;
            context.setTransform(scaleX, 0, 0, scaleY, translateX, translateY);
          }
        }
      }

      const getBestScore = () => localStorage.getItem("stackBestLevel") || 1;

      const setBestScore = (score) =>
        localStorage.setItem("stackBestLevel", Math.max(getBestScore(), score));

      class UI {
        constructor(state) {
          this.state = state;
        }

        draw() {
          uiContext.clearRect(0, 0, width, height);

          if (!this.state.start) {
            fillText("스페이스바로 시작하기", 300, 150, 40, "white");
            fillText(`최고기록 ${getBestScore() - 1}`, 380, 300, 40, "white");
          } else {
            const levelLength = this.state.level.toString().length;
            const levelTextOffset = 15 * levelLength;
            fillText(
              this.state.level - 1,
              width / 2 - levelTextOffset,
              150,
              60,
              "white"
            );
          }

          if (this.state.over) {
            fillText("게임오버", 410, 250, 50, "white");
          }
        }
      }

      /**
       *   Main Code
       **/
      let blocks = [];
      let slider;
      let scaler;
      let ui;

      const state = {
        start: false,
        over: false,
        level: 1,
        blockFalling: false,
        stackWidth: 300,
        stackStartX: width / 2 - BLOCK_START_WIDTH / 2,
      };

      function setup() {
        //blocks = [...Array(state.level)].map((_, i) => new Block(state.stackStartX, BLOCK_START_WIDTH, i + 1))
        //blocks.forEach(i => i.stop())
        //context.translate(0, BLOCK_HEIGHT * state.level - 500)
        blocks = [new Block(state.stackStartX, BLOCK_START_WIDTH, state.level)];
        blocks[0].stop();

        slider = new Slider(0);
        ui = new UI(state);
      }

      function draw() {
        clear();

        blocks.forEach((block) => {
          block.update(state);
          block.checkEdges();
          block.draw();
        });

        slider.update(state);

        if (scaler) scaler.update();

        ui.draw();
      }

      function run() {
        draw();

        const block = blocks[blocks.length - 1];
        if (state.start && !state.over && block.finishMoving) {
          if (block.fitStack(state)) {
            block.trim(state);
            state.level += 1;
            state.stackWidth = block.width;
            state.stackStartX = block.position.x;

            blocks.push(new Block(0, state.stackWidth, state.level));

            if (state.level >= SLIDE_START_LEVEL) {
              slider.slide(50);
            }

            setBestScore(state.level);
          } else {
            console.log("game over!");
            block.down();
            state.over = true;
            scaler = new Scaler(state.level);
          }
        }
        requestAnimationFrame(run);
      }

      window.onkeypress = ({ key }) => {
        if (key !== " ") return;

        state.start = true;

        if (state.over) return location.reload();

        const block = blocks[blocks.length - 1];
        block.stop();
      };

      setup();

      requestAnimationFrame(run);


})
