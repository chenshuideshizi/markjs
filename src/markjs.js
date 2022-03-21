import Observer from "./shared/observer";
import utils from "./src/utils";
import editPlugin from "./src/plugins/edit";
import merge from "deepmerge";


/*
配置
{
    el: Object, // 容器元素，dom元素或选择器字符串
    dbClickTime: 200,// 双击间隔事件，默认200ms
    mobile: false// 是否是移动端模式，默认false
}

事件
on(event, callback)，事件监听，CLICK、DOUBLE-CLICK、MOUSEDOWN、MOUSEMOVE、MOUSEUP、MOUSEENTER、MOUSELEAVE、WINDOW-CLICK
*/

// 默认配置
const defaultOpt = {
  dbClickTime: 200,
};


class Markjs {
  static pluginList = [];

  static use(plugin, index = -1) {
    if (!plugin) {
      return;
    }
    if (plugin.used) {
      return this;
    }
    plugin.used = true;
    if (index === -1) {
      Markjs.pluginList.push(plugin);
    } else {
      Markjs.pluginList.splice(index, 0, plugin);
    }
  }

  constructor(opt = {}) {
    if (!opt.el) {
      throw new Error("el属性为空");
    }
    // 配置项
    this.opt = {
      ...defaultOpt,
      ...opt,
    };
    // 容器元素
    this.el = typeof opt.el === "string" ? document.querySelector(opt.el) : opt.el;
    if (!this.el) {
      throw new Error("容器元素获取失败");
    }
    // 容器元素的尺寸信息
    this.elRectInfo = null;
    // canvas元素
    this.canvasEle = null;
    // 绘图元素尺寸信息
    this.canvasEleRectInfo = null;
    // 绘图上下文
    this.ctx = null;
    // 单击定时器
    this.clickTimer = null;
    // 发布订阅对象
    this.observer = new Observer();
    // 鼠标按下的位置
    this.mousedownPos = {
      x: 0,
      y: 0,
    };
    // 鼠标松开的位置
    this.mouseupPos = {
      x: 0,
      y: 0,
    };
    // 鼠标上次点击的时间
    this.lastClickTime = 0;

    // 移除绑定事件
    this.removeEventFns = []

    // 初始化
    this._init();
    // 注册插件
    this._usePlugins();
  }


  updateOpt(newOpt) {
    this.opt = merge(this.opt, newOpt);
    this.emit("UPDATED_OPT", this.opt);
  }

  _usePlugins() {
    let index = 0;
    let len = Markjs.pluginList.length;
    let loopUse = () => {
      if (index >= len) {
        this.emit("PLUGINS_LOADED");
        return;
      }
      let cur = Markjs.pluginList[index];
      cur(this, utils).then(() => {
        index++;
        loopUse();
      });
    };
    loopUse();
  }


  emit(event, ...args) {
    this.observer.publish(event, ...args);
  }

  on(event, callback) {
    if (typeof event === 'object') {
      Object.keys(event).forEach(eventKey => {
        this.on(eventKey, event[eventKey])
      })
      return
    }
    return this.observer.subscribe(event, callback);
  }

  off(token) {
    this.observer.unsubscribe(token);
  }

  _init() {
    this._createCanvasElement();
    this.ctx = this.canvasEle.getContext("2d");
    this._bindEvent();
  }


  destroy() {
    this._unbindEvent();
    this.el.removeChild(this.canvasEle);
    this.emit("DESTORY");
    this.observer.clearAll();
  }



  _createCanvasElement() {
    this.elRectInfo = this.el.getBoundingClientRect();
    let { width, height } = this.elRectInfo;
    this.canvasEle = document.createElement("canvas");
    this.canvasEle.width = width;
    this.canvasEle.height = height;
    this.canvasEleRectInfo = {
      width,
      height,
    };
    this.el.appendChild(this.canvasEle);
  }


  _addEvent(el, type, handler, capture = false) {
    el.addEventListener(type, handler, capture)
    const removeFn = () => {
      el.removeEventListener(type, handler, capture)
    }
    this.removeEventFns.push(removeFn)
    return removeFn
  }

  _bindEvent() {
    let isMobile = this.opt.mobile;
    this._addEvent(this.canvasEle, 'click', onclick.bind(this))
    this._addEvent(this.canvasEle, isMobile ? "touchstart" : "mousedown", onmousedown.bind(this))
    this._addEvent(this.canvasEle, isMobile ? "touchmove" : "mousemove", onmousemove.bind(this))
    this._addEvent(this.canvasEle, 'mouseenter', onmouseenter.bind(this))
    this._addEvent(this.canvasEle, 'mouseleave', onmouseleave.bind(this))
    this._addEvent(window, isMobile ? "touchend" : "mouseup", onmouseup.bind(this))
    this._addEvent(window, 'click', onWindowClick.bind(this));


    function onmouseup(e) {
      if (this.opt.mobile) {
        e = e.touches[0];
      }
      if (!e) {
        e = {
          clientX: 0,
          clientY: 0,
        };
      }
      this.mouseupPos = {
        x: e.clientX,
        y: e.clientY,
      };
      this.emit("MOUSEUP", e);
    }

    function onmousedown(e) {
      if (this.opt.mobile) {
        e = e.touches[0];
      }
      this.mousedownPos = {
        x: e.clientX,
        y: e.clientY,
      };
      this.emit("MOUSEDOWN", e);
    }

    function onclick(e) {
      if (this.clickTimer) {
        clearTimeout(this.clickTimer);
        this.clickTimer = null;
      }

      this.clickTimer = setTimeout(() => {
        this.emit("CLICK", e);
      }, this.opt.dbClickTime);

      if (Date.now() - this.lastClickTime <= this.opt.dbClickTime) {
        clearTimeout(this.clickTimer);
        this.clickTimer = null;
        this.lastClickTime = 0;
        this.emit("DOUBLE-CLICK", e);
      }

      this.lastClickTime = Date.now();
    }

    function onmousemove(e) {
      this.emit("MOUSEMOVE", e);
    }

    function onmouseenter(e) {
      this.emit("MOUSEENTER", e);
    }

    function onmouseleave(e) {
      this.emit("MOUSELEAVE", e);
    }

    function onWindowClick(e) {
      this.emit("WINDOW-CLICK", e);
    }
  }

  _unbindEvent() {
    this.removeEventFns.forEach(fn => fn())
    this.removeEventFns = []
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasEle.width, this.canvasEle.height);
  }

  toCanvasPos(e) {
    let cx = e.clientX;
    let cy = e.clientY;
    let { left, top } = this.canvasEle.getBoundingClientRect();
    let x = cx - left;
    let y = cy - top;
    return {
      x,
      y,
    };
  }
}

Markjs.use(editPlugin);

export default Markjs;
