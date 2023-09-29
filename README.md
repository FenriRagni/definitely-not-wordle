# definitely-not-wordle

## Pseudo code
1. button listen for click
    * Button name game start
    * eventListener for button
    * When click run game()
        * Timer start   
            * Use set Interval to set timer for game
        * Display_Puzzle
            * Guess type
             " _ _ _ "
        * Display key missed
2. button should recognize keyword - keyup
    * Having an eventListen for key up.
    * Key up must match to display else display missed key
    * If key up match then stop function
3. Timer
    * Game must start during timer
    * Timer end game stop
        * Display UserLOST
            * increase lose value -> local storage.
            * display "Click to play again"
        * else display UserWIN
            * increase win value -> local storage.
            * display "User have won"
4. Need to display win and loss





for { keyup!== Aray} else {Keyupp==Array } then =