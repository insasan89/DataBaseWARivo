const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to full size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gridSpacing = 40; // Sea grid spacing
const curveIntensity = 50; // Distortion intensity
let mouse = { x: 0, y: 0 };

// Simplified world map path (example continents outline)
const worldPath = [
    // North America
    { x: 200 }, 


];

const topoLines = [
    // North America
    [
        { x: 210 },
     
    ],

];


// Track mouse position
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Draw the sea grid
function drawSeaGrid() {
    for (let x = 0; x < canvas.width; x += gridSpacing) {
        for (let y = 0; y < canvas.height; y += gridSpacing) {
            // Calculate distortion
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const distortion = Math.exp(-distance / 300) * curveIntensity;

            const nx = x + (dx / distance) * distortion || 0;
            const ny = y + (dy / distance) * distortion || 0;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

// Draw the world map with distortion
function drawWorldMap() {
    ctx.beginPath();
    ctx.moveTo(worldPath[0].x, worldPath[0].y);

    worldPath.forEach((point) => {
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const distortion = Math.exp(-distance / 300) * curveIntensity;

        const nx = point.x + (dx / distance) * distortion || 0;
        const ny = point.y + (dy / distance) * distortion || 0;

        ctx.lineTo(nx, ny);
    });

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
}

// Draw topographic lines
function drawTopography() {
    topoLines.forEach((path) => {
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);

        path.forEach((point) => {
            const dx = mouse.x - point.x;
            const dy = mouse.y - point.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const distortion = Math.exp(-distance / 300) * curveIntensity;

            const nx = point.x + (dx / distance) * distortion || 0;
            const ny = point.y + (dy / distance) * distortion || 0;

            ctx.lineTo(nx, ny);
        });

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();
    });
}

// Main animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSeaGrid(); // Draw the sea grid
    drawWorldMap(); // Draw the continents
    drawTopography(); // Draw the topographic lines
    requestAnimationFrame(animate);
}

// Start the animation
animate();
