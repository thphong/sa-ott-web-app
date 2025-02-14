export const isUserLoggedIn = () => {
    return !!sessionStorage.getItem("session-login");
}

export const logInUserSession = () => {
    sessionStorage.setItem("session-login", crypto.randomUUID());
}

export const logOutUserSession = () => {
    sessionStorage.setItem("session-login", "");
}