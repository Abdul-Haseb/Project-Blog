// Importing necessary modules and configuration
import { Client, Account, ID } from "appwrite"; // Importing Appwrite SDK components
import config from "../config/config"; // Importing configuration for Appwrite

// Class to manage authentication
export class AuthService {
  // Declaring instance properties
  client = new Client(); // Creating an instance of Client class
  account; // Placeholder for Account instance

  // Constructor to initialize the client and account
  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl) // Setting the API endpoint from the config
      .setProject(config.appWrtieProjectId); // Setting the project ID from the config

    this.account = new Account(this.client); // Initializing the Account instance with the configured client
  }

  // Method to create a new user account
  async createAccount({ email, password, name }) {
    try {
      // Creating a new user account
      const userAccount = await this.account.create(
        ID.unique(), // Generating a unique ID for the new user
        email, // User's email
        password, // User's password
        name // User's name
      );

      // If account creation is successful, log the user in
      if (userAccount) {
        this.login({ email, password });
      } else {
        return userAccount; // Return the created user account
      }
    } catch (error) {
      console.log(error); // Log any errors that occur
    }
  }

  // Method to log in a user
  async login({ email, password }) {
    try {
      // Creating a session for the user
      return await this.createEmailSession(email, password);
    } catch (error) {
      console.log(error); // Log any errors that occur
    }
  }

  // Method to get the current logged-in user's details
  async getCurrentUser() {
    try {
      // Fetching the current user's account details
      this.account.get();
    } catch (error) {
      console.log(error); // Log any errors that occur
    }
    return null; // Return null if fetching details fails
  }

  // Method to log out the current user
  async logout() {
    try {
      // Deleting the current session to log out the user
      await this.account.deleteSessions("current");
    } catch (error) {
      console.log(error); // Log any errors that occur
    }
  }
}

// Creating and exporting an instance of AuthService
const authService = new AuthService();
export default authService;
