
let emaill=document.getElementById('email')
let emailllabel=document.getElementById('emaillabel')
let usernameregister=document.getElementById('username2')
let usernamelabel2=document.getElementById('usernamelabel')
let signupbtnn2=document.getElementById('signupbtn2')



    username2.onblur= function validation() {
  
      // Validate length
      if(username2.value.length >= 4) {
        username2.classList.add('valid')
        usernamelabel.classList.add('valid')
        usernamelabel.innerText='Valid username2 address'
        usernamelabel.style.color='#4D4F5C'
        username2.style.borderBottom.color='#E9E9F0'
        document.getElementById('signupbtn2').disabled=false
        signupbtn2.style.cursor='default'
        signupbtn2.style.backgroundColor='#43425D'
    
    
      } else {
        username2.classList.add('invalid')
        usernamelabel.classList.add('invalid')
        usernamelabel.innerText=''
        usernamelabel.innerText='Username must contain at least 4 characters'
        usernamelabel.style.color='red'
        username2.style.borderBottom='solid'
        username2.style.borderBottom.color='red'
        document.getElementById('signupbtn2').disabled=true
        signupbtn2.style.backgroundColor='#838296'
        signupbtn2.style.cursor='not-allowed'
      }}
  


    email.onblur= function validation() {
  
      // Validate length
      if(email.value.length >= 8) {
        email.classList.add('valid')
        emaillabel.classList.add('valid')
        emaillabel.innerText='Valid Email address'
        emaillabel.style.color='#4D4F5C'
        email.style.borderBottom.color='#E9E9F0'
        document.getElementById('signupbtn2').disabled=false
        signupbtn2.style.cursor='default'
        signupbtn2.style.backgroundColor='#43425D'
    
    
      } else {
        email.classList.add('invalid')
        emaillabel.classList.add('invalid')
        emaillabel.innerText=''
        emaillabel.innerText='Email must contain at least 8 characters'
        emaillabel.style.color='red'
        email.style.borderBottom='solid'
        email.style.borderBottom.color='red'
        document.getElementById('signupbtn2').disabled=true
        signupbtn2.style.backgroundColor='#838296'
        signupbtn2.style.cursor='not-allowed'
      }}


