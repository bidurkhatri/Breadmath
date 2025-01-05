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
        ingredientModal.classList.add('hidden'); // Close the modal
    });

    // Handle Reset Button
    document.getElementById('resetButton').addEventListener('click', () => {
        document.getElementById('breadForm').reset();
        document.getElementById('results').classList.add('hidden');
    });

    // Handle Form Submission
    document.getElementById('breadForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const flour = parseFloat(document.getElementById('flourWeight').value);
        const waterPercentage = parseFloat(document.getElementById('waterPercentage').value);
        const water = (waterPercentage / 100) * flour;

        document.getElementById('doughWeightResult').textContent = (flour + water).toFixed(2);
        document.getElementById('hydrationResult').textContent = waterPercentage.toFixed(2);
        document.getElementById('results').classList.remove('hidden');
    });
});
