import {defineStore } from "pinia";

export const useContactStore = defineStore('contacts', {
    state: () => ({
        contacts: [
            {
                prenom: 'Maison',
                numero: '01 15 30 11 77'
            },
            {
                prenom: 'Hermione',
                numero: '07 36 92 16 93'
            },
            {
                prenom: 'Fixus',
                numero: '06 27 94 26 27'
            },
        ],
    }),
    actions: {
    ajoutContact(contact) {
        this.contacts.push(contact)
    }
    // getNumero(prénom) {
    //     const contact = this.contacts.find(c => c.prénom === prénom);
    //     return contact ? contact.numéro : 'Contact non trouvé';
    // }
}
})