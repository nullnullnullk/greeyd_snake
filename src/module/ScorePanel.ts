export default class ScorePanel {
  // 记录分数和等级
  score = 0;
  level = 1;
  // 分数和等级所在的元素
  scoreElement: HTMLElement;
  levelElement: HTMLElement;

  // 限制level
  maxLevel:number;

  // 设置变量表示多少分升级
  upScore:number;

  constructor(maxLevel = 10,upScore = 10) {
    this.maxLevel = maxLevel;
    this.upScore = upScore;
    this.scoreElement = document.querySelector('#score')!;
    this.levelElement = document.querySelector('#level')!;
  }
  addScore() {
    this.scoreElement.innerHTML = ++this.score + '';
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelElement.innerHTML = ++this.level + ''
    }
  }
}
