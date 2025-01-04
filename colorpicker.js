const colorInput = document.getElementById('colorInput');

colorInput.addEventListener('input', (event) => {
  document.body.style.backgroundColor = event.target.value;
});
