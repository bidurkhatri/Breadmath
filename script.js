document.getElementById('breadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get inputs
    const flourWeight = parseFloat(document.getElementById('flourWeight').value);
    const waterPercentage = parseFloat(document.getElementById('waterPercentage').value);
    const saltPercentage = parseFloat(document.getElementById('saltPercentage').value);
    const leavenPercentage = parseFloat(document.getElementById('leavenPercentage').value);
    const leavenHydration = parseFloat(document.getElementById('leavenHydration').value);

    // Validate inputs
    if (
        isNaN(flourWeight) || isNaN(waterPercentage) || isNaN(saltPercentage) ||
        isNaN(leavenPercentage) || isNaN(leavenHydration)
    ) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    // Calculations
    const leavenWeight = (leavenPercentage / 100) * flourWeight;
    const leavenFlour = leavenWeight / (1 + (leavenHydration / 100));
    const leavenWater = leavenWeight - leavenFlour;

    const totalWater = (waterPercentage / 100) * flourWeight + leavenWater;
    const totalSalt = (saltPercentage / 100) * flourWeight;
    const doughWeight = flourWeight + totalWater + totalSalt;

    // Update results
    document.getElementById('doughWeightResult').textContent = doughWeight.toFixed(2);
    document.getElementById('waterWeightResult').textContent = totalWater.toFixed(2);
    document.getElementById('saltWeightResult').textContent = totalSalt.toFixed(2);
    document.getElementById('leavenWeightResult').textContent = leavenWeight.toFixed(2);
    document.getElementById('flourWeightResult').textContent = flourWeight.toFixed(2);

    // Show results
    document.getElementById('results').classList.remove('hidden');
});
