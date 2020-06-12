let fn = (function () {
    return {
        main: function () {
            fn.download();
        },
        generateKey: function () {
            let key = "";
            const characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            const charactersLength = 6;
            for (var i = 0; i < charactersLength; i++) {
                key += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return key;
        },
        download: function () {
            $.validate({
                modules: "security",
                onSuccess: function () {
                    let id = document.getElementById("downloadForm");
                    let _data = new FormData(id);
                    _data.append("key", fn.generateKey());

                    var object = {};
                    _data.forEach(function (value, key) {
                        object[key] = value;
                    });
                    var json = JSON.stringify(object);

                    $.ajax({
                        type: "POST",
                        url: "http://book.trybemark.com:3000/download",
                        data: _data,
                        dataType: 'json',
                        processData: false,
                        contentType: false,
                        success: function (tx) {
                            fn.blobFile(tx.key);
                        },
                    });

                    return false;
                },
            });
        },
        blobFile: function(key){
            var req = new XMLHttpRequest();
            req.open("GET", "http://book.trybemark.com/protected.pdf", true);
            req.responseType = "blob";

            req.onload = function (event) {
                var blob = req.response;
                console.log(blob.size);
                var link=document.createElement('a');
                link.href=window.URL.createObjectURL(blob);
                link.download=key+".pdf";
                link.click();
            };

            req.send();
        }
    };
})();

fn.main();
