document.addEventListener('DOMContentLoaded', function() {
    const cityForm = document.getElementById('cityForm');
    const departmentsSection = document.getElementById('departmentsSection');
    const departmentsList = document.getElementById('departmentsList');
    const cityName = document.getElementById('cityName');

    const departmentsData = {
        "Mumbai": ["Health Department", "Education Department", "Transport Department", "Water Supply Department"],
        "Delhi": ["Municipal Corporation", "Police Department", "Public Works Department", "Electricity Department"],
        "Bangalore": ["Urban Development", "Housing Department", "Environment Department", "Water Resources"],
        "Chennai": ["Revenue Department", "Fire Services", "Agriculture Department", "Fisheries Department"]
        // Add more cities and their departments as needed
    };

    cityForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const city = document.getElementById('city').value.trim();

        if (city && departmentsData[city]) {
            departmentsList.innerHTML = '';
            cityName.textContent = city;
            departmentsData[city].forEach(function(department) {
                const li = document.createElement('li');
                li.textContent = department;
                departmentsList.appendChild(li);
            });
            departmentsSection.style.display = 'block';
        } else {
            alert('No data available for the entered city. Please try a different city.');
        }
    });
});
