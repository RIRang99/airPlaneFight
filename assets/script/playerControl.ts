import {
  _decorator,
  Component,
  Node,
  EventTouch,
  v3,
  Prefab,
  instantiate
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("playerControl")
export class playerControl extends Component {
  @property(Prefab)
  bullet: Prefab = null;
  start() {
    this.node.on(Node.EventType.TOUCH_MOVE, (e: EventTouch) => {
      const { x, y } = e.getUILocation();
      this.node.setWorldPosition(v3(x, y));
    });

    // 重复生成子弹
    this.schedule(() => {
      console.log(1);

      const { x, y } = this.node.getPosition();
      // 初始化子弹

      const node = instantiate(this.bullet);
      // 设置子弹的层级和飞机为同一级
      node.setParent(this.node.parent);
      // 设置子弹的初始位置
      node.setPosition(x, y + 70);
    }, 0.2);
  }

  update(deltaTime: number) {}
}
