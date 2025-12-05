// images
const pets = [
    { name: "Buddy", type: "Dog", age: 3, image: "https://placedog.net/400/250?id=101" },
    { name: "Mittens", type: "Cat", age: 2, image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww" },
    { name: "Charlie", type: "Dog", age: 1, image: "https://placedog.net/400/252?id=102" },
    { name: "Luna", type: "Cat", age: 4, image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww" },
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

