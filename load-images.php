<?php
$folder = 'gallery/action';
$images = array();

$allowed_ext = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

foreach (scandir($folder) as $file) {
    $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    if (in_array($ext, $allowed_ext)) {
        $images[] = $folder . $file;
    }
}

echo json_encode($images);
?>
