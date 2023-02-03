export const generateID = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const id = letters.charAt(Math.floor(Math.random() * letters.length)) +
        letters.charAt(Math.floor(Math.random() * letters.length)) +
        Math.floor(Math.random() * 10000);
    return id;
}