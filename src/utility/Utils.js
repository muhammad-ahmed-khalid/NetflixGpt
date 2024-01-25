export const checkValidData = (email,password) => {
   const isPasswordValid = /^[A-Za-z]\w{7,14}$/.test(password)
   const  isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    if(!isEmailValid){
        return "Email is invalid"
    }
    else if(!isPasswordValid){
        return "Password is invalid"
    }
    else{
        return null
    }
}