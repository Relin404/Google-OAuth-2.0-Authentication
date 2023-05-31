
# Google OAuth 2.0 Authentication

This repository contains code and instructions for implementing Google OAuth 2.0 authentication in your web application. With Google OAuth 2.0, you can allow your users to log in to your application using their Google credentials, which provides a secure and convenient authentication method.

## Prerequisites

Before you begin, ensure that you have the following:

-   A Google Cloud Platform (GCP) project with the Google OAuth 2.0 API enabled.
-   A web server or framework to host your application.
-   Basic knowledge of Node.js and HTML.

## Getting Started

1.  Clone the repository:
```sh
git clone https://github.com/Relin404/Google-OAuth-2.0-Authentication.git
```

2.  Navigate to the project directory:
```sh
cd Google-OAuth-2.0-Authentication
```
3.  Create a `.env` file and add your Google OAuth 2.0 credentials:
```sh
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
COOKIE_KEY_1=your-cookie-key-1
COOKIE_KEY_2=your-cookie-key-2
```

4.  Install the dependencies:
```sh
npm install
```

5.  Start the development server:
```sh
npm start
```
6.  Open your browser and navigate to `http://localhost:3000` to see the application running.

## Configuring Google OAuth 2.0

To configure Google OAuth 2.0 for your application, follow these steps:

1.  Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project.
    
2.  Enable the Google OAuth 2.0 API for your project.
    
3.  In the Credentials section, create a new OAuth 2.0 client ID.
    
4.  Set the authorized JavaScript origins and redirect URIs for your application.
    
5.  Copy the generated client ID and client secret.
    
6.  Paste the client ID and client secret into the `.env` file of your application.
    
7.  Update the redirect URI in the `.env` file to match the URL of your callback route.
    
8.  Save the changes and restart your application.
    

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


## Acknowledgments

-   This project is based on the [Google Sign-In documentation](https://developers.google.com/identity/sign-in/web/sign-in).

