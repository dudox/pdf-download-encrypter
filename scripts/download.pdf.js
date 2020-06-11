let fn = (function () {
  return {
    main: function () {},
    generateKey: function () {
      let key = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = 6;
      for (var i = 0; i < charactersLength; i++) {
        key += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return key;
    },
  };
})();
