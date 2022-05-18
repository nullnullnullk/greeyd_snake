export default class Snake {
  // 表示蛇头的元素
  head: HTMLElement;

  // 包括蛇头
  body: HTMLCollection;

  // 容器
  element: HTMLElement;
  constructor(){
    this.element = document.getElementById('snake')
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.body = this.element.getElementsByTagName('div');
  }

  //获取蛇头的坐标
  get X() {
    return this.head.offsetLeft
  }
  // 设置蛇头的坐标
  set X(value:number) {
    this.head.style.left = value + 'px'
  }
  get Y() {
    return this.head.offsetTop
  }
  set Y(value:number) {
    this.head.style.top = value + 'px'
  }
  // 增加身体的方法
  addBody() {
    let div = document.createElement('div')
    this.element.appendChild(div);
  }
}