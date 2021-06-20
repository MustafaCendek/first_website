# Nedir?
Bu repo Bootstrapmade.com'da paylaşın [Tempo](https://bootstrapmade.com/demo/Tempo/) temasının eski bir sürümünün bootstrap _kullanılmadan_ **pug** ve **scss** ile pixel pixel aynı olacak şekilde tekrar yazılmasını içerir.
# Gerekli Programlar
node.js
npm paket yöneticisi
# Çalıştırma Talimatları
`npm install`
`.\node_modules\.bin\gulp.cmd default`
* İlk komut ile package.json dosyası içerisinde yazan bağımlılıklar yüklenir.
* İkinci komut ile gulpfile.js içerisinde tanımlı default görevi çalıştırılır. Bu görev pug kodlarını html'e, scss kodları css koduna dönüştürürüp index.html, style.css dosyalarını oluşturur. Ardından pug ve scss kodlarındaki değişiklik olduğunda yukarıdaki görevi tekrar çalıştırıp tarayıcıda değişikliğin canlı olarak görülmesini sağlayan browser-sync modülünü çalıştırır.