export const createKey = (length?: number) => {
    let allChars = ""; // suppose the key is blank string

    // strings containing lowercase upppercase special case and number characters 
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "`~!@#$%^&*()-_+={}[]|\/.,<>";
    const numbers = "0123456789";

    allChars += uppercase;
    allChars += lowercase;
    allChars += specialChars;
    allChars += numbers;

    let pass: string[] = [];
    if (length) {
        for (let i = 0; i <= length; i++) {
            let index = Math.floor(Math.random() * allChars.length + 1);
            pass.push(allChars.split("")[index])
        }
        return pass.toString();
    } else {
        for (let i = 0; i <= 10; i++) {
            let index = Math.floor(Math.random() * allChars.length + 1);
            pass.push(allChars.split("")[index])
        }
        return pass.toString().replace(/,/g, "");
    }
} 