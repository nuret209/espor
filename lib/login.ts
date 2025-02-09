"use server"
export async function handleSubmit(username : string, password : string) {
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminUsername = process.env.ADMIN_USERNAME;
    if (username === adminUsername && password === adminPassword) {
        console.log('Giriş Başarılı!');
        return true;
    } else {
        console.log('Hatalı giriş!');
        return false;
    }
}