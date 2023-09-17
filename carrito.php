<?php 
    session_start();

    if(!isset($_SESSION['usuario'])){
        echo'
        <script>
            alert("Se requiere iniciar session para esta accion")
            window.location = "loginRegister.php"
        </script>        
        ';
        session_destroy();
        die();
    }
   
  
?> 