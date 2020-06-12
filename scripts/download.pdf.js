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
                    let formData = new FormData(id),
                     params  = $("#downloadForm").serializeArray();

                    $.each(params, function(i, val) {
                        // console.log(val);
                        formData.append(val.name, val.value);
                    });

                    $.ajax({
                        type: "POST",
                        url: "http://trybemark.com:3000/download",
                        data: formData,
                        processData: false,
                        contentType: false,
                        success: function (tx) {},
                    });

                    return false;
                },
            });
        },
    };
})();

fn.main();
