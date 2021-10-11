const isR18Plus = (age) => {
  const adult = age > 18;
  return new Promise((resolve, reject) => {
      if(adult){
          resolve("anda sudah dewasa");
      } else{
          reject("anda masih dibawah umur");
      }
  })
}

const printR18Plus = async () => {
  const underAge = await isR18Plus(10).then(adult => adult).catch(adult => adult);
  const properAge = await isR18Plus(19).then(adult => adult).catch(adult => adult);

  console.log(underAge);
  console.log(properAge);
}

printR18Plus();
