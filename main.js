"use strict";

/* 
 * Note: we rely on existence of 'target_dictionary' const, which holds an array of words to set 
 * as the word to guess, and also a 'full_dictionary' const, which holds a much broader word array
 * of "real" words that can be accepted as a guess.\
 * 
 * Both of these dictionaries should be in all caps
 */

// dict utils
function check_valid_word(w) {
    // "full_dictionary" refers to global const holding entire wordlist
    return w in full_dictionary;
}
function todays_word() {
    // returns same word from dict for a given day
    // let a = new Date();
    // let offset = (a.getFullYear()*7 + a.getMonth()*584 + a.getDay()*1147) % Object.keys(target_dictionary).length;
    let offset = get_datekey() % Object.keys(target_dictionary).length;
    return Object.keys(target_dictionary)[offset];
}

// localstorage
function get_datekey() {
    let d = new Date();
    let day = 1000 * 60 * 60 * 24;
    // return `${d.getFullYear()}_${d.getMonth()}_${d.getDay()}`;
    return parseInt(d.valueOf() / day);
}
function save_gamestate_to_localstorage(gamestate) {
    localStorage.setItem(get_datekey(), JSON.stringify(gamestate));
}
function pull_gamestate_from_localstorage() {
    return JSON.parse(localStorage.getItem(get_datekey()));
}
function clear_localstorage() {
    localStorage.clear();
}

// interact with DOM
function handle_physical_keypress(ev) {
    handle_keypress(ev.key.toUpperCase());
    if (ev.key.toUpperCase() === 'ENTER') {
        console.log('catching enter');
        ev.stopPropagation();
        ev.preventDefault();
    }
}
function display_message(msg) {
    // 2500 ms delay to match 5chars * 500ms each for draw_word_submit(). ehh.
    window.setTimeout(() => {
        let m = document.getElementById("message");
        m.innerText = msg;
        m.classList.add('activemessage');
    }, 2500);
}
function draw_history(gamestate) {
    // find which guess we're on
    let guess_idx = gamestate.history.includes('') ? gamestate.history.indexOf('') : 6;
    let actual_word = gamestate.word;

    // loop through words w and characters c, enter letters and color classes
    for (let w=0; w<guess_idx; w++){
        for (let c=0; c<5; c++) {
            let letter = gamestate.history[w][c];
            let key = document.getElementById(letter);
            let cell = document.getElementById(`${w}${c}`);

            // put letter in cell
            cell.innerText = letter;

            // apply color class
            if (letter === actual_word[c]) {
                cell.classList.add('green');
                key.classList.replace('lightgrey', 'green');
                key.classList.replace('yellow', 'green');
            }
            else if (actual_word.includes(letter)) {
                cell.classList.add('yellow');
                key.classList.replace('lightgrey', 'yellow');
            }
            else {
                cell.classList.add('darkgrey');
                key.classList.replace('lightgrey', 'darkgrey');
            }  
        }
    }

    // enter letters of current guess
    for (let c=0; c<gamestate.guess.length; c++) {
        let cell = document.getElementById(`${guess_idx}${c}`);
        cell.innerText = gamestate.guess[c];
        cell.classList.add('filled');
    }
}
function draw_word_submit(gamestate) {
    // get current guess. indexOf finds first empty slot in history, represents current guess.
    // w=0 means first guess, w=5 means final guess.
    let guess_idx = gamestate.history.indexOf('');
    let guess_word = gamestate.guess;
    let actual_word = gamestate.word;

    // iterate over guess characters and reveal
    for (let c=0; c<5; c++) {
        let letter = guess_word[c];
        let key = document.getElementById(letter);
        let cell = document.getElementById(`${guess_idx}${c}`);

        window.setTimeout(()=>{
            // add color classes
            if (letter === actual_word[c]) {
                cell.classList.add('green');
                key.classList.replace('lightgrey', 'green');
                key.classList.replace('yellow', 'green');
            }
            else if (actual_word.includes(letter)) {
                cell.classList.add('yellow');
                key.classList.replace('lightgrey', 'yellow');
            }
            else {
                cell.classList.add('darkgrey');
                key.classList.replace('lightgrey', 'darkgrey');
            }

            cell.classList.remove('filled');

            // little jiggle
            turnover(cell);
        }, c * 500);
    }
}
function draw_letter(gamestate) {
    // find which guess we're on
    let guess_idx = gamestate.history.indexOf('');
    let char_idx = gamestate.guess.length - 1;
    if (guess_idx < 0) { return };

    // update DOM with character, class, and littler effect
    let cell = document.getElementById(`${guess_idx}${char_idx}`);
    cell.innerText = gamestate.guess[char_idx];
    cell.classList.add('filled');
    embiggen(cell);
}
function draw_backspace(gamestate) {
    // find which guess we're on
    let guess_idx = gamestate.history.indexOf('');
    let char_idx = gamestate.guess.length; // don't subtract--we just shortened guess with backspace
    if (guess_idx < 0) { return };

    let cell = document.getElementById(`${guess_idx}${char_idx}`);
    cell.innerText = '';
    cell.classList.remove('filled');
}
function embiggen(cell) {
    cell.classList.add("embiggen");
    window.setTimeout(()=>cell.classList.remove("embiggen"), 150);
}
function turnover(cell) {
    cell.classList.add("turnover");
    window.setTimeout(()=>cell.classList.remove("turnover"), 300);
}

// statistics functions
function populate_test_date() {
    //clear_localstorage();
    localStorage.setItem(19532, JSON.stringify({
        "word": "HELLO",
        "guess": "",
        "history": ['SERUM','SERUM','HELLO','','',''],
        "gameover": true,
        "won": true,
    }));

    localStorage.setItem(19531, JSON.stringify({
        "word": "SERUM",
        "guess": "",
        "history": ['FANGS','SERUM','','','',''],
        "gameover": true,
        "won": true,
    }));

    localStorage.setItem(19530, JSON.stringify({
        "word": "FANGS",
        "guess": "",
        "history": ['SERUM','GREED','GREED','FANGS','',''],
        "gameover": true,
        "won": true,
    }));

    localStorage.setItem(19529, JSON.stringify({
        "word": "FANGS",
        "guess": "",
        "history": ['SERUM','GREED','GREED','FANGS','',''],
        "gameover": true,
        "won": true,
    }));

    localStorage.setItem(19520, JSON.stringify({
        "word": "MOODY",
        "guess": "",
        "history": ['SERUM','GREED','','','',''],
        "gameover": false,
        "won": false,
    }));

    localStorage.setItem(19515, JSON.stringify({
        "word": "GREED",
        "guess": "",
        "history": ['SERUM','SERUM','SERUM','SERUM','SERUM','SERUM'],
        "gameover": true,
        "won": false,
    }));

    localStorage.setItem(19516, JSON.stringify({
        "word": "LORDS",
        "guess": "",
        "history": ['SERUM','GREED','GREED','FANGS','LORDS',''],
        "gameover": true,
        "won": true,
    }));

    localStorage.setItem(19517, JSON.stringify({
        "word": "WILLY",
        "guess": "",
        "history": ['SERUM','GREED','GREED','FANGS','WILLY',''],
        "gameover": true,
        "won": true,
    }));
}
function get_played() {
    return Object.values(localStorage)
        .map(v => JSON.parse(v))
        .filter(v => v.gameover)
        .reduce(prev => prev + 1, 0);
}
function get_win_percentage() {
    let frac = Object.values(localStorage)
        .map(v => JSON.parse(v))
        .filter(v => v.gameover)
        .reduce((prev, v) => {
            if (v.won){
                prev.wins += 1;
            } else {
                prev.losses += 1;
            }
            return prev;
        }, {wins: 0, losses: 0});

    return Math.round(100 * frac.wins / (frac.wins + frac.losses)) / 100;
}
function get_streak() {
    let streak = 0;
    let day = get_datekey();
    while(JSON.parse(localStorage.getItem(day))?.won) {
        streak++;
        day--;
    }
    return streak;
}
function get_max_streak() {
    return Object.entries(localStorage)
        .map(a => [a[0], JSON.parse(a[1])])
        .filter(a => a[1].won)
        .sort((a, b) => b[0] - a[0])
        .reduce((tr, a) => {
            // Coerce both datekeys to number type.
            // Single win = streak of one. Add to that for each match.
            if (a[0]-0 === tr.prev_a[0]-1) {
                tr.cur_streak += 1;
            } else {
                tr.cur_streak = 1;
            }

            // update max streak
            if (tr.cur_streak > tr.max_streak) {
                tr.max_streak = tr.cur_streak;
            }

            // save ref to this entry for next round comparison
            tr.prev_a = a;

            return tr;
        }, {max_streak: 0, cur_streak: 0, prev_a: [0, '']})
        .max_streak;
}
function get_guess_distribution() {
    return Object.entries(localStorage)
        .map(a => JSON.parse(a[1]))
        .filter(a => a.won)
        .reduce((di, a) => {
            let guesses = a.history.indexOf(a.word) + 1;
            di[guesses] += 1;
            return di;
        }, {1:0, 2:0, 3:0, 4:0, 5:0, 6:0});
}
function draw_statistics() {
    document.querySelector('#stats-played em').innerText = get_played();
    document.querySelector('#stats-win-percentage em').innerText = get_win_percentage();
    document.querySelector('#stats-streak em').innerText = get_streak();
    document.querySelector('#stats-max-streak em').innerText = get_max_streak();

    let dist = get_guess_distribution();
    let denom = Object.values(dist).reduce((mx,el) => el > mx ? el : mx);
    for (let i=1; i<=6; i++) {
        document.querySelector(`#guess-bar-${i}`).style["width"] = 100 * dist[i] / denom + '%';
    }
}

// Stateful functions that controls game flow
function handle_keypress(k) {
    // adds chosen key to current guess. Checks for backspace or submit

    let gamestate = pull_gamestate_from_localstorage();

    // if game is over, exit early
    if (gamestate.gameover) {
        return
    } 

    // handle word submit
    else if (k === 'ENTER') {
        if (gamestate.guess.length === 5 && check_valid_word(gamestate.guess)) {
            handle_submit();
        } else {
            // later should add little shake effect
        }
    }

    // handle letter, backspace, junk
    else {
        if (k === 'BACKSPACE') {
            gamestate.guess = gamestate.guess.substring(0, gamestate.guess.length - 1);
            draw_backspace(gamestate);
        } else if (
            gamestate.guess.length < 5
            && k.length === 1
            && /[A-Z]/.test(k)
        ) {
            gamestate.guess += k;
            draw_letter(gamestate);
        } else {
            // bad character
        }

        save_gamestate_to_localstorage(gamestate);
    }
}
function handle_submit() {
    let gamestate = pull_gamestate_from_localstorage();
    let current_guess_idx = gamestate.history.indexOf('');

    // adds color classes, slow reveals answer
    draw_word_submit(gamestate)

    // handle gameover conditions
    if (gamestate.guess === gamestate.word) {
        let msg;
        switch (current_guess_idx) {
            case 0: 
                msg = "Hmm"; break;
            case 1:
            case 2:
                msg = "Very good"; break;
            case 3:
            case 4:
                msg = "Nicely done"; break;
            case 5:
                msg = "Whew!"; break;
            default:
                msg = "Hmmmmmmm";
        }
        gamestate.gameover = true;
        gamestate.won = true;
        display_message(msg);

    } else if (current_guess_idx >= 5) {
        gamestate.gameover = true;
        gamestate.won = false;
        display_message("Damn better luck next time");
    }

    // show stats modal after a bit
    window.setTimeout(() => {
        document.getElementById('statistics-modal').showModal(); 
        draw_statistics();
    }, 3500);

    // add to gamestate history, clear current guess, save
    gamestate.history[current_guess_idx] = gamestate.guess;
    gamestate.guess = '';
    save_gamestate_to_localstorage(gamestate);
}

// initialize state, wire up event handlers, etc
window.onload = function () {
    // initialize gamestate for today, if new day
    if (!localStorage.hasOwnProperty(get_datekey())) {
        localStorage.setItem(get_datekey(), JSON.stringify({
            "word": todays_word().toUpperCase(),
            "guess": "",
            "history": ['','','','','',''],
            "gameover": false,
            "won": false,
        }));
    } else {
        draw_history(pull_gamestate_from_localstorage());
    }

    // event listeners for onscreen keyboard
    document.querySelectorAll(".keyboard-key").forEach(el => {
        el.onclick = () => handle_keypress(el.id);
    })

    // for key presses
    window.addEventListener('keydown', handle_physical_keypress);
};