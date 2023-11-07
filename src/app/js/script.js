const form = document.querySelector('form');
const first_name = document.querySelector('#first-name');
const last_name = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit_btn = document.querySelector('input[type = "submit"]');
const inputs = document.querySelectorAll('input[data-type = "input"]');

window.addEventListener('load', () => {

    inputs.forEach(field => {
        field.value = '';
    })

})

form.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true;

    if(first_name.value.trim() === "" || last_name.value.trim() === "" || password.value.trim() === "" || email.value.trim() === "" || /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]{4,8}$/.test(password.value) === false || /[a-zA-Z0-9]{1,25}\@[a-z]{1,10}mail\.com/.test(email.value) === false){
        isValid = false;
    }

    if(isValid){
        form.submit();
    }else{
        show_alert();
    }
})

inputs.forEach(input => {
    input.addEventListener('focus', (e) => {
        e.preventDefault();
        e.target.className = "w-full text-sm font font-semibold text-Dark_Blue outline-none focus:text-slate-600";
        e.target.parentElement.className = "border-2 w-full border-Grayish_Blue p-3 mt-4 mb-1 rounded-md lg:p-4";
        document.querySelector('.alert').remove();
        submit_btn.disabled = false;
        submit_btn.classList.replace('cursor-not-allowed','cursor-pointer');
    })
})

function show_alert(){
    const div = document.createElement('div');
    div.className = "alert text-right text-xs text-Red italic";

    if(first_name.value.trim() === ""){
        div.append("First Name cannot be empty");
        first_name.parentElement.after(div);
        insert_error(first_name);

    }else if(last_name.value.trim() === ""){
        div.append("Last Name cannot be empty");
        last_name.parentElement.after(div);
        insert_error(last_name);

    }else if(email.value.trim() === ""){
        div.append("Email cannot be empty")
        email.parentElement.after(div);
        insert_error(email);

    }else if(/[a-zA-Z0-9]{1,25}\@[a-z]{1,10}mail\.com/.test(email.value) === false){
        div.append("Looks like this is not an email")
        email.parentElement.after(div);
        insert_error(email);
        email_mismatch();

    }else if(password.value.trim() === ""){
        div.append("Password cannot be empty")
        password.parentElement.after(div);
        insert_error(password);

    }else if(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]{4,8}$/.test(password.value) === false || password.value.length > 8){
        div.append("Please enter a password of maximum 4-8 characters");
        password.parentElement.after(div);
        insert_error(password);

    }

    submit_btn.disabled = true;
    submit_btn.classList.replace('cursor-pointer', 'cursor-not-allowed');
}

function insert_error(element){

    element.className = "w-full text-sm font font-semibold text-Dark_Blue outline-none focus:text-slate-600  bg-error-icon bg-no-repeat h-6 bg-right";
    element.parentElement.className = "border-2 w-full border-Red p-3 mt-4 mb-1 rounded-md lg:p-4 ";
}

function email_mismatch(){
    email.value = '';
    email.placeholder = "email@example\\com"
    email.className = "w-full text-sm font-semibold text-Dark_Blue outline-none focus:text-slate-600 placeholder:text-red";
    insert_error(email);
}