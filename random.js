document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const result = document.getElementById('result');

    generateButton.addEventListener('click', () => {
        const minValue = parseInt(document.getElementById('minValue').value);
        const maxValue = parseInt(document.getElementById('maxValue').value);

        if (!isNaN(minValue) && !isNaN(maxValue) && minValue <= maxValue) {
            const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            result.textContent = `Generated Number: ${randomNumber}`;
        } else {
            result.textContent = 'Please enter valid minimum and maximum values.';
        }
    });
});
