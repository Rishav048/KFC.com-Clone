function buildObj(n,e,p,u,m,d){
    this.name=n,
    this.email=e,
    this.password=p,
    this.username=u,
    this.mobile=m,
    this.description=d
};
//this is to send the signup data 
async function Register(event){
    event.preventDefault(); 
   
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let username=document.getElementById("username").value;
    let mobile=document.getElementById("mobile").value;
    let description=document.getElementById("description").value;

    let data= new buildObj(name,email,password,username,mobile,description);
    console.log("data:",data);

    let register_url=`https://masai-api-mocker.herokuapp.com/auth/register`;
   try{
    let res=await fetch(register_url,{
        method:`POST`,
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
        },
    });
    let real_data= await res.json();
    console.log("real_data",real_data);
    
    if(real_data.error==false){
        alert(`Registration Successful-Now Login using your username and password`);
    }

   }
   catch(error){
    alert(`Registration failed, user already exists"`);
   }
    
    //signup data sent successfully to server.
//till this point the registration is successful , getting successful message from server 

};

//now lets login 
//here we send login username and password to server , if correct it gives token and successful message, 
//else it gives -inavlid login credentials

const login = async(event) => {
    event.preventDefault();
    let login_data ={
        email: document.getElementById("login_username").value,
        password: document.getElementById("login_password").value,
    };
    console.log('login_data:', login_data);

    let login_url=`https://expenses-app-tsr1.onrender.com/users`;
    try{
        let res=await fetch(login_url,{
            method:"POST",
            body:JSON.stringify(login_data),
            headers:{
                "Content-Type": "application/json",
            },
        });

        let login_real_data= await res.json();
        console.log('login_real_data:', login_real_data);

        let token=login_real_data.token;
        getUserProfile(login_data.username,token);

        if(login_real_data.error == false){
          
            alert(`Login Successful,Welcome to Kings Fried Chicken`);    
        }
        window.location.href="./index.html";
           
        
    }
    catch(error){
        alert(`Invalid Login Credentials`);
        
    }
   
};


//this helps us to get the profile of the registered user 
const getUserProfile = async(username,token) => {

    let api=`https://masai-api-mocker.herokuapp.com/user/${username}`;

    let res=await fetch(api,{

        headers:{
            "Content-Type": "application/json",

            "Authorization": `Bearer ${token}`,
        },

    });

    let real_profile_data= await res.json();
    console.log('real_profile_data:', real_profile_data)
    
    localStorage.setItem("UserName",(real_profile_data.name));

}; 

//getElementByClassName returns an array ! 
const adminlogin = () => {
    event.preventDefault();
    
    let admin_username = document.getElementById("admin_username").value;
    let admin_password = document.getElementById("admin_password").value;
    if(admin_username==="admin" && admin_password==="admin"){
        alert(`Secure Login-Welcome Admin`);
        window.location.href="./admin.html";
    }
}