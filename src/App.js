import React from 'react';
import SignIn from './compnents/auth/SigIn';
import SignUp from './compnents/auth/SignUp';
import AuthDetails from './compnents/AuthDetails';
function App() {
    return (
        <div>
            <SignIn />
            <SignUp />
            <AuthDetails />
        </div>
    );
}

export default App;
