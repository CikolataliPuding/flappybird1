window.fb = {
  get: (key) => {
    try { return window.localStorage.getItem(key) ?? ""; } catch { return ""; }
  },
  set: (key, value) => {
    try { window.localStorage.setItem(key, value ?? ""); } catch { }
  }
};

