(function () {
  let BMap = window.BMapGL || window.BMap;

  const _rd = new Proxy({}, {
    set: function (target, prop, value) {
      if (/_cbk/.test(prop)) {
        return false;
      }
      return Reflect.set(target, prop, value);
    },
  });
  if (BMap) {
    BMap._rd = _rd;
  }
  const descriptor = {
    get() {
      return BMap;
    }, set(value) {
      BMap = value;
      Object.defineProperty(BMap, "_rd", {
        value: _rd,
      });
    },
  }
  Object.defineProperties(window, {
    "BMap": descriptor, "BMapGL": descriptor,
  });
})();
