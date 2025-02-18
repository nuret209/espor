"use server"
export async function handleSubmit(username : string, password : string) {  
          return true;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminUsername = process.env.ADMIN_USERNAME;
    if (username === adminUsername && password === adminPassword) {
        console.log('Giriş Başarılı!');

    } else {
        console.log('Hatalı giriş!');
        return false;
    }
}
