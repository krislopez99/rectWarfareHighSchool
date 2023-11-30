<?php
$myfile = fopen("leaderboard.txt", "r");
$playerHold;
$killsHold;
$x = 1;
while(!feof($myfile)) {
	if($x % 2 != 0) {
		$playerHold = fgets($myfile);
	} else {
		$killsHold = fgets($myfile);
	}
	if($x % 2 == 0) {
		$leaderboard[$playerHold] = intval($killsHold);
	}
	$x+=1;
}
arsort($leaderboard);
fclose($myfile);

$x = 1;
$myfile = fopen("leaderboard.txt", "w");
foreach($leaderboard as $player => $kills) {
	if($x != sizeof($leaderboard)) {
		fwrite($myfile, $player);
		fwrite($myfile, $kills . "\n");
	} else {
		fwrite($myfile, $player);
		fwrite($myfile, $kills);
	}
	$x+=1;
}
fclose($myfile);
header ("Location: http://localhost");
exit;
?>