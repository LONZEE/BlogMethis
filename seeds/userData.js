const { User } = require('../models');

const userData = [
    {
      
      email: "User1@yahoo.com",
      password: "password12345"
    },
    {
    
      email: "User2@gmail.com",
      password: "password12345"
    },
    {
      
      email: "User3@rock.com",
      password: "password12345"
    },
    {
      
      email: "User4@msn.com",
    password: "password12345"
    }
    
  ] ;

  const seedUsers = () => {
    return User.bulkCreate(userData)
      .then(users => {
        console.log('Users created successfully');
        return users;  // Add this line
      })
      .catch(error => {
        console.error('Error creating users: ', error);
      });
  };


module.exports = seedUsers;