function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsLimit = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints >= demeritPointsLimit) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage:
checkSpeed(80); // Output: Points: 2
checkSpeed(65); // Output: Ok
checkSpeed(900); // Output: License suspended
checkSpeed(73); // Output: Points: 0
