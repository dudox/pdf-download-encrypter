<<<<<<< HEAD
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
=======
let fn = (function(){
    return {
        main: function (){
            fn.download();
        },

        download: function(){
            $.validate( {
                modules: 'security',
                onSuccess: function(){
                    let id = document.getElementById("downloadForm");
                    let _data = new FormData(id);

                    $.ajax({
                        type: 'POST',
                        url: window.location.href,
                        data: _data,
                        processData: false,
                        contentType: false,
                        success: function(tx){
                            
                        }
                    })

                    return false;
                }

            })
        }
    }
})();

fn.main();
>>>>>>> 66d2685ed31e42164a8281413d9a2ba4d73cd3bd
