$(document).ready(function () {
    $('#on-btn').click(function () {
        var address = $("#broker_input").val()
		client = mqtt.connect(address);
    });
    client.on("message", function(topic,payload){
        $topic('devices').val();
        $
    })

    $("#off-btn").click(function () {
        var topic = $("#topic").val();
		var payload = $("#message").val();

        var row = $("<tr>").attr("", "");
        $("<td>").text(topic).appendTo($(row));
        $("<td>").text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row));
        $("#tbl-body-sub").append($(row));

    })
}