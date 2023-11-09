(function () {
  let BMapGL = window.BMapGL;
  window.__BMapCracked = false;
  const _rd = new Proxy(
    {},
    {
      set: function (target, prop, value) {
        if (window.__BMapCracked) {
          return Reflect.set(target, prop, value);
        }
        if (/未获得百度地图商用授权/.test(value.toString())) {
          window.__BMapCracked = true;
        }
        return false;
      },
    },
  );
  
  if (BMapGL) {
    BMapGL._rd = _rd;
  }
  
  Object.defineProperty(window, "BMapGL", {
    get() {
      return BMapGL;
    },
    set(value) {
      BMapGL = value;
      if (!BMapGL._rd) {
        Object.defineProperty(BMapGL, "_rd", {
          value: _rd,
        });
      }
    },
  });
})();
