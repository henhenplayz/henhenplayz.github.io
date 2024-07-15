document.addEventListener('DOMContentLoaded', function() {
    const muscleAreas = document.querySelectorAll('area');
    const muscleName = document.getElementById('muscle-name');
    const muscleDescription = document.getElementById('muscle-description');
    const selectedMusclesList = document.getElementById('selected-muscles');
    const stretchList = document.getElementById('stretch-list');
    const getStretchesButton = document.getElementById('get-stretches');

    const muscleData = {
        'Bicep': {
            description: 'The bicep is a muscle located on the front of the upper arm.',
            stretches: ['Bicep Stretch', 'Standing Bicep Stretch']
        },
        'Tricep': {
            description: 'The tricep is a muscle located on the back of the upper arm.',
            stretches: ['Overhead Tricep Stretch', 'Standing Tricep Stretch']
        }
        // Add more muscle descriptions and stretches here
    };

    let selectedMuscles = [];

    muscleAreas.forEach(area => {
        area.addEventListener('click', function(event) {
            event.preventDefault();
            const muscle = this.dataset.muscle;
            if (!selectedMuscles.includes(muscle)) {
                selectedMuscles.push(muscle);
                updateSelectedMuscles();
            }
        });
    });

    function updateSelectedMuscles() {
        selectedMusclesList.innerHTML = '';
        selectedMuscles.forEach(muscle => {
            const listItem = document.createElement('li');
            listItem.textContent = muscle;
            selectedMusclesList.appendChild(listItem);
        });
    }

    getStretchesButton.addEventListener('click', function() {
        stretchList.innerHTML = '';
        selectedMuscles.forEach(muscle => {
            if (muscleData[muscle]) {
                const muscleTitle = document.createElement('h3');
                muscleTitle.textContent = muscle;
                stretchList.appendChild(muscleTitle);

                muscleData[muscle].stretches.forEach(stretch => {
                    const stretchItem = document.createElement('p');
                    stretchItem.textContent = stretch;
                    stretchList.appendChild(stretchItem);
                });
            }
        });
    });
});
