let p = document.getElementById("timer");

window.onload = () => {
    if (!p) {
        console.error('Element with id="timer" not found');
        return;
    }
    setInterval(() => {
        p.textContent = new Date().toLocaleString('en-US', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    }, 1000);
};