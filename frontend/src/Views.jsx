import { AccountContext } from './components/AccountContext';
import { useContext } from 'react';

import {Routes, Route} from 'react-router' ;
import PrivateRoutes from '../src/Pages/Login/PrivateRoutes'

import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp'

import Profile from './Pages/Profile';
import Dashboard from "./Pages/Dashboard" ;
import Analytics from './Pages/Analytics';

import CSCI1010 from './Pages/Classes/Subjects/CSCI1010' ;
import CSCI2530 from './Pages/Classes/Subjects/CSCI2530' ;
import CSCI2540 from './Pages/Classes/Subjects/CSCI2540' ;

import Missed from './Pages/Classes/Subjects/Missed'
import Question from './Pages/Classes/Question';

const Views = () => {
  const {user} = useContext(AccountContext) ;
        return user.loggedIn === null ? (
          ""
        ): (
        <Routes>
          <Route path="/" element={<Login />} ></Route>
          <Route path="/register" element={<SignUp />} />
            <Route element={<PrivateRoutes/>}>
              <Route path="/Profile" element={<Profile/>} />
              <Route path="/Dashboard" element={<Dashboard/>} />
              <Route path="/CSCI1010" element={<CSCI1010/>} />
              <Route path="/CSCI2530" element={<CSCI2530/>} />
              <Route path="/CSCI2540" element={<CSCI2540/>} />
              <Route path="/Analytics" element={<Analytics/>} />
              <Route path="/Question" element={<Question/>}/>
              <Route path="/Missed" element={<Missed/>}/>
            </Route>
          <Route path="*" element={<Login />} />
        </Routes>
  );
};

export default Views;