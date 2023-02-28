const fs = require('fs');

const adlar = ["Ahmet", "Ayşe", "Mehmet", "Fatma", "Ali", "Zeynep", "Emre", "Esra", "Burak", "Berk"];
const soyadlar = ["Yılmaz", "Kaya", "Çelik", "Demir", "Arslan", "Öztürk", "Koç", "Avcı", "Şahin", "Doğan"];

function rastgeleProfil() {
  const domains = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "icloud.com"];
  
  const ad = adlar[Math.floor(Math.random() * adlar.length)];
  const soyad = soyadlar[Math.floor(Math.random() * soyadlar.length)];
  const email = ad.toLowerCase() + "." + soyad.toLowerCase() + "@" + domains[Math.floor(Math.random() * domains.length)];
  const biyografi = "Merhaba, ben " + ad + " " + soyad + ". Kendim hakkında pek bir şey söylemek istemiyorum ama herkese merhaba demeyi severim.";
  const sifre = ad + soyad + Math.floor(Math.random() * 10000);

  const profil = {
    ad: ad,
    soyad: soyad,
    email: email,
    biyografi: biyografi,
    sifre: sifre
  };
  
  return profil;
}

// Profil bilgilerini oluştur
const profil = rastgeleProfil();

// Profil bilgilerini dosyaya yazdır
fs.writeFile('profil.txt', JSON.stringify(profil, null, 2), (err) => {
  if (err) throw err;
  console.log('Profil bilgileri profil.txt dosyasına yazıldı.');
});
