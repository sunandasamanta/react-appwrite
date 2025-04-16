interface SignUpFormValues {
	name: string;
	email: string;
	password: string;
}

interface LoginFormValues {
	email: string;
	password: string;
}

const signUpFieldValidation = ({ name, email, password }: SignUpFormValues) => {
	if (!name || !email || !password) {
		return false;
	}
	// Check if the name is valid (at least 3 characters long and doesn't contain numbers or special characters)
	const namePattern = /^[a-zA-Z]{3,}$/;
	if (!namePattern.test(name)) {
		return false;
	}
	// Check if the email is valid using a regex pattern
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
		return false;
	}
	// check if the password is strong enough (at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character)
	const passwordPattern =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!passwordPattern.test(password)) {
		return false;
	}
	return true;
};

const loginFieldValidation = ({ email, password }: LoginFormValues) => {
	if (!email || !password) {
		return false;
	}
	// Check if the email is valid using a regex pattern
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
		return false;
	}
	// Check if the password is strong enough (at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character)
	const passwordPattern =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!passwordPattern.test(password)) {
		return false;
	}
	return true;
};

export { signUpFieldValidation, loginFieldValidation };
