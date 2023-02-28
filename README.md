<div align="center">
<h1>Rastgele Profil Oluşturucu</h1>
<p>Bu uygulama, JavaScript kullanarak rastgele ad, soyad, e-posta adresi, biyografi ve ad-soyadla bağlantılı bir şifre oluşturur. İsimler Türkçe'dir ve uygulama bir Node.js ortamında çalışır.</p>
</div>

## Nasıl Kullanılır?

* `rastgeleProfil()` fonksiyonu ile rastgele bir profil oluşturabilirsiniz. Ad, soyad, e-posta adresi, biyografi ve şifre alanlarını içerir.

```javascript
const profil = rastgeleProfil();
console.log(rastgeleProfil);
// { ad: 'Ayşe', soyad: 'Demir', email: 'ayse.demir@icloud.com', 
// biyografi: 'Merhaba, ben Ayşe Demir. Kendim hakkında pek bir şey söylemek istemiyorum ama herkese merhaba demeyi severim.', 
// sifre: 'AyşeDemir5152' }
```

* Profil bilgilerini `fs.writeFile()` ile bir dosyaya yazdırabilirsiniz. Örneğin, aşağıdaki kod profil bilgilerini profil.txt dosyasına yazar:
```javascript
fs.writeFile('profil.txt', JSON.stringify(profile, null, 2), (err) => {
  if (err) throw err;
  console.log('Profil bilgileri profil.txt dosyasına yazıldı.');
});
```
