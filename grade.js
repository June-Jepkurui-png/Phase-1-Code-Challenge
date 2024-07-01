function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

function main() {
    let input = prompt("Enter the student's mark (between 0 and 100):");
    try {
        let mark = parseFloat(input);
        if (isNaN(mark) || mark < 0 || mark > 100) {
            throw new Error("Error: Mark must be a number between 0 and 100.");
        } else {
            let grade = calculateGrade(mark);
            console.log(`The grade for mark ${mark} is: ${grade}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

main();
