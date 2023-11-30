<?php
$myfile = fopen("leaderboard.txt", "r");
$x = 1;
echo "<html> <head> <link rel='icon' href='icon.png'> <style> #element { background-color: black; position: fixed} .textBox { background-color: black; border-style: solid; border-width: 5px; border-color: #4EE2EC; text-align: center; } .playerText { color: red; font-family: 'Arial';} .killsText { color: #4EE2EC; font-family: 'Arial';} #exit {background-color: red; text-align: center; border-color: white; border-width: 5px; border-style: solid;} #exitText {color: white; font-family: 'Arial';} body { background-color: black; } </style> </head> <body onload='load()'> <center>";
while(!feof($myfile)) {
	if($x % 2 != 0) {
		echo "<div class='spaceBox'></div>";
		echo "<div class='textBox'>";
		echo "<p class='playerText'>Player:" . " " . fgets($myfile) . "</p>";
	} else {
		echo "<p class='killsText'>Kills:" . " " . fgets($myfile) . "</p>";
		echo "</div>";
	}
	$x+=1;
}
echo "<div class='spaceBox'></div> <div id='exit' onclick='exit()'><p id='exitText' onclick='exit()'>Click Here To Exit</p></div> <div class='spaceBox'></div> <canvas id='element' class='button'></canvas> </center> <script type='text/javascript' src='leaderboard.js'></script> </body> </html>";
fclose($myfile);
exit;
?>