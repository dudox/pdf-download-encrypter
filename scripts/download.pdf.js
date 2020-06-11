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