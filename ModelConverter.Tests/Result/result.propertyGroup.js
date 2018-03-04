﻿
// ECMA 5 - NameModel
function NameModel(value) {
	// ...................
	// Check property keys.
	if (!value.hasOwnProperty('Name')) throw new TypeError("Given object is expected to have a property with name: 'Name'."); 
	if (!value.hasOwnProperty('Insertion')) throw new TypeError("Given object is expected to have a property with name: 'Insertion'."); 
	if (!value.hasOwnProperty('Surname')) throw new TypeError("Given object is expected to have a property with name: 'Surname'."); 
	// .........................
	// Check property type match.
	if (value['Name'] !== void 0 && value['Name'] !== null && typeof (value['Name']) !== 'string') throw new TypeError("Given object property 'Name' is expected to be a string.");
	if (value['Insertion'] !== void 0 && value['Insertion'] !== null && typeof (value['Insertion']) !== 'string') throw new TypeError("Given object property 'Insertion' is expected to be a string.");
	if (value['Surname'] !== void 0 && value['Surname'] !== null && typeof (value['Surname']) !== 'string') throw new TypeError("Given object property 'Surname' is expected to be a string.");

	this.Name = value.Name || "Jeroen";
	this.Insertion = value.Insertion || '';
	this.Surname = value.Surname || "Vorsselman";
}

NameModel.prototype.tryParse = function(value) {
	try {
		// ...................
		// Check property keys.
		if (!value.hasOwnProperty('Name')) throw new TypeError("Given object is expected to have a property with name: 'Name'."); 
		if (!value.hasOwnProperty('Insertion')) throw new TypeError("Given object is expected to have a property with name: 'Insertion'."); 
		if (!value.hasOwnProperty('Surname')) throw new TypeError("Given object is expected to have a property with name: 'Surname'."); 
		// .........................
		// Check property type match.
		if (value['Name'] !== void 0 && value['Name'] !== null && typeof (value['Name']) !== 'string') throw new TypeError("Given object property 'Name' is expected to be a string.");
		if (value['Insertion'] !== void 0 && value['Insertion'] !== null && typeof (value['Insertion']) !== 'string') throw new TypeError("Given object property 'Insertion' is expected to be a string.");
		if (value['Surname'] !== void 0 && value['Surname'] !== null && typeof (value['Surname']) !== 'string') throw new TypeError("Given object property 'Surname' is expected to be a string.");

		return true;
	}
	catch (exc) {
		console.warn(exc);
		return false;
	}
}
// ECMA 5 - PersonReferenceToUser
function PersonReferenceToUser(value) {
	// ...................
	// Check property keys.
	if (!value.hasOwnProperty('Name')) throw new TypeError("Given object is expected to have a property with name: 'Name'."); 
	if (!value.hasOwnProperty('Insertion')) throw new TypeError("Given object is expected to have a property with name: 'Insertion'."); 
	if (!value.hasOwnProperty('Surname')) throw new TypeError("Given object is expected to have a property with name: 'Surname'."); 
	if (!value.hasOwnProperty('User')) throw new TypeError("Given object is expected to have a property with name: 'User'."); 
	// .........................
	// Check property type match.
	if (value['Name'] !== void 0 && value['Name'] !== null && typeof (value['Name']) !== 'string') throw new TypeError("Given object property 'Name' is expected to be a string.");
	if (value['Insertion'] !== void 0 && value['Insertion'] !== null && typeof (value['Insertion']) !== 'string') throw new TypeError("Given object property 'Insertion' is expected to be a string.");
	if (value['Surname'] !== void 0 && value['Surname'] !== null && typeof (value['Surname']) !== 'string') throw new TypeError("Given object property 'Surname' is expected to be a string.");
	if (value['User'] !== void 0 && value['User'] !== null && typeof (value['User']) !== 'object') throw new TypeError("Given object property 'User' is expected to be a object.");
	// ...................................
	// Check property class instance match.
	if (value['User'] !== void 0 && value['User'] !== null && !(value['User'] instanceof UserReferenceToPerson)) throw new TypeError("Given object property 'User' is expected to be an instance of the 'UserReferenceToPerson' constructor.");

	this.Name = value.Name || '';
	this.Insertion = value.Insertion || '';
	this.Surname = value.Surname || '';
	this.User = value.User || null;
}

PersonReferenceToUser.prototype.tryParse = function(value) {
	try {
		// ...................
		// Check property keys.
		if (!value.hasOwnProperty('Name')) throw new TypeError("Given object is expected to have a property with name: 'Name'."); 
		if (!value.hasOwnProperty('Insertion')) throw new TypeError("Given object is expected to have a property with name: 'Insertion'."); 
		if (!value.hasOwnProperty('Surname')) throw new TypeError("Given object is expected to have a property with name: 'Surname'."); 
		if (!value.hasOwnProperty('User')) throw new TypeError("Given object is expected to have a property with name: 'User'."); 
		// .........................
		// Check property type match.
		if (value['Name'] !== void 0 && value['Name'] !== null && typeof (value['Name']) !== 'string') throw new TypeError("Given object property 'Name' is expected to be a string.");
		if (value['Insertion'] !== void 0 && value['Insertion'] !== null && typeof (value['Insertion']) !== 'string') throw new TypeError("Given object property 'Insertion' is expected to be a string.");
		if (value['Surname'] !== void 0 && value['Surname'] !== null && typeof (value['Surname']) !== 'string') throw new TypeError("Given object property 'Surname' is expected to be a string.");
		if (value['User'] !== void 0 && value['User'] !== null && typeof (value['User']) !== 'object') throw new TypeError("Given object property 'User' is expected to be a object.");
		// ...................................
		// Check property class instance match.
		if (value['User'] !== void 0 && value['User'] !== null && !(value['User'] instanceof UserReferenceToPerson)) throw new TypeError("Given object property 'User' is expected to be an instance of the 'UserReferenceToPerson' constructor.");

		return true;
	}
	catch (exc) {
		console.warn(exc);
		return false;
	}
}
// ECMA 5 - UserReferenceToPerson
function UserReferenceToPerson(value) {
	// ...................
	// Check property keys.
	if (!value.hasOwnProperty('RegisteredOn')) throw new TypeError("Given object is expected to have a property with name: 'RegisteredOn'."); 
	if (!value.hasOwnProperty('Guid')) throw new TypeError("Given object is expected to have a property with name: 'Guid'."); 
	if (!value.hasOwnProperty('Username')) throw new TypeError("Given object is expected to have a property with name: 'Username'."); 
	if (!value.hasOwnProperty('Password')) throw new TypeError("Given object is expected to have a property with name: 'Password'."); 
	if (!value.hasOwnProperty('Person')) throw new TypeError("Given object is expected to have a property with name: 'Person'."); 
	// .........................
	// Check property type match.
	if (value['RegisteredOn'] !== void 0 && value['RegisteredOn'] !== null && typeof (value['RegisteredOn']) !== 'object') throw new TypeError("Given object property 'RegisteredOn' is expected to be a object.");
	if (value['Guid'] !== void 0 && value['Guid'] !== null && typeof (value['Guid']) !== 'object') throw new TypeError("Given object property 'Guid' is expected to be a object.");
	if (value['Username'] !== void 0 && value['Username'] !== null && typeof (value['Username']) !== 'string') throw new TypeError("Given object property 'Username' is expected to be a string.");
	if (value['Password'] !== void 0 && value['Password'] !== null && typeof (value['Password']) !== 'string') throw new TypeError("Given object property 'Password' is expected to be a string.");
	if (value['Person'] !== void 0 && value['Person'] !== null && typeof (value['Person']) !== 'object') throw new TypeError("Given object property 'Person' is expected to be a object.");
	// ...................................
	// Check property class instance match.
	if (value['Person'] !== void 0 && value['Person'] !== null && !(value['Person'] instanceof PersonReferenceToUser)) throw new TypeError("Given object property 'Person' is expected to be an instance of the 'PersonReferenceToUser' constructor.");

	this.RegisteredOn = value.RegisteredOn || 02/03/2018 22:49:27;
	this.Guid = value.Guid || 00000000-0000-0000-0000-000000000000;
	this.Username = value.Username || "MrAwesome";
	this.Password = value.Password || "Secret";
	this.Person = value.Person || null;
}

UserReferenceToPerson.prototype.tryParse = function(value) {
	try {
		// ...................
		// Check property keys.
		if (!value.hasOwnProperty('RegisteredOn')) throw new TypeError("Given object is expected to have a property with name: 'RegisteredOn'."); 
		if (!value.hasOwnProperty('Guid')) throw new TypeError("Given object is expected to have a property with name: 'Guid'."); 
		if (!value.hasOwnProperty('Username')) throw new TypeError("Given object is expected to have a property with name: 'Username'."); 
		if (!value.hasOwnProperty('Password')) throw new TypeError("Given object is expected to have a property with name: 'Password'."); 
		if (!value.hasOwnProperty('Person')) throw new TypeError("Given object is expected to have a property with name: 'Person'."); 
		// .........................
		// Check property type match.
		if (value['RegisteredOn'] !== void 0 && value['RegisteredOn'] !== null && typeof (value['RegisteredOn']) !== 'object') throw new TypeError("Given object property 'RegisteredOn' is expected to be a object.");
		if (value['Guid'] !== void 0 && value['Guid'] !== null && typeof (value['Guid']) !== 'object') throw new TypeError("Given object property 'Guid' is expected to be a object.");
		if (value['Username'] !== void 0 && value['Username'] !== null && typeof (value['Username']) !== 'string') throw new TypeError("Given object property 'Username' is expected to be a string.");
		if (value['Password'] !== void 0 && value['Password'] !== null && typeof (value['Password']) !== 'string') throw new TypeError("Given object property 'Password' is expected to be a string.");
		if (value['Person'] !== void 0 && value['Person'] !== null && typeof (value['Person']) !== 'object') throw new TypeError("Given object property 'Person' is expected to be a object.");
		// ...................................
		// Check property class instance match.
		if (value['Person'] !== void 0 && value['Person'] !== null && !(value['Person'] instanceof PersonReferenceToUser)) throw new TypeError("Given object property 'Person' is expected to be an instance of the 'PersonReferenceToUser' constructor.");

		return true;
	}
	catch (exc) {
		console.warn(exc);
		return false;
	}
}
// ECMA 5 - TypeModel
function TypeModel(value) {
	// ...................
	// Check property keys.
	if (!value.hasOwnProperty('Name')) throw new TypeError("Given object is expected to have a property with name: 'Name'."); 
	if (!value.hasOwnProperty('Number')) throw new TypeError("Given object is expected to have a property with name: 'Number'."); 
	if (!value.hasOwnProperty('Decimal')) throw new TypeError("Given object is expected to have a property with name: 'Decimal'."); 
	if (!value.hasOwnProperty('Value')) throw new TypeError("Given object is expected to have a property with name: 'Value'."); 
	if (!value.hasOwnProperty('Char')) throw new TypeError("Given object is expected to have a property with name: 'Char'."); 
	// .........................
	// Check property type match.
	if (value['Name'] !== void 0 && value['Name'] !== null && typeof (value['Name']) !== 'string') throw new TypeError("Given object property 'Name' is expected to be a string.");
	if (value['Number'] !== void 0 && value['Number'] !== null && typeof (value['Number']) !== 'number') throw new TypeError("Given object property 'Number' is expected to be a number.");
	if (value['Decimal'] !== void 0 && value['Decimal'] !== null && typeof (value['Decimal']) !== 'number') throw new TypeError("Given object property 'Decimal' is expected to be a number.");
	if (value['Value'] !== void 0 && value['Value'] !== null && typeof (value['Value']) !== 'boolean') throw new TypeError("Given object property 'Value' is expected to be a boolean.");
	if (value['Char'] !== void 0 && value['Char'] !== null && typeof (value['Char']) !== 'string') throw new TypeError("Given object property 'Char' is expected to be a string.");

	this.Name = value.Name || "Jeroen";
	this.Number = value.Number || 1337;
	this.Decimal = value.Decimal || 1.47;
	this.Value = value.Value || true;
	this.Char = value.Char || "a";
}

TypeModel.prototype.tryParse = function(value) {
	try {
		// ...................
		// Check property keys.
		if (!value.hasOwnProperty('Name')) throw new TypeError("Given object is expected to have a property with name: 'Name'."); 
		if (!value.hasOwnProperty('Number')) throw new TypeError("Given object is expected to have a property with name: 'Number'."); 
		if (!value.hasOwnProperty('Decimal')) throw new TypeError("Given object is expected to have a property with name: 'Decimal'."); 
		if (!value.hasOwnProperty('Value')) throw new TypeError("Given object is expected to have a property with name: 'Value'."); 
		if (!value.hasOwnProperty('Char')) throw new TypeError("Given object is expected to have a property with name: 'Char'."); 
		// .........................
		// Check property type match.
		if (value['Name'] !== void 0 && value['Name'] !== null && typeof (value['Name']) !== 'string') throw new TypeError("Given object property 'Name' is expected to be a string.");
		if (value['Number'] !== void 0 && value['Number'] !== null && typeof (value['Number']) !== 'number') throw new TypeError("Given object property 'Number' is expected to be a number.");
		if (value['Decimal'] !== void 0 && value['Decimal'] !== null && typeof (value['Decimal']) !== 'number') throw new TypeError("Given object property 'Decimal' is expected to be a number.");
		if (value['Value'] !== void 0 && value['Value'] !== null && typeof (value['Value']) !== 'boolean') throw new TypeError("Given object property 'Value' is expected to be a boolean.");
		if (value['Char'] !== void 0 && value['Char'] !== null && typeof (value['Char']) !== 'string') throw new TypeError("Given object property 'Char' is expected to be a string.");

		return true;
	}
	catch (exc) {
		console.warn(exc);
		return false;
	}
}

