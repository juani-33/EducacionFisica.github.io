
function toggleGroup(groupId) {
    
    const groups = document.querySelectorAll('.muscle-details');
    groups.forEach(group => {
        if (group.id !== groupId) {
            group.style.display = 'none';
        }
    });


    const groupDetails = document.getElementById(groupId);
    groupDetails.style.display = groupDetails.style.display === 'block' ? 'none' : 'block';
}


function toggleMuscle(muscleId, event) {
    event.stopPropagation();
    const muscle = document.getElementById(muscleId);
    muscle.style.display = muscle.style.display === 'block' ? 'none' : 'block';
}

function calculateFCM() {
    const ageInput = document.getElementById('age').value;
    const age = parseInt(ageInput);

    if (!isNaN(age) && age > 0) {
        const fcm = 208 - (0.7 * age);
        document.getElementById('result').textContent = `Tu frecuencia cardíaca máxima es: ${Math.round(fcm)} latidos por minuto`;
    } else {
        document.getElementById('result').textContent = 'Por favor, introduce una edad válida.';
    }
}
