<div class="welcome-images">
    <img src="https://placedog.net/200/150?id=201" alt="Dog">
    <img src="https://cataas.com/cat/cute?width=200&height=150" alt="Cat">
    <img src="https://placedog.net/200/150?id=202" alt="Dog">
    <img src="https://cataas.com/cat/angry?width=201&height=150" alt="Cat">
</div>


// Select the container
const petList = document.getElementById('pet-list');

// Display pets
function displayPets() {
    petList.innerHTML = '';
    pets.forEach((pet, index) => {
        const card = document.createElement('div');
        card.classList.add('pet-card');
        card.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <button class="adopt-btn" onclick="adoptPet(${index})">Adopt</button>
        `;
        petList.appendChild(card);
    });
}

// Adopt a pet
function adoptPet(index) {
    const petName = pets[index].name;
    pets.splice(index, 1);
    displayPets();
    alert(`You have adopted ${petName}! 🐾`);
}

// Initial display
displayPets();

