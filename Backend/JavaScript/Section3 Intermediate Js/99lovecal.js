function loveCalculator() {
    while (true) {
        const name1 = prompt("Enter the first name:");
        const name2 = prompt("Enter the second name:");

        if (!name1 || !name2) {
            alert("Names cannot be empty! Please try again.");
            continue;
        }

        let loveScore;
        if (name1.trim().charAt(0).toLowerCase() === 'a' && name2.trim().charAt(0).toLowerCase() === 'a') {
            loveScore = Math.floor(85 + Math.random() * 15);
        } else {
            loveScore = Math.floor(Math.random() * 100);
        }
        alert(`The love score for ${name1} and ${name2} is: ${loveScore}%`);
        const again = confirm("Do you want to calculate again?");
        if (!again) {
            alert("Thanks for using the Love Calculator! Goodbye!");
            break;
        }
    }
}