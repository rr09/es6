let checkLogin = (email, password, allUsers) => {     //Using let keyeword and arrow function
    let isUserFound = false
    let passwordCorrect = false

    for(currentUser of allUsers){                     //Using for of loop

        //console.log(currentUser)

        if (currentUser['email'] == email){

            if (currentUser['password']== password) {
                isUserFound = true 
                passwordCorrect = true
                break

            } else{
              isUserfound = true
              passwordCorrect = false
              break  
            }

        }else{
            isUserFound = false;
        }
    
        
    }   //end of for loop 

    if (UserFound == true && passwordCorrect == true) {
    alert ('You are logged in')
    }  else if (isUserFound == true && passwordCorrect == false) {
    alert ('You have provided incorrect password')
    }  else {
    alert ('no user with this email found') 
    } 
} // end check login