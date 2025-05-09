<?php
// Check if form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define recipient
    $to = "info@australianshepherds.co.za";
    
    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $message = htmlspecialchars(trim($_POST["message"]));
    $antispam = trim($_POST["antispam"]);

    $errors = [];

    // Validate fields
    if (empty($name) || empty($email) || empty($message)) {
        $errors[] = "Please fill in all required fields.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    // Anti-spam check: 3 + 4 = 7
    if ($antispam != "7") {
        $errors[] = "Anti-spam answer is incorrect.";
    }

    // If no errors, send email
    if (empty($errors)) {
        $subject = "New Contact Form Message from $name";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "<p style='color: green;'>Your message has been sent.</p>";
        } else {
            echo "<p style='color: red;'>Message sending failed. Please try again later.</p>";
        }
    } else {
        // Display errors
        foreach ($errors as $error) {
            echo "<p style='color: red;'>$error</p>";
        }
    }
}
?>
