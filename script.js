document.addEventListener('DOMContentLoaded', () => {
    const ingredientModal = document.getElementById('ingredientModal');
    const toggleIngredientsButton = document.getElementById('toggleIngredients');
    const saveIngredientsButton = document.getElementById('saveIngredients');
    const ingredientCheckboxes = document.querySelectorAll('#ingredientForm input[type="checkbox"]');

    // Ensure the modal is hidden on page load
    ingredientModal.classList.add('hidden');

    // Open modal on button click
    toggleIngredientsButton.addEventListener('click', () => {
        ingredientModal.classList.remove('hidden'); // Show the modal
    });

    // Save ingredients and close modal
    saveIngredientsButton.addEventListener('click', () => {
        ingredientCheckboxes.forEach(checkbox => {
            const ingredient = checkbox.dataset.ingredient;
            const inputGroup = document.querySelector(`.input-group[data-ingredient="${ingredient}"]`);

            if (checkbox.checked) {
                if (inputGroup) inputGroup.classList.remove('hidden');
            } else {
                if (inputGroup) inputGroup.classList.add('hidden');
            }
        });

        ingredientModal.classList.add('hidden'); // Close the modal
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) =>
