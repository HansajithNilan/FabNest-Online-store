import User from '../models/UserRegister.js';

async function admin(){

    try{
            const exitAdmin = await User.findOne({email :'admin@gmail.com'})

            if(!exitAdmin){
              const newAdmin =   new User({
                    name:"Admin",
                    email:"admin@gmail.com",
                    password:"admin",
                    role:"admin"
                })
                await newAdmin.save()
                console.log("Admin Account Created Successfull")
            }
            else{
                console.log("Admin Account Already Exist")
            }
    }catch(error){
        console.log(error)
    }

}

export default admin;