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
                if (inputGroup)

                inputGroup.classList.add('hidden');
            }
        });

        ingredientModal.classList.add('hidden'); // Close the modal
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === ingredientModal) {
            ingredientModal.classList.add('hidden'); // Hide the modal
        }
    });

    // Handle Reset Button
    document.getElementById('resetButton').addEventListener('click', () => {
        document.getElementById('breadForm').reset(); // Reset the form
        document.getElementById('results').classList.add('hidden'); // Hide results
    });

    // Handle Form Submission
    document.getElementById('breadForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const flour = parseFloat(document.getElementById('flourWeight').value);
        const waterPercentage = parseFloat(document.getElementById('waterPercentage').value);
        const milk = document.getElementById('milk') ? parseFloat(document.getElementById('milk').value) || 0 : 0;
        const saltPercentage = parseFloat(document.getElementById('saltPercentage').value);

        const water = (waterPercentage / 100) * flour;
        const salt = (saltPercentage / 100) * flour;

        document.getElementById('doughWeightResult').textContent = (flour + water + salt + milk).toFixed(2);
        document.getElementById('hydrationResult').textContent = ((water / flour) * 100).toFixed(2);
        document.getElementById('results').classList.remove('hidden');
    });
});
