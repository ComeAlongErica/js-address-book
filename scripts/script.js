"use strict";

// contains contacts array and methods
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    deleteByName(name) {
        function findWithAttr(array, attr, value) {
            for(let i = 0; i < array.length; i++) {
                if(array[i][attr] === value) {
                    return i;
                }
            }
        }
        let indexOfName = findWithAttr(this.contacts, "Name", name);
        this.contacts.splice(indexOfName, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
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

while(true) {
    let action = prompt("Add, delete, print, quit?")

    if (action === "add") {
        let name = prompt("Name?");
        let email = prompt("Email?");
        let phone = prompt("Phone?");
        let relation = prompt("Relation?");
        
        addressBook.add(new Contact(name, email, phone, relation));

    } else if (action === "delete") {
        let deleteBy = prompt("Delete by index or name?")

        if (deleteBy === "index") {
            let toDeleteIndex = prompt("Index to delete?");
            addressBook.deleteAt(toDeleteIndex);
        } else if (deleteBy === "name") {
            let toDeleteName = prompt("Name to delete?");
            addressBook.deleteByName(toDeleteName);
        } else {
            console.log("You didn't select either.")
        }

    } else if (action === "print") {
        addressBook.print();

    } else if (action === "quit") {
        console.log("Goodbye!");
        break;

    } else {
        alert("You didn't choose correctly. Try again.");
    }
}



