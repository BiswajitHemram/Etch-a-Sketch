function handleButtonClick(event) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
}

// Add event listeners to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', handleButtonClick));