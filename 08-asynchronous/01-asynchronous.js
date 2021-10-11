// 1. Apa itu synchronous?
    //Synchronous yaitu saat proses dilakukan secara berurutan dari atas terlebih dahulu.
// 2. Apa itu asynchronous?
    //Asynchronous yaitu saat proses dilakukan secara bersamaan tapa menunggu antrian.
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
    //Asynchronous bisa diterapkan dalam browser
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
        // first log:  2
        // first log:  3
        // first log:  4
        // first log:  5
        // second log:  6
        // second log:  6
        // second log:  6
        // second log:  6
        // second log:  6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
    //karena pada second log yang terpanggil yaitu index global, sedangkan pada first log yang terpanggil index local
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
    //Keyword let bisa membuat ruang lingkup terpisah pada block
for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama

    setTimeout(function () {
        console.log("second log: ", i);
     }, 100); // 02 - Kedua
    }
  