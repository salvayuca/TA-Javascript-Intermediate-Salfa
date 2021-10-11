export default function validateLoginData(email, pass) {
    const emailPattern = new RegExp(/^\S+@\S+\.\S+$/)
    const passPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[/!@#$%^&*.])(?=.{8,})")

    if (emailPattern.test(email)) {
        if (passPattern.test(pass)) {
            return `Welcome to The Jungle`
        } else {
            return `Tolong masukan password sesuai ketentuan`
        }
    }
    return `Tolong masukan email yang valid`
}