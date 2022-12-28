<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> LOGIN | WEB DREAMER </title>
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="../logo/logo.css">
        <link rel="icon" href="../logo/icon.PNG">
        <script src="https://cdn.jsdelivr.net/npm/webauthn-simple-app/dist/webauthn-simple-app.umd.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script  src="./script.js"></script>
    </head>
    <body>
        <section class="forms-section">
            <div class="div-logo">
                <img src="../logo/logo.PNG" class="logo">
                <h1 class="section-title">Web Dreamer</h1>
            </div>
            <div class="forms">
                <div class="form-wrapper is-active">
                    <button type="button" class="switcher switcher-login" id="login">
                        Login
                        <span class="underline"></span>
                    </button>
                    <form class="form form-login" id="form-login" action="../creation_project/index.php" method="POST">
                        <fieldset>
                            <div class="input-block">
                                <label for="login-email">E-mail</label>
                                <input id="login-email" type="email" name="email" required>
                            </div>
                            <div class="input-block" style="margin-bottom: 5px;">
                                <label for="login-password">Password</label>
                                <input id="login-password" type="password" name="password" required>
                            </div>
                            <div id="message-login-div">
                                <?php 
                                if (isset($_POST['error_msg'])){
                                    echo '<p id="message-login" class="message">';
                                    echo $_POST['error_msg'];
                                    echo '</p>';
                                    echo "<script>$('#message-login').css('color', 'red')</script>";
                                }
                                    
                                ?>
                            </div>
                        </fieldset>
                        <button id="btn-login" type="submit" class="btn-login">Login</button>
                    </form>
                </div>
                <div class="form-wrapper">
                    <button type="button" class="switcher switcher-signup" id="signup">
                        Sign Up
                        <span class="underline"></span>
                    </button>
                    <form  id="form-signup" class="form form-signup">
                        <fieldset>
                            <div class="input-block">
                                <label for="signup-email">E-mail</label>
                                <input id="signup-email" type="email" name="email" required>
                            </div>
                            <div class="input-block">
                                <label for="signup-password">Password</label>
                                <input id="signup-password" type="password" name="password" required>
                            </div>
                            <div class="input-block" style="margin-bottom: 5px;">
                                <label for="signup-password-confirm">Confirm password</label>
                                <input id="signup-password-confirm" type="password" name="password-confirm" required>
                            </div>
                            <div>
                                <p id="message-signup" class="message"></p>
                            </div>
                        </fieldset>
                        <button id="btn-signup" type="submit" class="btn-signup">Continue</button>
                    </form>
                </div>
            </div>
        </section>
    </body>
</html>
