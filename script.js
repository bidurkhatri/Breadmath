document.addEventListener('DOMContentLoaded', () => {
    const ingredientModal = document.getElementById('ingredientModal'); // The modal element
    const toggleIngredientsButton = document.getElementById('toggleIngredients'); // Button to open the modal
    const saveIngredientsButton = document.getElementById('saveIngredients'); // Button to save and close modal
    const ingredientCheckboxes = document.querySelectorAll('#ingredientForm input[type="checkbox"]'); // All checkboxes

    // Toggle modal visibility
    toggleIngredientsButton.addEventListener('click', () => {
        ingredientModal.classList.remove('hidden'); // Show the modal
    });

    // Save selected ingredients and update the form
    saveIngredientsButton.addEventListener('click', () => {
        ingredientCheckboxes.forEach(checkbox => {
            const ingredient = checkbox.dataset.ingredient;
            const inputGroup = document.querySelector(`.input-group[data-ingredient="${ingredient}"]`);

            // Show or hide input fields based on the checkbox state
            if (checkbox.checked) {
                if (inputGroup) inputGroup.classList.remove('hidden');
            } else {
                if (inputGroup) inputGroup.classList.add('hidden');
            }
        });

        ingredientModal.classList.add('hidden'); // Close the modal after saving selections
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === ingredientModal) {
            ingredientModal.classList.add('hidden'); // Close the modal
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

        // Collect values from the visible input fields
        const flour = parseFloat(document.getElementById('flourWeight').value);
        const waterPercentage = parseFloat(document.getElementById('waterPercentage').value);

        // Optional ingredients
        const milk = document.getElementById('milk') ? parseFloat(document.getElementById('milk').value) || 0 : 0;
        const saltPercentage = parseFloat(document.getElementById('saltPercentage').value);

        // Calculations
        const water = (waterPercentage / 100) * flour;
        const salt = (saltPercentage / 100) * flour;

        // Display results
        document.getElementById('doughWeightResult').textContent = (flour + water + salt + milk).toFixed(2);
        document.getElementById('hydrationResult').textContent = ((water / flour) * 100).toFixed(2);
        document.getElementById('results').classList.remove('hidden'); // Show the results
    });
});
