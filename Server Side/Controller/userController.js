const User = require('../Model/UserModel');



// Controller function for user signup
const signup = async (req, res) => {
    try {
      // Extract user data from the request body (assuming it is sent from the frontend)
      const userData = req.body;
  
      // Create a new User instance with the received data
      const newUser = new User(userData);
  
      // Save the new user to the database
      const savedUser = await newUser.save();
  
      // Respond with the saved user details
      res.status(201).json(savedUser);
    } catch (error) {
      // Handle errors during the signup process
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  };
  

  
 module.exports = {signup};