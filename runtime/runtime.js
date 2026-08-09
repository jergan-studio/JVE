// JVE browser runtime helpers.
(function (global) {
  const JVE = {
    html(html) {
      document.body.insertAdjacentHTML('beforeend', html);
    },

    js(code) {
      return Function(code)();
    },

    async get(url) {
      const response = await fetch(url);
      const type = response.headers.get('content-type') || '';
      if (type.includes('application/json')) return response.json();
      return response.text();
    },

    inject(url) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
  };

  global.JVE = JVE;
})(window);
