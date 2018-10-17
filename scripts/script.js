"use strict";

class  AddressBook {
    constructor() {
        this.contacts = [
            {
               Name: "Erica",
               Phone: "225-328-8430", 
               Email: "ericana@hmail",
            },
            {
                Name: "Wow",
                Phone: "225-328-8430", 
                Email: "ericana@hmail",
             },
             {
                Name: "Doogy",
                Phone: "225-328-8430", 
                Email: "ericana@hmail",
             },
             {
                Name: "Holla",
                Phone: "225-328-8430", 
                Email: "ericana@hmail",
             },
        ];
    }
    add(info) {
        this.contacts.push(info);
        // console.log(this.contacts);

    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
        // console.log(this.contacts);
    }
    deleteByName(name) {

    }
    print() {
        console.log(this.contacts);
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

let addressBook = new AddressBook();

while(true) {
    let action = prompt("Add, delete, print, quit?")
    if (action === "add") {
        let name = prompt("Name?");
        let email = prompt("Email?");
        let phone = prompt("Phone?");
        let relation = prompt("Relation?");
        
        addressBook.add(new Contact(name, email, phone, relation));

    } if (action === "delete") {
        let toDelete = prompt("Index to delete?");
        addressBook.deleteAt(toDelete);
    } if (action === "print") {
        addressBook.print();
    } if (action === "quit") {
        console.log("Goodbye!")
        break;
    } else {
        console.log("error.")
        break;
    }
}