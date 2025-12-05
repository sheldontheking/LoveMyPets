// images
const pets = [
    { name: "Buddy", type: "Dog", age: 3, image: "https://placedog.net/400/250?id=101" },
    { name: "Mittens", type: "Cat", age: 2, image: "https://cataas.com/cat/cute?width=400&height=250" },
    { name: "Charlie", type: "Dog", age: 1, image: "https://placedog.net/400/252?id=102" },
    { name: "Luna", type: "Cat", age: 4, image: "https://cataas.com/cat/angry?width=401&height=250" },
];



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

