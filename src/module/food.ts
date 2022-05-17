class Food {
  // 定义一个属性表示所对应的div
  element: HTMLElement = document.querySelector('div')!;
  consturctor() {
    // 获取页面中的food元素赋值给element
    // 末尾加上叹号，表示id为food的元素必定存在（非空）
    this.element = document.querySelector('#food')!;
  }
  // 定义获取食物x轴坐标
  get X() {
    return this.element?.offsetLeft
  }
  // 定义获取食物y轴坐标
  get Y(){
    return this.element?.offsetTop
  }
  change(){
    // 生成一个随机的位置
    // 食物的位置最小是0 最大是290
    // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food