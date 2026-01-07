let count = 0; //initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
}

function displayCount() {
    document.getElementById('countDisply').innerHTML=count; // disply the count in html
}

function increaseCount() {
    count++; //Increment the count by 1
    displayCount(); //Display the count
    checkCountValue(); // check count value and display messages
}

function checkCountValue() {
    if (count === 10) {
        alert("your instagram post gained 10 followera! Congratulations!");
    }else if (count === 20) {
        alert("your instagram post gained 20 follower! keep it up");
    }
}