<?php 
function gcd($a, $b) {
	if ($a>$b) {
   $r = $a % $b;
   echo "$r<br>";
   if ($r !== 0) {
   	$a = $b;
   	$b = $r;
   	gcd($a, $b);
   } return $b;
   } 
 

}
$result = gcd(20, 8);
echo "Greatest common denominator is " . "$result";
 ?>