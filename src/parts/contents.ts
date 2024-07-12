import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Util } from "../libs/util";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _items: Array<Item> = []

  constructor(opt:any) {
    super(opt)

    // if(Util.hit(2)) {
    //   Tween.set(this.el, {
    //     flexDirection: 'column-reverse'
    //   })
    // }

    const w = Util.hit(4) ? 100 : Util.randomInt(200, 300)
    Tween.set(this.el, {
      width: w + 'px',
    })

    const num = Util.randomInt(8, 20)
    for(let i = 0; i < num; i++) {
      // 複製する
      const org = document.querySelector('.l-accordion.js-org') as HTMLElement
      const el = org.cloneNode(true) as HTMLElement
      this.el.appendChild(el)
      el.classList.remove('js-org')

      const item = new Item({
        el: el,
        id: i,
      })
      this._items.push(item)
    }

  }

  protected _update():void {
    super._update()
  }
}