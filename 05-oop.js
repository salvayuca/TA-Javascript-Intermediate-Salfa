//No.01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
        //Pada fun1 akan mengeluarkan fun1 : fungsi fun1 dan fun2 : fungsi fun2.
        //Pada fun2 akan mengeluarkan object kosong
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
        //Berbeda
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
        //karena pada fun 1 menggunakan fungsi biasa dan fun2 menggunakan function arrow dimana this pada function arrow bersifat global.
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();

//No.02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
    // Encaptulation yaitu untuk membungkus object, membatasi akses pada property.
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
    //Abstraction pilar yang menyembunyikan detail tertentu dari objek/method. misalnya digunakan saat mengambil hasil dari fungsi tertentu.
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
    //Inheritance yaitu pilar dimana child yang mengikuti parent nya. berguna agar tidak perlu mengulang jika child masih berhubungan dengan parent.
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
    //Polymorpism yaitu pilar dimana method bertinda berbeda-beda. Berguna jika kita menggunakan method yang sama namun ingkin keluaran yang berbeda.

//No.03
class Phone {
    constructor (brand, storage, ram) {
        this.brand = brand;
        this.storage = storage;
        this.ram = ram
    }
    getBrandName() {
        return this.brand;
    }
    printSpecification() {
        return `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`
    }

    setBrandName(newBrand) {
        this.brand = newBrand;
        return newBrand
    }

    setSpecification(newStorage, newRam) {
        this.storage = newStorage;
        this.ram = newRam;
        return newStorage, newRam
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

console.log(phone.printSpecification());
phone.setSpecification(32, 2);
console.log(phone.printSpecification());

//No.04
class Student {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
      this.courseOfferings = [];
    }
    
    takeNewCourse(course) {
        const isExisted = this.courseOfferings.find((courseOffering) => {
            return courseOffering.course.getSubject() === course.getSubject();
        });

        if (this.courseOfferings.length === 0 || !isExisted) {
            this.courseOfferings.push(new CourseOffering(course));
            course.decreaseQuota();
        }
    }

    getIdxCourse(course) {
        const idxCourse = this.courseOfferings.findIndex((courseOffering) => {
            return courseOffering.course.getSubject() === course.getSubject();
        });
        return idxCourse;
    }
    
    takeATest(course) {
        const idxCourse = this.getIdxCourse(course);
        if (idxCourse >= 0) {
            if (this.courseOfferings[idxCourse].attendance >= course.getAttendence()) {
                this.courseOfferings[idxCourse].grade = Math.floor(Math.random() * 100);
            } else {
                console.log("Please fill your absen");
            }
        }
    }
    
    courseAttendance(course) {
        const idxCourse = this.getIdxCourse(course);
        if (idxCourse >= 0) {
            this.courseOfferings[idxCourse].attendance++;
        }
    }
  }
  
  class CourseOffering {
      constructor(course, grade, attendance) {
          this.course = course;
          this.grade = 0;
          this.attendance = 0;
      }
  }
  
  class Course {
      constructor(subject, quota, attendance) {
          this.subject = subject;
          this.quota = quota;
          this.attendance = attendance;
      }

      getSubject() {
          return this.subject
      }

      getAttendence() {
          return this.attendance
      }
      decreaseQuota() {
          this.quota--;
      }
  }
  
  
  const biology = new Course("biology", 10, 3);
  const physics = new Course("physics", 10, 2);
  
  const johnWatson = new Student("john watson", "male");
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);
  