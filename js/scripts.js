document.addEventListener('DOMContentLoaded', function() {
    const muscleAreas = document.querySelectorAll('area');
    const muscleName = document.getElementById('muscle-name');
    const muscleDescription = document.getElementById('muscle-description');

    const muscleData = {
        'Bicep': 'The bicep is a muscle located on the front of the upper arm.',
        'Tricep': 'The tricep is a muscle located on the back of the upper arm.'
        // Add more muscle descriptions here
    };

    muscleAreas.forEach(area => {
        area.addEventListener('mouseover', function() {
            const muscle = this.dataset.muscle;
            muscleName.textContent = muscle;
            muscleDescription.textContent = muscleData[muscle];
        });

        area.addEventListener('mouseout', function() {
            muscleName.textContent = 'Hover over a muscle';
            muscleDescription.textContent = 'Information about the muscle will appear here.';
        });
    });
});
