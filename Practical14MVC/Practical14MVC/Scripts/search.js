$(document).ready(function () {
    GetEmployee();
    $("#txtsearch").keyup(function () {
        GetEmployee();
    });
});

function GetEmployee() {
    var EmployeeName = $.trim($("#txtsearch").val());
    $.ajax({
        type: "POST",
        url: "/Employees/searchemp",
        data: "{EmpName:'" +EmployeeName + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (model) {
            var table = $("#tblemployee");
            table.find("tr:not(:first)").remove();
            $.each(model, function (i, Emp) {
                var table = $("#tblemployee");
                var row = table[0].insertRow(-1);
                $(row).append("<td />");
                $(row).find("td").eq(0).html(Emp.Name);
                $(row).append("<td />");
                $(row).find("td").eq(1).html(Emp.DOB);
                $(row).append("<td />");
                $(row).find("td").eq(2).html(Emp.Age);

            });
        }
    });
}