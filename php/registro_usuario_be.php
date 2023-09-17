<?php

    session_start();

    include 'conexion_be.php';

    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];


    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        echo '
            <script>
                alert("El correo electrónico proporcionado no es válido")
                window.location = "../loginRegister.php"
            </script>
        ';
        exit();
    }

    if (strlen($contrasena) < 8) {
        echo '
            <script>
                alert("La contraseña debe tener al menos 8 caracteres")
                window.location = "../loginRegister.php"
            </script>
        ';
        exit();
    }

    if (strlen($usuario) < 6 || !preg_match('/^[a-zA-Z]/', $usuario)) {
        echo '
            <script>
                alert("El nombre de usuario debe tener al menos 6 caracteres y no debe empezar con un número")
                window.location = "../loginRegister.php"
            </script>
        ';
        exit();
    }

    //encriptar contrasena
    $contrasena = hash('sha512',$contrasena);

    $query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contrasena)
    VALUES('$nombre_completo','$correo','$usuario','$contrasena')";

    //verificar que el ecorreo no se repita en la base de datos
    $verificar_correo= mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo'");

    if(mysqli_num_rows($verificar_correo)>0){
        $_SESSION['usuario'] = $correo;
        echo'
            <script>
            alert("Este correo ya esta registrado, intenta con otro diferente")
            window.location = "../loginRegister.php"
        </script>
        ';
        exit();
    }

     //verificar que el usurio no se repita en la base de datos
     $verificar_usurio= mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$usuario'");

     if(mysqli_num_rows($verificar_usurio)>0){
         echo'
             <script>
             alert("Este usurio ya esta registrado, intenta con otro diferente")
             window.location = "../loginRegister.php"
         </script>
         ';
         exit();
     }
     


    $ejecutar = mysqli_query($conexion, $query);

    if($ejecutar){
        echo'
        <script>
            alert("Usuario creado exitosamente")
            window.location = "../index.php"
        </script>
        ';
    }else{
        echo'
        <script>
            alert("Inetentalo de nuevo, usuario no almacenado")
            window.location = "../loginRegister.php"
        </script>
        ';

    }

    mysqli_close($conexion);
?>