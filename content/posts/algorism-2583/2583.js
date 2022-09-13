const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let dx = [0, 0, 1, -1]; //x값 방향 그래프 받기
let dy = [1, -1, 0, 0]; //y값 방향 그래프 받기
let result = [];
let resultStr = "";
let count = 0;

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [y, x, n] = input.shift().split(" ").map(Number);

  let map = new Array(y).fill(0).map(() => Array(x).fill(0)); //2차원 배열 생성
  // map.map((e) => console.log(e.toString())); // 전체 맵 확인용 console.log

  let rectangles = [];
  input.forEach((str) => rectangles.push(str.split(" ").map(Number)));

  rectangles.map((e) => {
    let [startX, startY, endX, endY] = e;
    for (let i = startY; i < endY; i++) {
      for (let j = startX; j < endX; j++) {
        map[i][j] = 1;
      }
    }
  }); //맵이 상하 반전 되어 있지만 상관 없을 것으로 예상 사각형 다 채웠음

  // map.map((e) => console.log(e.toString())); // 전체 맵 확인용 console.log

  for (let i = y - 1; i > -1; i--) {
    for (let j = 0; j < x; j++) {
      if (map[i][j] == 0) {
        DFS(i, j);
        result.push(count);
        count = 0;
      }
    }
  }

  function DFS(Oy, Ox) {
    if (Oy < 0 || Ox < 0 || Oy >= y || Ox >= x) return;
    if (map[Oy][Ox] === 1) return;
    map[Oy][Ox] = 1;
    count++;
    for (let i = 0; i < 4; i++) {
      DFS(Oy + dy[i], Ox + dx[i]);
    }
  }

  result = result.sort(function (a, b) {
    return a - b;
  });
  console.log(result);

  console.log(result.length + "\n" + result.join(" "));

  process.exit();
});
