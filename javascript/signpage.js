let usernamme=document.getElementById('username')
let usrlabel=document.getElementById('usernamelabel')
let psw=document.getElementById('password')
let pswrlabel=document.getElementById('passwordlabel')
let lgnbtn=document.getElementById('loginbtn')
let signUpbtn=document.getElementById('signupbtn')


// / When the user starts to type something inside the username field


  username.onblur= function validate() {

    // Validate length
    if(username.value.length >= 8) {
      username.classList.add('valid')
      usernamelabel.classList.add('valid')
      usernamelabel.innerText='Valid Email address'
      usernamelabel.style.color='#4D4F5C'
      username.style.borderBottom.color='#E9E9F0'
      document.getElementById('loginbtn').disabled=false
      loginbtn.style.cursor='default'
      loginbtn.style.backgroundColor='#43425D'
  
  
    } else {
      username.classList.add('invalid')
      usernamelabel.classList.add('invalid')
      usernamelabel.innerText=''
      usernamelabel.innerText='Username must contain at least 8 symbols'
      usernamelabel.style.color='red'
      username.style.borderBottom='solid'
      username.style.borderBottom.color='red'
      document.getElementById('loginbtn').disabled=true
      loginbtn.style.backgroundColor='#838296'
      loginbtn.style.cursor='not-allowed'
    }}


// / When the user starts to type something inside the password field


  password.onblur= function validatepassword() {

    // Validate length
    if(password.value.length >= 8) {
      password.classList.add('valid')
      password.classList.add('valid')
      passwordlabel.innerText='Valid password'
      passwordlabel.style.color='#4D4F5C'
      password.style.borderBottom.color='red'
      document.getElementById('loginbtn').disabled=false
      loginbtn.style.cursor='default'
      loginbtn.style.backgroundColor='#43425D'
      
    }

     else {
      password.classList.add('invalid')
      passwordlabel.classList.add('invalid')
      passwordlabel.innerText=''
      passwordlabel.innerText='Must include at least one number and at least 8 or more character'
      passwordlabel.style.color='red'
      password.style.borderBottom='solid'
      password.style.borderBottom.color='red'
      document.getElementById('loginbtn').disabled=true
      loginbtn.style.backgroundColor='#838296'
      loginbtn.style.cursor='not-allowed'

    }}

	
    lgnbtn.addEventListener('click',function () {
      
      if(password.value.length >= 8,username.value.length >= 8) {
        password.classList.add('valid')
        password.classList.add('valid')
        passwordlabel.innerText='Valid password'
        passwordlabel.style.color='#4D4F5C'
        password.style.borderBottom.color='red'
        document.getElementById('loginbtn').disabled=false
        loginbtn.style.cursor='default'
        loginbtn.style.backgroundColor='#43425D'
        username.classList.add('valid')
        usernamelabel.classList.add('valid')
        usernamelabel.innerText='Valid Email address'
        usernamelabel.style.color='#4D4F5C'
        username.style.borderBottom.color='#E9E9F0'
        document.getElementById('loginbtn').disabled=false
        loginbtn.style.cursor='default'
        loginbtn.style.backgroundColor='#43425D'
        location.href = 'main.html';

        
      }
  
       else {
        password.classList.add('invalid')
        passwordlabel.classList.add('invalid')
        passwordlabel.innerText=''
        passwordlabel.innerText='Must include at least one number and at least 8 or more character'
        passwordlabel.style.color='red'
        password.style.borderBottom='solid'
        password.style.borderBottom.color='red'
        usernamelabel.classList.add('invalid')
        usernamelabel.innerText=''
        usernamelabel.innerText='Username must contain at least 8 symbols'
        usernamelabel.style.color='red'
        username.style.borderBottom='solid'
        username.style.borderBottom.color='red'
        document.getElementById('loginbtn').disabled=true
        loginbtn.style.backgroundColor='#838296'
        loginbtn.style.cursor='not-allowed'
        document.getElementById('loginbtn').disabled=true
        loginbtn.style.backgroundColor='#838296'
        loginbtn.style.cursor='not-allowed'
        username.classList.add('invalid')
     
       }
      
    })

  


let tosignup=document.getElementById('signupbtn2')

