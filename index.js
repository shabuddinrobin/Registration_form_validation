var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var password = document.getElementById("pass1");
var password2 = document.getElementById("pass2");

// --------------------CLOCK ---------------------

function showClock(){
    let rtClock= new Date();
    let hour =rtClock.getHours();
    let minute =rtClock.getMinutes();
    let second =rtClock.getSeconds();
    let watch = document.getElementById("watch");
   watch.innerHTML="Time ➔ "+ hour + " : "+  minute + " : "  + second;
   setTimeout(showClock, 500);
}
// --------------------ERROR---------------------

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// --------------------SUSSESS---------------------
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function Validate(input, message) {
    const formControl = input.parentElement;
    formControl.className ='form-control error';
    const small = formControl.querySelector('#small2');
    small.innerText = message;     
        }

form.addEventListener('submit', function(e){
        e.preventDefault();
        let pass1Val = document.getElementById("pass1").value;
        let pass2Val = document.getElementById("pass2").value;
    
            if(password.value === ''){
                showError(password, "Password is required");
            }
                else{
                    showSuccess(password);
                }
            if(password2.value === ''){
                showError(password2, "Password retype is required");
            }
                else{
                    showSuccess(password2);
                }
            if (pass1Val != pass2Val) {        
                    Validate(password2, "Password Mismatched");
                    }
            if(username.value === ''){
                showError(username, "Username is required");
        }
                else{
                    showSuccess(username);
            }
            if(email.value === ''){
                showError(email, "email is required");
        }
                else{
                    showSuccess(email);
            }
            if(phone.value === ''){
                showError(phone, "Phone is required");
        }
                else{
                    showSuccess(phone);
            }
            if(address.value === ''){
                showError(address, "Address is required");
        }
                else{
                    showSuccess(address);
            }
        }
)