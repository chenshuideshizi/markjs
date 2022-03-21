export default class Observer {
  constructor() {
    // 订阅的集合
    this.observerListeners = {};
    // 用于删除订阅
    this.observerToken = 0;
  }

  publish(topic, ...arg) {
    if (!topic || !this.observerListeners[topic]) {
      return false;
    }
    let subList = this.observerListeners[topic];
    for (let i = 0; i < subList.length; i++) {
      if (subList[i].context) {
        subList[i].fn.apply(subList[i].context, arg);
      } else {
        subList[i].fn.apply(subList[i].fn, arg);
      }
    }
  }

  subscribe(topic, fn) {
    let context =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    if (!this.observerListeners[topic]) {
      this.observerListeners[topic] = [];
    }
    this.observerToken++;
    this.observerListeners[topic].push({
      fn: fn,
      context: context,
      token: this.observerToken,
    });
    return this.observerToken;
  }

  unsubscribe(token) {
    if (!token) {
      return false;
    }
    for (let k in this.observerListeners) {
      if (this.observerListeners.hasOwnProperty(k)) {
        for (let j = 0; j < this.observerListeners[k].length; j++) {
          if (this.observerListeners[k][j].token === token) {
            this.observerListeners[k].splice(j, 1);
          }
        }
      }
    }
  }


  clearTopic(topic) {
    if (!topic) {
      return false;
    }
    for (let k in this.observerListeners) {
      if (this.observerListeners.hasOwnProperty(k)) {
        if (k === topic) {
          delete this.observerListeners[k];
        }
      }
    }
  }

  clearAll() {
    this.observerListeners = {};
    this.observerToken = 0;
  }
}
