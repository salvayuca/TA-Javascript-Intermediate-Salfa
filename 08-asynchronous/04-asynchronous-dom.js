const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (username) => {
    try {
        if (!username) {
          return null
        }
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        if (data?.login) {
          return data
        } else {
          return "Not Found"
        }
      } catch (error) {
        console.log("error")
        return error
      }
}

elFormUsername.onsubmit = async (e) => {
    e.preventDefault();

    // console.log(elFormUsername.firstElementChild.value);
    const data = await getGitHubUser(elFormUsername.firstElementChild.value);
    console.log(data);
    elCardTitle.innerText =data.login;
    if(data.id){
        elCardImg.src = data.avatar_url;
        elCardBtn.classList.remove("d-none");
        elCardImg.classList.remove("d-none");
    }
    else{
        elCardBtn.classList.add("d-none");
        elCardImg.classList.add("d-none");
    }
    elCard.classList.remove("d-none");
};
