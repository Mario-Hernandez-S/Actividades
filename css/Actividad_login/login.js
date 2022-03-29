function setLogin(){
    try {
        var user1 = document.getElementById("typeInputUsuario1").value;
        var password1 = document.getElementById("typeInputPassword1").value;
        var usuario = "mac";
        var password = "2022";

        if(user1 == usuario && password1 == password){
            alert("Bienvenido");
        }
        else{
            alert("Usuario y/o contraseña incorrectos")
        }

    } catch (error) {
        console.log(error)
    }
}