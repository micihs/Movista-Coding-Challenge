<?php

/**
 * Takes a String as input and returns the first longest word.
 * @param mixed $string
 * @return string
 */
function first_longest_word($string) {
    $rawStr = preg_replace('/[^a-z\d ]/i', '', $string);
    $strArr = explode(' ', $rawStr);
    $lrgWrd = '';
    for ($i = 0; $i < count($strArr); $i++) {
        if (strlen($strArr[$i]) > strlen($lrgWrd)) {
            $lrgWrd = $strArr[$i]; //update the reference
        }
    }
    return $lrgWrd;
}

echo first_longest_word("what is the best way to eat an elephant? Many small bites!");
//should return elephant as the first longest word

?>