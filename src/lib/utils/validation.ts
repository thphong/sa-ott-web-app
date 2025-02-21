export const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[+]?[0-9]{1,3}?[-.\s]?\(?[0-9]{1,4}?\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
}

export const isValidPassword = (password: string) => {
    const minLength = /.{8,}/;                  // At least 8 characters
    const hasLower = /[a-z]/;                   // At least one lowercase letter
    const hasUpper = /[A-Z]/;                   // At least one uppercase letter
    const hasNumber = /\d/;                     // At least one digit
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

    return (
        minLength.test(password) &&
        hasLower.test(password) &&
        hasUpper.test(password) &&
        hasNumber.test(password) &&
        hasSpecial.test(password)
    );
}