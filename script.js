// Handle file upload form submission
document.getElementById("upload-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh on submit

    const fileInput = document.getElementById("file-upload");
    const fileName = fileInput.files[0] ? fileInput.files[0].name : "No file selected";
    alert(`File "${fileName}" uploaded successfully!`);
});

// Handle Predictive form submission
document.getElementById("predict-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const modelSelect = document.getElementById("model-select");
    const selectedModel = modelSelect.value;
    
    // Simulate prediction result display
    const predictionResults = document.getElementById("prediction-results");
    predictionResults.innerHTML = `<h3>Prediction Model: ${selectedModel}</h3><p>Your prediction results will be shown here.</p>`;
});

// Handle Prescriptive form submission
document.getElementById("prescriptive-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const optimizationSelect = document.getElementById("optimization-option");
    const selectedOptimization = optimizationSelect.value;

    // Simulate optimization result display
    const optimizationResults = document.getElementById("optimization-results");
    optimizationResults.innerHTML = `<h3>Optimization Strategy: ${selectedOptimization}</h3><p>Your optimization results will be displayed here.</p>`;
});
