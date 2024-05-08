const { User } = require('../models');

const userData = [
    {
      username: "user1",
      email: "User1@yahoo.com",
      password: "password12345"
    },
    {
      username: "user2",
      email: "User2@gmail.com",
      password: "password12345"
    },
    {
      username: "user3",
      email: "User3@rock.com",
      password: "password12345"
    },
    {
    username: "user4",
      email: "User4@msn.com",
    password: "password12345"
    }
    
  ] ;

  const seedUsers = () =>  User.bulkCreate(userData);
  //   return User.bulkCreate(userData)
  //     .then(users => {
  //       console.log('Users created successfully');
  //       return users;  // Add this line
  //     })
  //     .catch(error => {
  //       console.error('Error creating users: ', error);
  //     });
  // };


module.exports = seedUsers;