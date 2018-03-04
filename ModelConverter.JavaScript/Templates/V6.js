﻿// ReSharper disable UndeclaredGlobalVariableUsing
// ReSharper disable InconsistentNaming
// ReSharper disable WrongExpressionStatement
// ReSharper disable UseOfImplicitGlobalInFunctionScope
// ECMA 6 - $$TYPENAME$$

class $$TYPENAME$$ {
	constructor($$ARGUMENT_NAME$$) {
		if ($$DEFINED_CHECK$$) {
			$$VALIDATE_OBJECT$$;
		}

		$$SET_VALUES$$;
	}

	static tryParse($$ARGUMENT_NAME$$) {
		try {
			if ($$UNDEFINED_CHECK$$)
				return false; // Empty, return false.

			$$VALIDATE_OBJECT$$;

			return true;
		}
		catch (exc) {
			console.warn(exc);
			return false;
		}
	}
}