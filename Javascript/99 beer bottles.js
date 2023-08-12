var count = 10;

function beer() {



    while (count > 0) {

        var wordFix = "bottles";

        if (count === 1) {
            wordFix = "bottle";
        }

        console.log(count, wordFix + " of beer on the wall, " + count, wordFix + " of beer.");
        count--;
        console.log("Take one down and pass it around, " + count, wordFix + " of beer on the wall.");

    }

}

beer();
