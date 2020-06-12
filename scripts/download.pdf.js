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
                    _data.append("key",fn.generateKey());

                    var object = {};
                    _data.forEach(function(value, key){
                        object[key] = value;
                    });
                    var json = JSON.stringify(object).replace(/\\"/g, '"')

                    $.ajax({
                        type: "POST",
                        dataType: 'json',
                        url: "http://trybemark.com:3000/download",
                        data: json,
                        processData: false,
                        success: function (tx) {},
                    });

                    return false;
                },
            });
        },
    };
})();

fn.main();
