function changePage(e) {
    window.location = `/pages/recipes.html`;
}

function userLoginSuccess(res) {

    console.log(res.data);

    Cookies.set(`Recipe API Token`, res.data.token);
    Cookies.set(`Recipe API First Name`, document.getElementById(`emailInput`).value);

    setTimeout(changePage, 1000);
}

function userLoginFailure(err) {
    document.getElementById(`loginStatus`).innerText = `Invalid email or password. Please try again.`;
}

function userLogin(e) {

    document.getElementById(`loginStatus`).innerText = `Verifying Credentials...`;

    axios.request({
        method: `POST`,
        url: `https://reqres.in/api/login`,
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            email: document.getElementById(`emailInput`).value,
            password: document.getElementById(`passwordInput`).value
        }
    }).then(userLoginSuccess).catch(userLoginFailure);
}

let loginButton = document.getElementById(`loginButton`);
loginButton.addEventListener(`click`, userLogin);

// const swiper = new Swiper(`.swiperContainer`, {
//     direction: `horizontal`,
//     pagination: {
//         el: `swiperPagination`,
//         type: `bullets`
//     }
// });