const fs = require('fs');

// buat folder jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
// buat file json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]','utf-8');
}

// load data kontak
const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(file);
    return contacts;
};

// // menampilkan list semua data yg ada di kontak
// const listContact = () => {
//     const contacts = loadContact();
//     console.log('Contact list : ');
//     contacts.forEach((contact, i) => {
//         console.log(`${i+1}.${contact.name} - ${contact.mobile}`);
//     });
// }

// // menampilkan detail kontak yang dicari
// const detailContact = (name) => {
//     const contacts = loadContact();
//     console.log('Detail : ');
//     const contact = contacts.find((contact) => contact.name === name);
//     if (!contact) {
//         console.log((`${name} tidak ditemukan`));
//         return false;
//     } else {
//         console.log(contact.name);
//         console.log(contact.email);
//         console.log(contact.mobile);
//     }
// }

// // edit kontak yang dicari
// const editContact = (id, name, email, mobile) => {
//     const old = detailContact(id);    
//     let newName;
//     let newEmail;
//     let newMobile;

//     if (name === undefined) {
//         newName = old.name;
//     } else {
//         newName = name;
//     }
    
//     if (email === undefined) {
//         newEmail = old.email;
//     } else {
//         newEmail = email;
//     }

//     if (mobile === undefined) {
//         newMobile = old.mobile;
//     } else {
//         newMobile = mobile;
//     }

//     hapusContact(id);
//     answer(newName,newEmail,newMobile);   
//     console.log('Thankyou');
// }

// // hapus data
// const hapusContact = (name) => {
//     const contacts = loadContact(); 
//     const newContacts = contacts.filter((contact) => contact.name !== name);
//     fs.writeFileSync('data/contacts.json',JSON.stringify(newContacts));
//     console.log('Thankyou');
// };

// // simpan data
// const answer = (name, email, mobile) => {
//     const contact = {name,email,mobile};   
//     const contacts = loadContact(); 

//     // cek duplikat
//     const duplikat = contacts.find(contact => contact.name === name);
//         if (duplikat) {
//             console.log('Sudah ada');
//             return false;
//         } 
    
//     // validator email
//     const valEmail = validator.isEmail(contact.email);
//     if (valEmail == false) {
//         console.log('Email tidak valid');
//         return false;
//     }        
    
//     // validator nomor
//     const valMobile = validator.isMobilePhone(contact.mobile,'id-ID');
//     if (valMobile == false) {
//         console.log('Nomor Salah');
//         return false;
//     }        

//     contacts.push(contact);
//     fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
//     console.log('Thankyou');
// };

module.exports = {loadContact};