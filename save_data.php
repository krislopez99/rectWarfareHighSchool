<?php
$myfile = fopen("leaderboard.txt", "a");
$name = $_GET["name"];
$round = $_GET["round"];
fwrite($myfile, "\n" . $name);
fwrite($myfile, "\n" . $round);
fclose($myfile);
header("Location: sort_board.php");
exit;
?>