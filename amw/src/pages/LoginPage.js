import React from 'react';

const EXTERNAL_LOGIN_URL = "https://us-east-150pxanvrr.auth.us-east-1.amazoncognito.com/login?client_id=3df737r6j21gi1jidl6arccedv&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fd84l1y8p4kdic.cloudfront.net";


const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center p-10 bg-white shadow-2xl rounded-xl max-w-sm w-full transition transform hover:scale-[1.01]">
                <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
                    AMW Generator
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Sign in to access your media story library.
                </p>
                <a 
                    href={EXTERNAL_LOGIN_URL} 
                    className="inline-block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 shadow-xl text-lg hover:shadow-2xl active:shadow-none"
                >
                    <span className='font-sans'>&#x25B3;</span> Register or Login (via Cognito)
                </a>
                <p className='mt-6 text-sm text-gray-400'>
                    You will be redirected to the Cognito Hosted UI.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
