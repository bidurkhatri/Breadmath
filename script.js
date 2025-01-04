document.addEventListener('DOMContentLoaded', () => {
    const ingredientModal = document.getElementById('ingredientModal');
    const toggleIngredientsButton = document.getElementById('toggleIngredients');
    const saveIngredientsButton = document.getElementById('saveIngredients');
    const ingredientCheckboxes = document.querySelectorAll('#ingredientForm input[type="checkbox"]');

    // Toggle modal visibility
    toggleIngredientsButton.addEventListener('click', () => {
        ingredientModal.classList.remove('hidden');
    });

    // Save selected ingredients and update the form
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
        ingredientModal.classList.add('hidden');
    });

    // Handle Reset Button
    document.getElementById('resetButton').addEventListener('click', () => {
        document.getElementById('breadForm').reset();
        document.getElementById('results').classList.add('hidden');
    });
});
