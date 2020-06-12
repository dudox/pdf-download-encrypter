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
                            fn.blobFile(tx.file_name);
                        },
                    });

                    return false;
                },
            });
        },
        blobFile: function(name){
            location.href ="http://book.trybemark.com/encrypted_zip_files/"+name+".zip";
        }
    };
})();

fn.main();
