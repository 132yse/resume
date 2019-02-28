// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/fre/dist/fre.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.fre = {}));
}(this, function (exports) { 'use strict';

  const TEXT = 'text';

  function h(tag, config, ...args) {
    const props = Object.assign({}, config);
    const hasChildren = args.length > 0;
    const rawChildren = hasChildren ? [].concat(...args) : [];
    props.children = rawChildren
      .filter(c => c != null && c !== false)
      .map(c => (c instanceof Object ? c : h(TEXT, { nodeValue: c })));
    return { tag, props }
  }

  const isEvent = name => name.startsWith('on');
  const isText = name => name === 'nodeValue';
  const isAttribute = name => name === 'class' || name === 'id' || name === 'href' || name === 'target' || name === 'src';
  const isNew = (prev, next) => key => prev[key] !== next[key];

  function updateProperties(dom, prevProps, nextProps) {
    Object.keys(nextProps)
      .filter(isText)
      .filter(isNew(prevProps, nextProps))
      .forEach(name => {
        dom[name] = nextProps[name];
      });

      Object.keys(nextProps)
      .filter(isAttribute)
      .filter(isNew(prevProps, nextProps))
      .forEach(name => {
        dom.setAttribute(name,nextProps[name]);
      });   

    nextProps.style = nextProps.style || {};
    Object.keys(nextProps.style)
      .filter(isNew(prevProps.style, nextProps.style))
      .forEach(key => {
        dom.style[key] = nextProps.style[key];
      });

    Object.keys(nextProps)
      .filter(isEvent)
      .filter(isNew(prevProps, nextProps))
      .forEach(name => {
        const eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, nextProps[name]);
      });
  }

  function createElement(fiber) {
    const isTextElement = fiber.tag === TEXT;
    const dom = isTextElement
      ? document.createTextNode('')
      : document.createElement(fiber.tag);
    updateProperties(dom, [], fiber.props);
    return dom
  }

  let cursor = 0;

  function update(k, r, v) {
    r ? (v = r(this.state[k], v)) : v;
    //这里实现不太理想，之后想办法搞成微任务
    setTimeout(() => scheduleUpdate(this, k, v));
  }
  function resetCursor() {
    cursor = 0;
  }
  function useState(initState) {
    return useReducer(null, initState)
  }
  function useReducer(reducer, initState) {
    let key = '$' + cursor;
    let setter = update.bind(currentInstance, key, reducer);
    if (currentInstance) cursor++;
    let state;
    if (currentInstance) state = currentInstance.state;
    if (typeof state === 'object' && key in state) {
      return [state[key], setter]
    } else {
      if (currentInstance) currentInstance.state[key] = initState;
    }
    let value = initState;
    return [value, setter]
  }

  // 这个实现并不准确
  function useEffect(effect, inputs) {
    if (currentInstance) {
      let key = '$' + cursor;
      currentInstance.effects[key] = effect;
      cursor++;
    }
  }

  const HOST = 'host';
  const HOOK = 'hook';
  const ROOT = 'root';

  const PLACE = 1;
  const DELETE = 2;
  const UPDATE = 3;

  const ENOUGH_TIME = 1;

  const updateQueue = [];
  let nextUnitOfWork = null;
  let pendingCommit = null;
  let currentInstance = null;

  function render(vdom, el) {
    updateQueue.push({
      from: ROOT,
      dom: el,
      newProps: { children: vdom }
    });
    requestIdleCallback(performWork);
  }

  function scheduleUpdate(instance, k, v) {
    instance.state[k] = v;
    updateQueue.push({
      from: HOOK,
      instance,
      state: instance.state
    });
    requestIdleCallback(performWork);
  }

  function performWork(deadline) {
    workLoop(deadline);
    if (nextUnitOfWork || updateQueue.length > 0) {
      requestIdleCallback(performWork);
    }
  }

  function workLoop(deadline) {
    if (!nextUnitOfWork) {
      resetNextUnitOfWork();
    }
    while (nextUnitOfWork && deadline.timeRemaining() > ENOUGH_TIME) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }
    if (pendingCommit) {
      commitAllWork(pendingCommit);
    }
    commitEffects(currentInstance.effects);
  }

  function commitEffects(effects) {
    Object.keys(effects).forEach(key => {
      let effect = effects[key];
      effect();
    });
  }

  function resetNextUnitOfWork() {
    const update = updateQueue.shift();
    if (!update) {
      return
    }

    if (update.state) {
      update.instance.__fiber.state = update.state;
    }
    const root =
      update.from == ROOT
        ? update.dom._rootContainerFiber
        : getRoot(update.instance.__fiber);

    nextUnitOfWork = {
      type: ROOT,
      base: update.dom || root.base,
      props: update.newProps || root.props,
      alternate: root
    };
  }

  function getRoot(fiber) {
    let node = fiber;
    while (node.parent) {
      node = node.parent;
    }
    return node
  }

  function performUnitOfWork(wipFiber) {
    beginWork(wipFiber);
    if (wipFiber.child) {
      return wipFiber.child
    }
    let uow = wipFiber;
    while (uow) {
      completeWork(uow);
      if (uow.sibling) {
        return uow.sibling
      }
      uow = uow.parent;
    }
  }

  function beginWork(wipFiber) {
    if (wipFiber.type == HOOK) {
      updateHOOKComponent(wipFiber);
    } else {
      updateHostComponent(wipFiber);
    }
  }

  function updateHostComponent(wipFiber) {
    if (!wipFiber.base) {
      wipFiber.base = createElement(wipFiber);
    }

    const newChildren = wipFiber.props.children;
    reconcileChildren(wipFiber, newChildren);
  }

  function updateHOOKComponent(wipFiber) {
    let instance = wipFiber.base;
    if (instance == null) {
      instance = wipFiber.base = createInstance(wipFiber);
    } else if (wipFiber.props == instance.props && !wipFiber.state) {
      cloneChildFibers(wipFiber);
    }
    instance.props = wipFiber.props || {};
    instance.state = wipFiber.state || {};
    instance.effects = wipFiber.effects || {};
    currentInstance = instance;
    resetCursor();
    const newChildren = wipFiber.tag(wipFiber.props);
    reconcileChildren(wipFiber, newChildren);
  }

  function arrify(val) {
    return val == null ? [] : Array.isArray(val) ? val : [val]
  }

  function reconcileChildren(wipFiber, newChildren) {
    const elements = arrify(newChildren);

    let index = 0;
    let oldFiber = wipFiber.alternate ? wipFiber.alternate.child : null;
    let newFiber = null;
    while (index < elements.length || oldFiber != null) {
      const prevFiber = newFiber;
      const element = index < elements.length && elements[index];
      const sameTag = oldFiber && element && element.tag == oldFiber.tag;

      if (sameTag) {
        newFiber = {
          tag: oldFiber.tag,
          type: oldFiber.type,
          base: oldFiber.base,
          props: element.props,
          parent: wipFiber,
          alternate: oldFiber,
          state: oldFiber.state,
          effectTag: UPDATE
        };
      }

      if (element && !sameTag) {
        newFiber = {
          tag: element.tag,
          type: typeof element.tag === 'string' ? HOST : HOOK,
          props: element.props,
          parent: wipFiber,
          effectTag: PLACE
        };
      }

      if (oldFiber && !sameTag) {
        oldFiber.effectTag = DELETE;
        wipFiber.effects = wipFiber.effects || [];
        wipFiber.effects.push(oldFiber);
      }

      if (oldFiber) {
        oldFiber = oldFiber.sibling;
      }

      if (index == 0) {
        wipFiber.child = newFiber;
      } else if (prevFiber && element) {
        prevFiber.sibling = newFiber;
      }

      index++;
    }
  }

  function createInstance(fiber) {
    const instance = new fiber.tag(fiber.props);
    instance.__fiber = fiber;
    return instance
  }

  function cloneChildFibers(parentFiber) {
    const oldFiber = parentFiber.alternate;
    if (!oldFiber.child) {
      return
    }

    let oldChild = oldFiber.child;
    let prevChild = null;
    while (oldChild) {
      const newChild = {
        tag: oldChild.tag,
        type: oldChild.type,
        base: oldChild.base,
        props: oldChild.props,
        state: oldChild.state,
        alternate: oldChild,
        parent: parentFiber
      };
      if (prevChild) {
        prevChild.sibling = newChild;
      } else {
        parentFiber.child = newChild;
      }
      prevChild = newChild;
      oldChild = oldChild.sibling;
    }
  }

  function completeWork(fiber) {
    if (fiber.type == HOOK) {
      fiber.base.__fiber = fiber;
    }

    if (fiber.parent) {
      const childEffects = fiber.effects || [];
      const thisEffect = fiber.effectTag != null ? [fiber] : [];
      const parentEffects = fiber.parent.effects || [];
      fiber.parent.effects = parentEffects.concat(childEffects, thisEffect);
    } else {
      pendingCommit = fiber;
    }
  }

  function commitAllWork(fiber) {
    fiber.effects.forEach(f => {
      commitWork(f);
    });
    fiber.base._rootContainerFiber = fiber;
    nextUnitOfWork = null;
    pendingCommit = null;
  }

  function commitWork(fiber) {
    if (fiber.type == ROOT) {
      return
    }

    let domParentFiber = fiber.parent;
    while (domParentFiber.type == HOOK) {
      domParentFiber = domParentFiber.parent;
    }
    const domParent = domParentFiber.base;

    if (fiber.effectTag == PLACE && fiber.type == HOST) {
      domParent.appendChild(fiber.base);
    } else if (fiber.effectTag == UPDATE) {
      updateProperties(fiber.base, fiber.alternate.props, fiber.props);
    } else if (fiber.effectTag == DELETE) {
      commitDELETE(fiber, domParent);
    }
  }

  function commitDELETE(fiber, domParent) {
    let node = fiber;
    while (true) {
      if (node.type == HOOK) {
        node = node.child;
        continue
      }
      domParent.removeChild(node.base);
      while (node != fiber && !node.sibling) {
        node = node.parent;
      }
      if (node == fiber) {
        return
      }
      node = node.sibling;
    }
  }

  exports.h = h;
  exports.render = render;
  exports.useState = useState;
  exports.useReducer = useReducer;
  exports.useEffect = useEffect;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./style.css");

var _fre = require("fre");

function App() {
  return (0, _fre.h)("div", {
    class: "container"
  }, (0, _fre.h)(Left, null), (0, _fre.h)(Right, null));
}

function Left() {
  return (0, _fre.h)("div", {
    class: "left"
  }, (0, _fre.h)("div", {
    class: "logo"
  }, (0, _fre.h)("img", {
    src: "https://tvax4.sinaimg.cn/crop.0.78.1422.1422.180/0065Zy9ely8fve0dvwdwnj31401z4b29.jpg"
  }), (0, _fre.h)("div", {
    class: "name"
  }, (0, _fre.h)("h1", null, " \u8D75\u660C\u6D69 "), (0, _fre.h)("h3", null, "\u6C42\u804C\u610F\u5411\uFF1Aweb \u524D\u7AEF")), (0, _fre.h)("div", {
    class: "info"
  }, (0, _fre.h)("ul", null, (0, _fre.h)("li", null, (0, _fre.h)("i", {
    class: "iconfont icon-rili"
  }), "\u751F\u65E5\uFF1A1998-11-22"), (0, _fre.h)("li", null, (0, _fre.h)("i", {
    class: "iconfont icon-weizhi"
  }), "\u7C4D\u8D2F\uFF1A\u5C71\u4E1C\u9AD8\u5BC6"), (0, _fre.h)("li", null, (0, _fre.h)("i", {
    class: "iconfont icon-dianhua"
  }), "\u7535\u8BDD\uFF1A18593996744"), (0, _fre.h)("li", null, (0, _fre.h)("i", {
    class: "iconfont icon-youxiang"
  }), "\u90AE\u7BB1\uFF1A1533540012@qq.com"))), (0, _fre.h)("div", {
    class: "link"
  }, (0, _fre.h)("h2", null, "\u4F5C\u54C1\u94FE\u63A5"), (0, _fre.h)("ul", null, (0, _fre.h)("li", null, (0, _fre.h)("i", {
    class: "iconfont icon-github"
  }), (0, _fre.h)("a", {
    href: "https://github.com/132yse",
    target: "_blank"
  }, "\u5F00\u6E90\u4F5C\u54C1")), (0, _fre.h)("li", null, (0, _fre.h)("i", {
    class: "iconfont icon-lofter"
  }), (0, _fre.h)("a", {
    href: "http://caowoa.lofter.com",
    target: "_blank"
  }, "\u8BBE\u8BA1\u4F5C\u54C1"))))));
}

function Right() {
  return (0, _fre.h)("div", {
    class: "right"
  }, (0, _fre.h)("section", {
    class: "section"
  }, (0, _fre.h)("h1", null, (0, _fre.h)("i", {
    class: "iconfont icon-jiaoyu"
  }), "\u6821\u56ED\u5B9E\u8DF5"), (0, _fre.h)("p", null, (0, _fre.h)("h3", null, "2016.09\u2014\u20142020.06 \u5317\u6D77\u827A\u672F\u8BBE\u8BA1\u5B66\u9662 \u52A8\u753B\u4E13\u4E1A \u4E8C\u672C"), (0, _fre.h)("ul", null, (0, _fre.h)("li", null, "2016 \u5E74\u52A0\u5165 \xB7\u5E73\u884C\u4E16\u754C\u5DE5\u4F5C\u5BA4\xB7"), (0, _fre.h)("li", null, "2017 \u5E74\uFF0C\u53C2\u4E0E\u5236\u4F5C\u7684\u300A\u7435\u7436\u884C\u300B\u3001\u300A\u79BB\u9A9A\u300B\u7B49\uFF0C\u591A\u6B21\u70ED\u641C\uFF0C\u8363\u767B\u73AF\u7403\u65F6\u62A5\u3001\u4EBA\u6C11\u65E5\u62A5\u7B49\u5404\u5927\u62A5\u520A"), (0, _fre.h)("li", null, "2018 \u5E74\uFF0C\u300A\u900D\u9065\u6E38\u300B\u53D1\u5E03\uFF0C\u300A\u7435\u7436\u884C\u300B\u8363\u767B\u592E\u89C6\uFF0C\u7531\u65B9\u9526\u9F99\u5148\u751F\u594F\u4E50\uFF0C\u4EFB\u5609\u4F26\u7FFB\u5531")))), (0, _fre.h)("section", {
    class: "section"
  }, (0, _fre.h)("h1", null, (0, _fre.h)("i", {
    class: "iconfont icon-gongzuoliu"
  }), "\u9879\u76EE\u7ECF\u9A8C"), (0, _fre.h)("p", null, (0, _fre.h)("h3", null, "2018.06\u2014\u2014 clicli\u5F39\u5E55\u7F51\uFF08c\u7AD9\uFF09 \u4E2A\u4EBA\u9879\u76EE"), (0, _fre.h)("ul", null, (0, _fre.h)("li", null, "\u5168\u6808\uFF0CB \u7AEF vue \uFF0CC \u7AEF react\uFF0C\u540E\u7AEF golang + node"), (0, _fre.h)("li", null, "\u6211\u7684\u5F00\u6E90\u9879\u76EE smox\u3001fre\u3001ep \u7B49\uFF0C\u90FD\u5F97\u5230\u4E86\u5927\u89C4\u6A21\u5E94\u7528"))), (0, _fre.h)("p", null, (0, _fre.h)("h3", null, "2017.06\u2014\u20142017.08 \u5317\u4EAC\u65E0\u7EF4\u79D1\u6280 web \u524D\u7AEF"), (0, _fre.h)("ul", null, (0, _fre.h)("li", null, "vue \u6808\uFF0C\u8D1F\u8D23\u5F00\u53D1\u300A\u5FAE\u4FE1\u7F16\u8F91\u5668\u300B\uFF0C\u53C2\u8003\u6709\u8D5E\u3001\u79C0\u7C73"))), (0, _fre.h)("p", null, (0, _fre.h)("h3", null, "2018.06\u2014\u20142018.08 \u5317\u4EAC\u5448\u5929\u6E38\u620F web \u524D\u7AEF"), (0, _fre.h)("ul", null, (0, _fre.h)("li", null, "react \u6808\uFF0C\u8D1F\u8D23 pwa \u76F8\u5173"), (0, _fre.h)("li", null, "\u7A9D\u7684\u5F00\u6E90\u9879\u76EE smox \u5F97\u5230\u5E94\u7528\uFF0C\u914D\u5408\u91CD\u6784\uFF0C\u4F7F\u539F\u9879\u76EE\u66F4\u6613\u7EF4\u62A4")))), (0, _fre.h)("section", {
    class: "section"
  }, (0, _fre.h)("h1", null, (0, _fre.h)("i", {
    class: "iconfont icon-github"
  }), "\u5F00\u6E90\u8D21\u732E"), (0, _fre.h)("p", null, (0, _fre.h)("h3", null, "fre.js - \u53C8\u4E00\u4E2A\u5C0F\u800C\u7F8E\u7684\u524D\u7AEF AOP \u6846\u67B6"), (0, _fre.h)("ul", null, (0, _fre.h)("li", null, "\u53D7 react hooks API \u542F\u53D1\uFF0Cfre \u662F\u53EA\u6709 hooks \u7684 AOP \u6846\u67B6"), (0, _fre.h)("li", null, "\u4E16\u4E0A\u5C11\u6709\u7684 fiber \u8C03\u5EA6\u7684\u6846\u67B6\uFF0Cfre \u7684 fiber \u5B9E\u73B0\u4E5F\u662F\u6700\u5C0F\u800C\u7F8E\u7684"), (0, _fre.h)("li", null, "\u60A8\u73B0\u5728\u6240\u770B\u5230\u7684\u7B80\u5386\uFF0C\u5C31\u662F\u57FA\u4E8E fre \u6784\u5EFA\u7684"))), (0, _fre.h)("p", null, (0, _fre.h)("h3", null, "smox - react \u72B6\u6001\u7BA1\u7406\u9876\u7EA7\u8BBE\u8BA1"), (0, _fre.h)("ul", null, (0, _fre.h)("li", null, "smox \u662F react \u72B6\u6001\u7BA1\u7406\u9876\u7EA7\u8BBE\u8BA1\uFF0C\u5B83\u7684\u5C01\u88C5\u6781\u4E3A\u7CBE\u5DE7\u5374\u5F3A\u5927"), (0, _fre.h)("li", null, "\u72EC\u521B path \u673A\u5236\uFF0C\u80FD\u591F\u7CBE\u51C6\u3001\u6700\u5C0F\u7684\u66F4\u65B0\u72B6\u6001"), (0, _fre.h)("li", null, "\u652F\u6301\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F setData \u65F6\u4F20\u5165\u7684 path"))), (0, _fre.h)("p", null, (0, _fre.h)("h3", null, "eplayer - \u9762\u5411\u672A\u6765\u7684\u89C6\u9891\u64AD\u653E\u5668"), (0, _fre.h)("ul", null, (0, _fre.h)("li", null, "eplayer \u662F\u57FA\u4E8E web-component \u7684\u89C6\u9891\u64AD\u653E\u5668"), (0, _fre.h)("li", null, "\u5929\u751F\u81EA\u5E26 shadow-dom \u548C scoped css\uFF0C\u53EF\u4EE5\u4F7F\u5F97\u64AD\u653E\u5668\u63A5\u5165\u7F51\u7AD9\u800C\u4E0D\u53D7\u5916\u754C\u73AF\u5883\u5E72\u6270")))), (0, _fre.h)("section", {
    class: "section"
  }, (0, _fre.h)("h1", null, (0, _fre.h)("i", {
    class: "iconfont icon-gongju"
  }), "\u4E13\u4E1A\u6280\u80FD"), (0, _fre.h)("ul", {
    class: "common"
  }, (0, _fre.h)("li", null, (0, _fre.h)("span", null, "\u5F00\u53D1\uFF1A"), "\u719F\u7EC3 vue\u3001react\u3001node\u3001golang \u7B49\u6280\u672F\u6808"), (0, _fre.h)("li", null, (0, _fre.h)("span", null, "\u8BBE\u8BA1\uFF1A"), "\u719F\u7EC3\u4F7F\u7528 ps\u3001ae\u3001maya \u7B49\u8BBE\u8BA1\u8F6F\u4EF6"), (0, _fre.h)("li", null, (0, _fre.h)("span", null, "\u6E90\u7801\uFF1A"), "\u719F\u6089 preact \u6E90\u7801\uFF0C\u4E86\u89E3 vue\u3001react \u90E8\u5206\u6E90\u7801"), (0, _fre.h)("li", null, (0, _fre.h)("span", null, "\u5F00\u6E90\uFF1A"), "\u53C2\u4E0E Omi\uFF08\u817E\u8BAF\u524D\u7AEF\u6846\u67B6\uFF09\u3001gatsby\uFF08facebook\uFF09\u7B49\u5F00\u6E90\u9879\u76EE"))), (0, _fre.h)("section", {
    class: "section"
  }, (0, _fre.h)("h1", null, (0, _fre.h)("i", {
    class: "iconfont icon-pingjia"
  }), "\u81EA\u6211\u8BC4\u4EF7"), (0, _fre.h)("ul", {
    class: "common"
  }, (0, _fre.h)("li", null, (0, _fre.h)("span", null, "\u70ED\u7231\u5F00\u6E90"), "\uFF0C\u559C\u6B22\u524D\u7AEF\u57FA\u7840\u5EFA\u8BBE\uFF0C\u4E5F\u4E00\u76F4\u4E3A\u6B64\u800C\u52AA\u529B\uFF0C\u540C\u65F6\u5199\u5927\u91CF\u4E1A\u52A1\u652F\u6491\u57FA\u5EFA"), (0, _fre.h)("li", null, "\u6027\u683C\u4E0A\u6BD4\u8F83\u8131\u7EBF\uFF0C\u8FD8\u4E0D\u591F\u4E25\u8C28\uFF0C\u4ECD\u9700\u4E0D\u65AD\u4FEE\u70BC\u3002\u4F46\u5BF9\u5F85\u6280\u672F\u8BA4\u771F\uFF0C\u6709\u9760\u8C31\u7684\u5224\u65AD\u529B\uFF0C\u4F1A", (0, _fre.h)("span", null, "\u6309\u9700"), "\u505A\u51FA\u59A5\u534F\u4E0E\u8C03\u6574"), (0, _fre.h)("li", null, "\u6211\u4E0D\u592A\u7231\u94B1\uFF0C\u6709\u8D85\u5F3A\u7684", (0, _fre.h)("span", null, "\u71AC\u591C"), "\u80FD\u529B"))));
}

(0, _fre.render)((0, _fre.h)(App, null), document.getElementById('root'));
},{"./style.css":"style.css","fre":"node_modules/fre/dist/fre.js"}],"C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64280" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/fre-resume.e31bb0bc.map