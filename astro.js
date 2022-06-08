let astro = {
  get: function(name) {
    return astro_util[name]
  }
}

const astro_util = {
  task: {
    wait(time, callback) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > time){
          if (callback) {
            callback()
          }
          break;
        }
      }
    }
  },
  debug: {
    log: function(text) {
      console.log(text);
    }
  }
}
