
const saveToken = (token: string) => {
    localStorage.setItem('token', token);
}
const saveRefresToken = (refreshToken: string
) => {
    localStorage.setItem('refreshToken', refreshToken
    );
}
const removeToken = (
) => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
}

export const accountService = { saveToken, saveRefresToken, removeToken }