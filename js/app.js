function userFirstName(e) {
    let firstName = document.getElementById(`firstNameInput`).value;
    Cookies.set(`Recipe API First Name`, firstName);
}

let loginButton = document.getElementById(`loginInput`);
loginButton.addEventListener(`click`, userFirstName);

// ----------- Notes ----------
// I orginally had defined 'firstName' above line 6 and tried to use that variable to create a cookie. This had resulted in an error
// I had added an event to the signup button where when clicked it an event will occur
// However, when I called the function, it looks like I was referencing the variable first without declaring it which then resulted in an error
// I should be declaring the variable first, then referencing it 