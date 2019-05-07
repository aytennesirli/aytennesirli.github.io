var DATA_URL = "https://jsonplaceholder.typicode.com/users"
var datas = ["name", "username", "phone", "address"];

$(document).ready(function (e) {
    $.ajax({
        url: DATA_URL,
        method: "GET",
        contentType: "application/json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                console.log( data[i].name.username);
                $("tbody").append("<tr><td>" + data[i].name + "</td><td>" + data[i].username + "</td><td>  "+  data[i].address.suite +" </td><td>"+data[i].phone+"</td> </tr>")

            };
            
        },
        error: function (xhr, err, msg) {
            console.log(xhr, err, msg)
        }

    })
})

