"use strict";

// contains contacts array and methods
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info); //pushes object from Contact class to array
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    display() {
        const cardContainer = document.querySelector(".card-container");
        cardContainer.innerHTML = ""; // clears container
        const trashArray= document.getElementsByClassName("img-btn");

        for (let contact of this.contacts) {
            const createDiv = document.createElement("div");
            createDiv.classList.add("card"); // give div and class of card
            const createP = document.createElement("p");
            const createImg = document.createElement("IMG");
            createImg.classList.add("img-btn"); // give div and class of img-btn
            createImg.src = "./images/baseline-delete_forever24px.svg"; // provides image source

            // populates card from array
            createP.textContent = `
            Name: ${contact.name}
            Email: ${contact.email}
            Phone: ${contact.phone}
            Relationship: ${contact.relation}
            `;

            // add elements
            cardContainer.appendChild(createDiv)
                         .appendChild(createP)
                         .appendChild(createImg); // creates div child paragraph and img element
        }

        // event listener for deleting
        console.log(trashArray);
        for (let index of trashArray) {
            index.addEventListener("click", () => {
                addressBook.deleteAt(index);
            });

        };
        

    }
}


// build objects for array
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const addressBook = new AddressBook();

// event listener for adding contacts for button click
document.querySelector("#add-btn").addEventListener("click", () => {
    const input = document.querySelectorAll(".input-item");
    const select = document.querySelector(".select-options");
    const option = select.options[select.selectedIndex].value;
    addressBook.add(new Contact(input[0].value, input[1].value, input[2].value, option));
    
    addressBook.display();
});



