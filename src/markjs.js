import Observer from "./src/observer";
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

    // 固化事件函数的this
    this.bindEventCallback();
    // 初始化
    this.init();
    // 注册插件
    this.usePlugins();
  }


  updateOpt(newOpt) {
    this.opt = merge(this.opt, newOpt);
    this.emit("UPDATED_OPT", this.opt);
  }

  usePlugins() {
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
    return this.observer.subscribe(event, callback);
  }

  off(token) {
    this.observer.unsubscribe(token);
  }

  init() {
    this.createElement();
    this.ctx = this.canvasEle.getContext("2d");
    this.bindEvent();
  }

  
  destroy() {
    this.unbindEvent();
    this.el.removeChild(this.canvasEle);
    this.emit("DESTORY");
    this.observer.clearAll();
  }


  
  createElement() {
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


  
  bindEventCallback() {
    this.onclick = this.onclick.bind(this);
    this.onmousedown = this.onmousedown.bind(this);
    this.onmousemove = this.onmousemove.bind(this);
    this.onmouseup = this.onmouseup.bind(this);
    this.onmouseenter = this.onmouseenter.bind(this);
    this.onmouseleave = this.onmouseleave.bind(this);
    this.onWindowClick = this.onWindowClick.bind(this);
  }

  
  bindEvent() {
    let isMobile = this.opt.mobile;
    this.canvasEle.addEventListener("click", this.onclick);
    this.canvasEle.addEventListener(
      isMobile ? "touchstart" : "mousedown",
      this.onmousedown
    );
    this.canvasEle.addEventListener(
      isMobile ? "touchmove" : "mousemove",
      this.onmousemove
    );
    window.addEventListener(isMobile ? "touchend" : "mouseup", this.onmouseup);
    this.canvasEle.addEventListener("mouseenter", this.onmouseenter);
    this.canvasEle.addEventListener("mouseleave", this.onmouseleave);
    window.addEventListener("click", this.onWindowClick);
  }


  
  unbindEvent() {
    let isMobile = this.opt.mobile;
    this.canvasEle.removeEventListener("click", this.onclick);
    this.canvasEle.removeEventListener(
      isMobile ? "touchstart" : "mousedown",
      this.onmousedown
    );
    this.canvasEle.removeEventListener(
      isMobile ? "touchmove" : "mousemove",
      this.onmousemove
    );
    window.removeEventListener(
      isMobile ? "touchend" : "mouseup",
      this.onmouseup
    );
    this.canvasEle.removeEventListener("mouseenter", this.onmouseenter);
    this.canvasEle.removeEventListener("mouseleave", this.onmouseleave);
    window.removeEventListener("click", this.onWindowClick);
  }
  
  onclick(e) {
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


  
  onmousedown(e) {
    if (this.opt.mobile) {
      e = e.touches[0];
    }
    this.mousedownPos = {
      x: e.clientX,
      y: e.clientY,
    };
    this.emit("MOUSEDOWN", e);
  }


  
  onmousemove(e) {
    if (this.opt.mobile) {
      e = e.touches[0];
    }
    this.emit("MOUSEMOVE", e);
  }


  
  onmouseup(e) {
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


  
  onmouseenter(e) {
    this.emit("MOUSEENTER", e);
  }


  
  onmouseleave(e) {
    this.emit("MOUSELEAVE", e);
  }


  
  onWindowClick(e) {
    this.emit("WINDOW-CLICK", e);
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
