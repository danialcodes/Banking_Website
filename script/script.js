document.getElementById('login_btn').addEventListener('click',function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email =='fbc@gmail.com' && password=='fbc'){
        window.location.href = 'banking.html'
    }
    else{
        console.log("Invalid User");
    }
});