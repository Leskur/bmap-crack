(function () {
  let BMapGL = window.BMapGL;

  const _rd = new Proxy(
    {},
    {
      set: function (target, prop, value) {
        if (
          /function\s?\(\w+\){\w+&&\w+\(\w+\);delete BMapGL._rd/i.test(
            value.toString()
          )
        ) {
          return false;
        }
        return Reflect.set(target, prop, value);
      },
    }
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
