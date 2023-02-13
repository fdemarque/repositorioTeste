const today = new Date();
const birthDate = new Date(input);
const y = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
const d = today.getDate() - birthDate.getDate();
if (m < 0 || (m === 0 && d < 0)) {
    y--;
};
if (y < 18) {
    return ('The user is minor')
};
if (y = 18 || y > 18) {
    return ('The user is major')
}