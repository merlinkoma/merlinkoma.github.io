<?php
$title = 'Contact';
$style = 'contact';
include './doctype.php';
?>

<body>
    <h2>Me contacter</h2>
    <form action="" method="post">
        <label for="name">Nom</label>
        <input type="text" name="name" id="name" placeholder="Marie">
        
        <label for="firstname">Prénom</label>
        <input type="text" name="firstname" id="firstname" placeholder="Martin">
        
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="mariemartin@gmail.com">
        
        <label for="subject">Sujet</label>
        <input type="subject" name="subject" id="subject" placeholder="Demande d'informations">
        
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>

        <button>Envoyer</button>
    </form>
</body>