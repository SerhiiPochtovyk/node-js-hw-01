const contacts = require('./contacts');

async function run() {

  console.log('List of Contacts:');
  const allContacts = await contacts.listContacts();
  console.log(allContacts);


  console.log('\nAdd a New Contact:');
  const newContact = await contacts.addContact('John Doe', 'john@example.com', '123-456-7890');
  console.log('New Contact:', newContact);


  console.log('\nUpdated List of Contacts:');
  const updatedContacts = await contacts.listContacts();
  console.log(updatedContacts);


  console.log('\nFind Contact by ID:');
  const contactById = await contacts.getContactById(newContact.id);
  console.log(contactById);

 
  console.log('\nRemove Contact by ID:');
  const removedContact = await contacts.removeContact(newContact.id);
  console.log('Removed Contact:', removedContact);


  console.log('\nUpdated List of Contacts after Removal:');
  const finalContacts = await contacts.listContacts();
  console.log(finalContacts);
}

run();
