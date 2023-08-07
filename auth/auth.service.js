const bcrypt = require('./../utils/password');
const db = require('_helpers/db');
const User = require('../users/user.model');
const jwt = require('./../utils/token');

module.exports = {
    SignUp,
    SignIn

};
async function SignUp(params) {
    

    const hashedPassword = hashPassword(params.password.trim());

    const user = new User(params.firstname.trim(), params.lastname.trim(), params.email.trim(), hashedPassword);

    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            const token = generateToken(data.id);
            res.status(201).send({
                status: "success",
                data: {
                    token,
                    data
                }
            });
        }
    });
}

async function SignIn(params) {

    const user = await db.User.findOne(
            { where : 
                {email : params.email }
            }
        );
    if(user){
        const password = await db.User.scope('withHash').findOne(
            { where: 
                { id: user.dataValues.id } 
            }
            );

       const password_valid = bcrypt.compare(params.password, password.dataValues.passwordHash);

       console.log(password_valid )
       if(password_valid)
       {
           token = jwt.sign({ 
            "id" : user.id,
            "email" : user.email,
            "first_name":user.first_name 
        },process.env.SECRET);

           res.status(200).json(
            { token : token }
            );
       } else {
         res.status(400).json(
            { error : "Password Incorrect" }
            );
       }
     
     }else{
       res.status(404).json(
        { error : "User does not exist" }
        );
     }

}