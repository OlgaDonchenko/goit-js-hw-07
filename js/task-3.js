const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', inputGreeting);

function inputGreeting(event) {
    const inputValue = event.target.value;

      const trimmedValue = inputValue.trim();
      const greetingName = trimmedValue === '' ? 'Anonymous' : trimmedValue;

      nameOutput.textContent = greetingName;
    }