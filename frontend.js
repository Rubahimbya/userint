function welcome(){

let user=document.getElementById('username').value;
let userpass=document.getElementById('userpassword').value;



if(user=="eee"){
   

    window.open("work.html");
}else{
    alert("wrong user name");
}
alert("welcome" + user);
}