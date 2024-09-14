const gridSize = 5;
let robotPosition = { x: 2, y: 2 };
let robotDirection = 0; // 0: North, 1: East, 2: South, 3: West

function updateRobotPosition() {
    const robot = document.getElementById('robot');
    robot.style.transform = `translate(${robotPosition.x * 52}px, ${robotPosition.y * 52}px) rotate(${robotDirection * 90}deg)`;
}

function moveForward() {
    switch (robotDirection) {
        case 0: // North
            if (robotPosition.y > 0) robotPosition.y--;
            break;
        case 1: // East
            if (robotPosition.x < gridSize - 1) robotPosition.x++;
            break;
        case 2: // South
            if (robotPosition.y < gridSize - 1) robotPosition.y++;
            break;
        case 3: // West
            if (robotPosition.x > 0) robotPosition.x--;
            break;
    }
    updateRobotPosition();
}

function rotate(direction) {
    if (direction === 'left') {
        robotDirection = (robotDirection + 3) % 4;
    } else if (direction === 'right') {
        robotDirection = (robotDirection + 1) % 4;
    }
    updateRobotPosition();
}

// Initial position
updateRobotPosition();
