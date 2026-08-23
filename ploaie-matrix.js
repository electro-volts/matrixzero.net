(function () { //cod furnizat de Claude Sonnet 5 - high
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    const fontSize = 16;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=*_+|:<>"';
    let width, height, columns, drops;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        columns = Math.floor(width / fontSize);
        drops = new Array(columns).fill(1);
    }
    window.addEventListener('resize', resize);
    resize();

    function draw() {
        // low-alpha fill each frame creates the fading trail behind each character
        ctx.fillStyle = 'rgba(11, 26, 18, 0.08)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#b4ff00';
        ctx.font = fontSize + 'px "Courier New", monospace';

            for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion) {
        setInterval(draw, 40); // classic cmatrix-like speed
    } else {
        // static fallback: fill with the theme background, no animation
        ctx.fillStyle = '#0b1a12';
        ctx.fillRect(0, 0, width, height);
    }
})();