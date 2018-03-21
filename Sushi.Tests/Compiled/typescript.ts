// ECMA 6 - ModelWithManyLists

/**
 * @summary Server-side generated model for the 'ModelWithManyLists' class.
 */
class ModelWithManyLists {

	List: any;
	HashSet: any;
	Enumerable: any;
	Collection: any;
	ReadOnlyList: any;
	Dictionary: any;

	/**
	 * @name ModelWithManyLists
	 * @namespace Sushi.Tests.Models.ModelWithManyLists
	 * @class ModelWithManyLists
	 * @classdesc Server-side generated constructor for the 'ModelWithManyLists' class.
	 * @param {Object<ModelWithManyLists>} [value] The object to convert to the match the 'ModelWithManyLists' class.
	 */
	constructor(value) {
		if (value !== void 0 && value !== null) {
			// Check property keys.
			if (!value.hasOwnProperty('List'))
				throw new TypeError("Given object is expected to have a property with name: 'List'.");
			if (!value.hasOwnProperty('HashSet'))
				throw new TypeError("Given object is expected to have a property with name: 'HashSet'.");
			if (!value.hasOwnProperty('Enumerable'))
				throw new TypeError("Given object is expected to have a property with name: 'Enumerable'.");
			if (!value.hasOwnProperty('Collection'))
				throw new TypeError("Given object is expected to have a property with name: 'Collection'.");
			if (!value.hasOwnProperty('ReadOnlyList'))
				throw new TypeError("Given object is expected to have a property with name: 'ReadOnlyList'.");
			if (!value.hasOwnProperty('Dictionary'))
				throw new TypeError("Given object is expected to have a property with name: 'Dictionary'.");

			// Check property type match.
			if (typeof (value['List']) !== 'object')
				throw new TypeError("Given object property 'List' is expected to be a object.");
			if (typeof (value['HashSet']) !== 'object')
				throw new TypeError("Given object property 'HashSet' is expected to be a object.");
			if (typeof (value['Enumerable']) !== 'object')
				throw new TypeError("Given object property 'Enumerable' is expected to be a object.");
			if (typeof (value['Collection']) !== 'object')
				throw new TypeError("Given object property 'Collection' is expected to be a object.");
			if (typeof (value['ReadOnlyList']) !== 'object')
				throw new TypeError("Given object property 'ReadOnlyList' is expected to be a object.");
			if (typeof (value['Dictionary']) !== 'object')
				throw new TypeError("Given object property 'Dictionary' is expected to be a object.");
		}

		this.List = value.List || [];
		this.HashSet = value.HashSet || [];
		this.Enumerable = value.Enumerable || [];
		this.Collection = value.Collection || [];
		this.ReadOnlyList = value.ReadOnlyList || [];
		this.Dictionary = value.Dictionary || {};
		$$SET_PROPERTY_VALUES$$;
	}

	/**
	 * @name tryParse
	 * @namespace Sushi.Tests.Models.ModelWithManyLists.tryParse
	 * @description Check if the given 'value' contains the expected keys and instances to match the 'ModelWithManyLists' class.
	 * @param {Object=} value The object to parse.
	 * @return {boolean} If the given 'value' can match the 'ModelWithManyLists' class.
	 */
	static tryParse(value) {
		try {
			if (value === void 0 || value === null)
				return false; // Empty, return false.

			// Check property keys.
			if (!value.hasOwnProperty('List'))
				throw new TypeError("Given object is expected to have a property with name: 'List'.");
			if (!value.hasOwnProperty('HashSet'))
				throw new TypeError("Given object is expected to have a property with name: 'HashSet'.");
			if (!value.hasOwnProperty('Enumerable'))
				throw new TypeError("Given object is expected to have a property with name: 'Enumerable'.");
			if (!value.hasOwnProperty('Collection'))
				throw new TypeError("Given object is expected to have a property with name: 'Collection'.");
			if (!value.hasOwnProperty('ReadOnlyList'))
				throw new TypeError("Given object is expected to have a property with name: 'ReadOnlyList'.");
			if (!value.hasOwnProperty('Dictionary'))
				throw new TypeError("Given object is expected to have a property with name: 'Dictionary'.");

			// Check property type match.
			if (typeof (value['List']) !== 'object')
				throw new TypeError("Given object property 'List' is expected to be a object.");
			if (typeof (value['HashSet']) !== 'object')
				throw new TypeError("Given object property 'HashSet' is expected to be a object.");
			if (typeof (value['Enumerable']) !== 'object')
				throw new TypeError("Given object property 'Enumerable' is expected to be a object.");
			if (typeof (value['Collection']) !== 'object')
				throw new TypeError("Given object property 'Collection' is expected to be a object.");
			if (typeof (value['ReadOnlyList']) !== 'object')
				throw new TypeError("Given object property 'ReadOnlyList' is expected to be a object.");
			if (typeof (value['Dictionary']) !== 'object')
				throw new TypeError("Given object property 'Dictionary' is expected to be a object.");

			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}
// ECMA 6 - NameModel

/**
 * @summary Server-side generated model for the 'NameModel' class.
 */
class NameModel {

	Name: string;
	Insertion: string;
	Surname: string;

	/**
	 * @name NameModel
	 * @namespace Sushi.Tests.Models.NameModel
	 * @class NameModel
	 * @classdesc Server-side generated constructor for the 'NameModel' class.
	 * @param {Object<NameModel>} [value] The object to convert to the match the 'NameModel' class.
	 */
	constructor(value) {
		if (value !== void 0 && value !== null) {
			// Check property keys.
			if (!value.hasOwnProperty('Name'))
				throw new TypeError("Given object is expected to have a property with name: 'Name'.");
			if (!value.hasOwnProperty('Insertion'))
				throw new TypeError("Given object is expected to have a property with name: 'Insertion'.");
			if (!value.hasOwnProperty('Surname'))
				throw new TypeError("Given object is expected to have a property with name: 'Surname'.");

			// Check property type match.
			if (typeof (value['Name']) !== 'string')
				throw new TypeError("Given object property 'Name' is expected to be a string.");
			if (typeof (value['Insertion']) !== 'string')
				throw new TypeError("Given object property 'Insertion' is expected to be a string.");
			if (typeof (value['Surname']) !== 'string')
				throw new TypeError("Given object property 'Surname' is expected to be a string.");
		}

		this.Name = value.Name || "Jeroen";
		this.Insertion = value.Insertion || '';
		this.Surname = value.Surname || "Vorsselman";
		$$SET_PROPERTY_VALUES$$;
	}

	/**
	 * @name tryParse
	 * @namespace Sushi.Tests.Models.NameModel.tryParse
	 * @description Check if the given 'value' contains the expected keys and instances to match the 'NameModel' class.
	 * @param {Object=} value The object to parse.
	 * @return {boolean} If the given 'value' can match the 'NameModel' class.
	 */
	static tryParse(value) {
		try {
			if (value === void 0 || value === null)
				return false; // Empty, return false.

			// Check property keys.
			if (!value.hasOwnProperty('Name'))
				throw new TypeError("Given object is expected to have a property with name: 'Name'.");
			if (!value.hasOwnProperty('Insertion'))
				throw new TypeError("Given object is expected to have a property with name: 'Insertion'.");
			if (!value.hasOwnProperty('Surname'))
				throw new TypeError("Given object is expected to have a property with name: 'Surname'.");

			// Check property type match.
			if (typeof (value['Name']) !== 'string')
				throw new TypeError("Given object property 'Name' is expected to be a string.");
			if (typeof (value['Insertion']) !== 'string')
				throw new TypeError("Given object property 'Insertion' is expected to be a string.");
			if (typeof (value['Surname']) !== 'string')
				throw new TypeError("Given object property 'Surname' is expected to be a string.");

			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}
// ECMA 6 - PersonReferenceToUser

/**
 * @summary Server-side generated model for the 'PersonReferenceToUser' class.
 */
class PersonReferenceToUser {

	Name: string;
	Insertion: string;
	Surname: string;
	User: UserReferenceToPerson | any;

	/**
	 * @name PersonReferenceToUser
	 * @namespace Sushi.Tests.Models.PersonReferenceToUser
	 * @class PersonReferenceToUser
	 * @classdesc Server-side generated constructor for the 'PersonReferenceToUser' class.
	 * @param {Object<PersonReferenceToUser>} [value] The object to convert to the match the 'PersonReferenceToUser' class.
	 */
	constructor(value) {
		if (value !== void 0 && value !== null) {
			// Check property keys.
			if (!value.hasOwnProperty('Name'))
				throw new TypeError("Given object is expected to have a property with name: 'Name'.");
			if (!value.hasOwnProperty('Insertion'))
				throw new TypeError("Given object is expected to have a property with name: 'Insertion'.");
			if (!value.hasOwnProperty('Surname'))
				throw new TypeError("Given object is expected to have a property with name: 'Surname'.");
			if (!value.hasOwnProperty('User'))
				throw new TypeError("Given object is expected to have a property with name: 'User'.");

			// Check property type match.
			if (typeof (value['Name']) !== 'string')
				throw new TypeError("Given object property 'Name' is expected to be a string.");
			if (typeof (value['Insertion']) !== 'string')
				throw new TypeError("Given object property 'Insertion' is expected to be a string.");
			if (typeof (value['Surname']) !== 'string')
				throw new TypeError("Given object property 'Surname' is expected to be a string.");
			if (typeof (value['User']) !== 'object')
				throw new TypeError("Given object property 'User' is expected to be a object.");
		}

		this.Name = value.Name || '';
		this.Insertion = value.Insertion || '';
		this.Surname = value.Surname || '';
		this.User = value.User || null;
		$$SET_PROPERTY_VALUES$$;
	}

	/**
	 * @name tryParse
	 * @namespace Sushi.Tests.Models.PersonReferenceToUser.tryParse
	 * @description Check if the given 'value' contains the expected keys and instances to match the 'PersonReferenceToUser' class.
	 * @param {Object=} value The object to parse.
	 * @return {boolean} If the given 'value' can match the 'PersonReferenceToUser' class.
	 */
	static tryParse(value) {
		try {
			if (value === void 0 || value === null)
				return false; // Empty, return false.

			// Check property keys.
			if (!value.hasOwnProperty('Name'))
				throw new TypeError("Given object is expected to have a property with name: 'Name'.");
			if (!value.hasOwnProperty('Insertion'))
				throw new TypeError("Given object is expected to have a property with name: 'Insertion'.");
			if (!value.hasOwnProperty('Surname'))
				throw new TypeError("Given object is expected to have a property with name: 'Surname'.");
			if (!value.hasOwnProperty('User'))
				throw new TypeError("Given object is expected to have a property with name: 'User'.");

			// Check property type match.
			if (typeof (value['Name']) !== 'string')
				throw new TypeError("Given object property 'Name' is expected to be a string.");
			if (typeof (value['Insertion']) !== 'string')
				throw new TypeError("Given object property 'Insertion' is expected to be a string.");
			if (typeof (value['Surname']) !== 'string')
				throw new TypeError("Given object property 'Surname' is expected to be a string.");
			if (typeof (value['User']) !== 'object')
				throw new TypeError("Given object property 'User' is expected to be a object.");

			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}
// ECMA 6 - UserReferenceToPerson

/**
 * @summary Server-side generated model for the 'UserReferenceToPerson' class.
 */
class UserReferenceToPerson {

	RegisteredOn: any;
	Guid: any;
	Username: string;
	Password: string;
	Person: PersonReferenceToUser | any;

	/**
	 * @name UserReferenceToPerson
	 * @namespace Sushi.Tests.Models.UserReferenceToPerson
	 * @class UserReferenceToPerson
	 * @classdesc Server-side generated constructor for the 'UserReferenceToPerson' class.
	 * @param {Object<UserReferenceToPerson>} [value] The object to convert to the match the 'UserReferenceToPerson' class.
	 */
	constructor(value) {
		if (value !== void 0 && value !== null) {
			// Check property keys.
			if (!value.hasOwnProperty('RegisteredOn'))
				throw new TypeError("Given object is expected to have a property with name: 'RegisteredOn'.");
			if (!value.hasOwnProperty('Guid'))
				throw new TypeError("Given object is expected to have a property with name: 'Guid'.");
			if (!value.hasOwnProperty('Username'))
				throw new TypeError("Given object is expected to have a property with name: 'Username'.");
			if (!value.hasOwnProperty('Password'))
				throw new TypeError("Given object is expected to have a property with name: 'Password'.");
			if (!value.hasOwnProperty('Person'))
				throw new TypeError("Given object is expected to have a property with name: 'Person'.");

			// Check property type match.
			if (typeof (value['RegisteredOn']) !== 'object')
				throw new TypeError("Given object property 'RegisteredOn' is expected to be a object.");
			if (typeof (value['Guid']) !== 'object')
				throw new TypeError("Given object property 'Guid' is expected to be a object.");
			if (typeof (value['Username']) !== 'string')
				throw new TypeError("Given object property 'Username' is expected to be a string.");
			if (typeof (value['Password']) !== 'string')
				throw new TypeError("Given object property 'Password' is expected to be a string.");
			if (typeof (value['Person']) !== 'object')
				throw new TypeError("Given object property 'Person' is expected to be a object.");
		}

		this.RegisteredOn = value.RegisteredOn || "2018-03-19T01:32:06.2331421+01:00";
		this.Guid = value.Guid || "00000000-0000-0000-0000-000000000000";
		this.Username = value.Username || "MrAwesome";
		this.Password = value.Password || "Secret";
		this.Person = value.Person || null;
		$$SET_PROPERTY_VALUES$$;
	}

	/**
	 * @name tryParse
	 * @namespace Sushi.Tests.Models.UserReferenceToPerson.tryParse
	 * @description Check if the given 'value' contains the expected keys and instances to match the 'UserReferenceToPerson' class.
	 * @param {Object=} value The object to parse.
	 * @return {boolean} If the given 'value' can match the 'UserReferenceToPerson' class.
	 */
	static tryParse(value) {
		try {
			if (value === void 0 || value === null)
				return false; // Empty, return false.

			// Check property keys.
			if (!value.hasOwnProperty('RegisteredOn'))
				throw new TypeError("Given object is expected to have a property with name: 'RegisteredOn'.");
			if (!value.hasOwnProperty('Guid'))
				throw new TypeError("Given object is expected to have a property with name: 'Guid'.");
			if (!value.hasOwnProperty('Username'))
				throw new TypeError("Given object is expected to have a property with name: 'Username'.");
			if (!value.hasOwnProperty('Password'))
				throw new TypeError("Given object is expected to have a property with name: 'Password'.");
			if (!value.hasOwnProperty('Person'))
				throw new TypeError("Given object is expected to have a property with name: 'Person'.");

			// Check property type match.
			if (typeof (value['RegisteredOn']) !== 'object')
				throw new TypeError("Given object property 'RegisteredOn' is expected to be a object.");
			if (typeof (value['Guid']) !== 'object')
				throw new TypeError("Given object property 'Guid' is expected to be a object.");
			if (typeof (value['Username']) !== 'string')
				throw new TypeError("Given object property 'Username' is expected to be a string.");
			if (typeof (value['Password']) !== 'string')
				throw new TypeError("Given object property 'Password' is expected to be a string.");
			if (typeof (value['Person']) !== 'object')
				throw new TypeError("Given object property 'Person' is expected to be a object.");

			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}
// ECMA 6 - TypeModel

/**
 * @summary Server-side generated model for the 'TypeModel' class.
 */
class TypeModel {

	Name: string;
	Number: number;
	Decimal: number;
	Value: boolean;
	Char: string;

	/**
	 * @name TypeModel
	 * @namespace Sushi.Tests.Models.TypeModel
	 * @class TypeModel
	 * @classdesc Server-side generated constructor for the 'TypeModel' class.
	 * @param {Object<TypeModel>} [value] The object to convert to the match the 'TypeModel' class.
	 */
	constructor(value) {
		if (value !== void 0 && value !== null) {
			// Check property keys.
			if (!value.hasOwnProperty('Name'))
				throw new TypeError("Given object is expected to have a property with name: 'Name'.");
			if (!value.hasOwnProperty('Number'))
				throw new TypeError("Given object is expected to have a property with name: 'Number'.");
			if (!value.hasOwnProperty('Decimal'))
				throw new TypeError("Given object is expected to have a property with name: 'Decimal'.");
			if (!value.hasOwnProperty('Value'))
				throw new TypeError("Given object is expected to have a property with name: 'Value'.");
			if (!value.hasOwnProperty('Char'))
				throw new TypeError("Given object is expected to have a property with name: 'Char'.");

			// Check property type match.
			if (typeof (value['Name']) !== 'string')
				throw new TypeError("Given object property 'Name' is expected to be a string.");
			if (typeof (value['Number']) !== 'number')
				throw new TypeError("Given object property 'Number' is expected to be a number.");
			if (typeof (value['Decimal']) !== 'number')
				throw new TypeError("Given object property 'Decimal' is expected to be a number.");
			if (typeof (value['Value']) !== 'boolean')
				throw new TypeError("Given object property 'Value' is expected to be a boolean.");
			if (typeof (value['Char']) !== 'string')
				throw new TypeError("Given object property 'Char' is expected to be a string.");
		}

		this.Name = value.Name || "Jeroen";
		this.Number = value.Number || 1337;
		this.Decimal = value.Decimal || 1.47;
		this.Value = value.Value || true;
		this.Char = value.Char || "a";
		$$SET_PROPERTY_VALUES$$;
	}

	/**
	 * @name tryParse
	 * @namespace Sushi.Tests.Models.TypeModel.tryParse
	 * @description Check if the given 'value' contains the expected keys and instances to match the 'TypeModel' class.
	 * @param {Object=} value The object to parse.
	 * @return {boolean} If the given 'value' can match the 'TypeModel' class.
	 */
	static tryParse(value) {
		try {
			if (value === void 0 || value === null)
				return false; // Empty, return false.

			// Check property keys.
			if (!value.hasOwnProperty('Name'))
				throw new TypeError("Given object is expected to have a property with name: 'Name'.");
			if (!value.hasOwnProperty('Number'))
				throw new TypeError("Given object is expected to have a property with name: 'Number'.");
			if (!value.hasOwnProperty('Decimal'))
				throw new TypeError("Given object is expected to have a property with name: 'Decimal'.");
			if (!value.hasOwnProperty('Value'))
				throw new TypeError("Given object is expected to have a property with name: 'Value'.");
			if (!value.hasOwnProperty('Char'))
				throw new TypeError("Given object is expected to have a property with name: 'Char'.");

			// Check property type match.
			if (typeof (value['Name']) !== 'string')
				throw new TypeError("Given object property 'Name' is expected to be a string.");
			if (typeof (value['Number']) !== 'number')
				throw new TypeError("Given object property 'Number' is expected to be a number.");
			if (typeof (value['Decimal']) !== 'number')
				throw new TypeError("Given object property 'Decimal' is expected to be a number.");
			if (typeof (value['Value']) !== 'boolean')
				throw new TypeError("Given object property 'Value' is expected to be a boolean.");
			if (typeof (value['Char']) !== 'string')
				throw new TypeError("Given object property 'Char' is expected to be a string.");

			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}
// ECMA 6 - Gender

/**
 * @summary Server-side generated model for the 'Gender' class.
 */
class Gender {


	/**
	 * @name Gender
	 * @namespace Sushi.Tests.Models.Inheritance.Gender
	 * @class Gender
	 * @classdesc Server-side generated constructor for the 'Gender' class.
	 * @param {Object<Gender>} [value] The object to convert to the match the 'Gender' class.
	 */
	constructor(value) {
		if (value !== void 0 && value !== null) {
		}

		$$SET_PROPERTY_VALUES$$;
	}

	/**
	 * @name tryParse
	 * @namespace Sushi.Tests.Models.Inheritance.Gender.tryParse
	 * @description Check if the given 'value' contains the expected keys and instances to match the 'Gender' class.
	 * @param {Object=} value The object to parse.
	 * @return {boolean} If the given 'value' can match the 'Gender' class.
	 */
	static tryParse(value) {
		try {
			if (value === void 0 || value === null)
				return false; // Empty, return false.


			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}
// ECMA 6 - PersonModel

/**
 * @summary Server-side generated model for the 'PersonModel' class.
 */
class PersonModel {

	Name: string;
	Surname: string;

	/**
	 * @name PersonModel
	 * @namespace Sushi.Tests.Models.Inheritance.PersonModel
	 * @class PersonModel
	 * @classdesc Server-side generated constructor for the 'PersonModel' class.
	 * @param {Object<PersonModel>} [value] The object to convert to the match the 'PersonModel' class.
	 */
	constructor(value) {
		if (value !== void 0 && value !== null) {
			// Check property keys.
			if (!value.hasOwnProperty('Name'))
				throw new TypeError("Given object is expected to have a property with name: 'Name'.");
			if (!value.hasOwnProperty('Surname'))
				throw new TypeError("Given object is expected to have a property with name: 'Surname'.");

			// Check property type match.
			if (typeof (value['Name']) !== 'string')
				throw new TypeError("Given object property 'Name' is expected to be a string.");
			if (typeof (value['Surname']) !== 'string')
				throw new TypeError("Given object property 'Surname' is expected to be a string.");
		}

		this.Name = value.Name || "Jeroen";
		this.Surname = value.Surname || "Vorsselman";
		$$SET_PROPERTY_VALUES$$;
	}

	/**
	 * @name tryParse
	 * @namespace Sushi.Tests.Models.Inheritance.PersonModel.tryParse
	 * @description Check if the given 'value' contains the expected keys and instances to match the 'PersonModel' class.
	 * @param {Object=} value The object to parse.
	 * @return {boolean} If the given 'value' can match the 'PersonModel' class.
	 */
	static tryParse(value) {
		try {
			if (value === void 0 || value === null)
				return false; // Empty, return false.

			// Check property keys.
			if (!value.hasOwnProperty('Name'))
				throw new TypeError("Given object is expected to have a property with name: 'Name'.");
			if (!value.hasOwnProperty('Surname'))
				throw new TypeError("Given object is expected to have a property with name: 'Surname'.");

			// Check property type match.
			if (typeof (value['Name']) !== 'string')
				throw new TypeError("Given object property 'Name' is expected to be a string.");
			if (typeof (value['Surname']) !== 'string')
				throw new TypeError("Given object property 'Surname' is expected to be a string.");

			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}
// ECMA 6 - StudentModel

/**
 * @summary Server-side generated model for the 'StudentModel' class.
 */
class StudentModel extends PersonModel {

	Grade: number;
	School: string;
	Gender: Gender | Array<number>;
	Name: string;
	Surname: string;

	/**
	 * @name StudentModel
	 * @namespace Sushi.Tests.Models.Inheritance.StudentModel
	 * @class StudentModel
	 * @classdesc Server-side generated constructor for the 'StudentModel' class.
	 * @param {Object<StudentModel>} [value] The object to convert to the match the 'StudentModel' class.
	 */
	constructor(value) {
		if (value !== void 0 && value !== null) {
			// Check property keys.
			if (!value.hasOwnProperty('Grade'))
				throw new TypeError("Given object is expected to have a property with name: 'Grade'.");
			if (!value.hasOwnProperty('School'))
				throw new TypeError("Given object is expected to have a property with name: 'School'.");
			if (!value.hasOwnProperty('Gender'))
				throw new TypeError("Given object is expected to have a property with name: 'Gender'.");
			if (!value.hasOwnProperty('Name'))
				throw new TypeError("Given object is expected to have a property with name: 'Name'.");
			if (!value.hasOwnProperty('Surname'))
				throw new TypeError("Given object is expected to have a property with name: 'Surname'.");

			// Check property type match.
			if (typeof (value['Grade']) !== 'number')
				throw new TypeError("Given object property 'Grade' is expected to be a number.");
			if (typeof (value['School']) !== 'string')
				throw new TypeError("Given object property 'School' is expected to be a string.");
			if (typeof (value['Gender']) !== 'object')
				throw new TypeError("Given object property 'Gender' is expected to be a object.");
			if (typeof (value['Name']) !== 'string')
				throw new TypeError("Given object property 'Name' is expected to be a string.");
			if (typeof (value['Surname']) !== 'string')
				throw new TypeError("Given object property 'Surname' is expected to be a string.");

			// Check property class instance match.
			if (!(value['Gender'] === void 0 || value['Gender'] === null) && !(value['Gender'] instanceof Gender))
				throw new TypeError("Given object property 'Gender' is expected to be an instance of the 'Gender' constructor.");
		}

		this.Grade = value.Grade || 9;
		this.School = value.School || "Sint Jan";
		this.Gender = value.Gender || 0;
		this.Name = value.Name || "Jeroen";
		this.Surname = value.Surname || "Vorsselman";
		$$SET_PROPERTY_VALUES$$;
	}

	/**
	 * @name tryParse
	 * @namespace Sushi.Tests.Models.Inheritance.StudentModel.tryParse
	 * @description Check if the given 'value' contains the expected keys and instances to match the 'StudentModel' class.
	 * @param {Object=} value The object to parse.
	 * @return {boolean} If the given 'value' can match the 'StudentModel' class.
	 */
	static tryParse(value) {
		try {
			if (value === void 0 || value === null)
				return false; // Empty, return false.

			// Check property keys.
			if (!value.hasOwnProperty('Grade'))
				throw new TypeError("Given object is expected to have a property with name: 'Grade'.");
			if (!value.hasOwnProperty('School'))
				throw new TypeError("Given object is expected to have a property with name: 'School'.");
			if (!value.hasOwnProperty('Gender'))
				throw new TypeError("Given object is expected to have a property with name: 'Gender'.");
			if (!value.hasOwnProperty('Name'))
				throw new TypeError("Given object is expected to have a property with name: 'Name'.");
			if (!value.hasOwnProperty('Surname'))
				throw new TypeError("Given object is expected to have a property with name: 'Surname'.");

			// Check property type match.
			if (typeof (value['Grade']) !== 'number')
				throw new TypeError("Given object property 'Grade' is expected to be a number.");
			if (typeof (value['School']) !== 'string')
				throw new TypeError("Given object property 'School' is expected to be a string.");
			if (typeof (value['Gender']) !== 'object')
				throw new TypeError("Given object property 'Gender' is expected to be a object.");
			if (typeof (value['Name']) !== 'string')
				throw new TypeError("Given object property 'Name' is expected to be a string.");
			if (typeof (value['Surname']) !== 'string')
				throw new TypeError("Given object property 'Surname' is expected to be a string.");

			// Check property class instance match.
			if (!(value['Gender'] === void 0 || value['Gender'] === null) && !(value['Gender'] instanceof Gender))
				throw new TypeError("Given object property 'Gender' is expected to be an instance of the 'Gender' constructor.");

			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}
// ECMA 6 - DoNotIgnoreMe

/**
 * @summary Server-side generated model for the 'DoNotIgnoreMe' class.
 */
class DoNotIgnoreMe extends IgnoreTestRoot {

	ShouldExist: string;

	/**
	 * @name DoNotIgnoreMe
	 * @namespace Sushi.Tests.Models.Ignore.DoNotIgnoreMe
	 * @class DoNotIgnoreMe
	 * @classdesc Server-side generated constructor for the 'DoNotIgnoreMe' class.
	 * @param {Object<DoNotIgnoreMe>} [value] The object to convert to the match the 'DoNotIgnoreMe' class.
	 */
	constructor(value) {
		if (value !== void 0 && value !== null) {
			// Check property keys.
			if (!value.hasOwnProperty('ShouldExist'))
				throw new TypeError("Given object is expected to have a property with name: 'ShouldExist'.");

			// Check property type match.
			if (typeof (value['ShouldExist']) !== 'string')
				throw new TypeError("Given object property 'ShouldExist' is expected to be a string.");
		}

		this.ShouldExist = value.ShouldExist || '';
		$$SET_PROPERTY_VALUES$$;
	}

	/**
	 * @name tryParse
	 * @namespace Sushi.Tests.Models.Ignore.DoNotIgnoreMe.tryParse
	 * @description Check if the given 'value' contains the expected keys and instances to match the 'DoNotIgnoreMe' class.
	 * @param {Object=} value The object to parse.
	 * @return {boolean} If the given 'value' can match the 'DoNotIgnoreMe' class.
	 */
	static tryParse(value) {
		try {
			if (value === void 0 || value === null)
				return false; // Empty, return false.

			// Check property keys.
			if (!value.hasOwnProperty('ShouldExist'))
				throw new TypeError("Given object is expected to have a property with name: 'ShouldExist'.");

			// Check property type match.
			if (typeof (value['ShouldExist']) !== 'string')
				throw new TypeError("Given object property 'ShouldExist' is expected to be a string.");

			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}
// ECMA 6 - IgnoreTestRoot

/**
 * @summary Server-side generated model for the 'IgnoreTestRoot' class.
 */
class IgnoreTestRoot {


	/**
	 * @name IgnoreTestRoot
	 * @namespace Sushi.Tests.Models.Ignore.IgnoreTestRoot
	 * @class IgnoreTestRoot
	 * @classdesc Server-side generated constructor for the 'IgnoreTestRoot' class.
	 * @param {Object<IgnoreTestRoot>} [value] The object to convert to the match the 'IgnoreTestRoot' class.
	 */
	constructor(value) {
		if (value !== void 0 && value !== null) {
		}

		$$SET_PROPERTY_VALUES$$;
	}

	/**
	 * @name tryParse
	 * @namespace Sushi.Tests.Models.Ignore.IgnoreTestRoot.tryParse
	 * @description Check if the given 'value' contains the expected keys and instances to match the 'IgnoreTestRoot' class.
	 * @param {Object=} value The object to parse.
	 * @return {boolean} If the given 'value' can match the 'IgnoreTestRoot' class.
	 */
	static tryParse(value) {
		try {
			if (value === void 0 || value === null)
				return false; // Empty, return false.


			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}