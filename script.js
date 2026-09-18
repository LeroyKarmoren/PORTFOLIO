const yearElement = document.getElementById('year');

const currentDate = new Date();

yearElement.textContent = currentDate.getFullYear();