import React from 'react';
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';

import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import NewIncident from './Pages/NewIncident';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<Logon />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/incidents/new" element={<NewIncident />} />
            </RouterRoutes>
        </BrowserRouter>
    );
}
