const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const { generate: generateToken } = require('../utils/token');

module.exports = {
    // SignUp,
    SignIn

};
// async function SignUp(params) {
    

//     const hashedPassword = hashPassword(params.password.trim());

//     const user = new User(params.firstname.trim(), params.lastname.trim(), params.email.trim(), hashedPassword);

//     User.create(user, (err, data) => {
//         if (err) {
//             res.status(500).send({
//                 status: "error",
//                 message: err.message
//             });
//         } else {
//             const token = generateToken(data.id);
//             res.status(201).send({
//                 status: "success",
//                 data: {
//                     token,
//                     data
//                 }
//             });
//         }
//     });
// }

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

       if(password_valid)
       {
    
        const token = generateToken(user.dataValues);

        const usuario= {
            token:token,
            firstname: user.dataValues.firstName,
            lastname: user.dataValues.lastName,
        }
        return usuario
   
        }
    }

}