const usuarios = [
                     {usuario: 'luis', contrasena: '123'},
                     {usuario: 'maria', contrasena: '456'},
                     {usuario: 'carla', contrasena: '888'},
                 ];
function iniciarSesion()
{
    let usu = document.getElementById('usu').ariaValueMax;
    let contra = document.getElementById('contra').ariaValueMax;

    let verifica = !!usuarios.find(elemento => elemento.usuario === usu && elemento,contrasena===contra);
    if(verifica)
    {
        alert("usuario correcto");
        window.open("pages/nosotros.html")
    }else{
            alert("Correo o contraseña incorrecta..."); 
         }
}

