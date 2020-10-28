$(document).ready(function(){
    $("#inicioLogoDVBtn").onclick(function(){
        var CPF = $("#txtCPF").val();
        CPF = CPF.replace("-", "");

        var urlStr ="http://localhost:8081/api/doandovidas/user/​​​​"+ CPF;​​​​​​​
        
        $.ajax({
            url :  urlStr,
            type : "get",
            dataType : "json",
            success : function(data){
                console.log(data);

                $("#name").val(data.name);
                $("#email").val(data.email);
                $("#cpf").val(data.cpf);
                $("#birthDate").val(data.birthDate);
                $("#gender").val(data.gender);
                $("#message").val(data.message);
                $("#video").val(data.video);

            }, 
            error : function(error){
            console.log(error);
            }
        });

    });

});


