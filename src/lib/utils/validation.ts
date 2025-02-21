export const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[+]?[0-9]{1,3}?[-.\s]?\(?[0-9]{1,4}?\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
}
