import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import React from 'react';
import Dashboard from '../Dashboard/Dashboard.js';
import CollegeStudy from '../Dashboard/CollegeStudy';
import Blogs from '../Dashboard/Blogs';
import Frontend from '../mainroad/Frontend/Frontend';
import Backend from '../mainroad/Backend/Backend';
import Flutter from '../mainroad/Flutter/Flutter';
import Android from '../mainroad/Android/Android';
import Devops from '../mainroad/Devops/Devops';
import Blockchain from '../mainroad/Blockchain/Blockchain';
import DBAdmin from '../mainroad/DBAdmin/DBAdmin';
import SoftwareAD from '../mainroad/SoftwareAD/SoftwareAD';
import DSA from '../CollegeStudy/DSA/DSA';
import Java from '../CollegeStudy/Java/Java';
import Python from '../CollegeStudy/Python/Python';
import Database from '../CollegeStudy/Database/Database';
import OOP from '../CollegeStudy/OOP/OOP';
import OS from '../CollegeStudy/OS/OS';
import CNS from '../CollegeStudy/CNS/CNS';
import CompScience from '../CollegeStudy/CompScience/CompScience';
import Chat from './Chat';
import SetAvatar from './SetAvatar';
import Diary from '../Dashboard/Diarycompo/Diary';
import SendOTP from './SendOTP';
import ChangePass from './ChangePassword';

const AnimatedRoutes = () => {
  
    const location = useLocation();
    return (<>
        <Routes location={location} key={location.pathname}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/development" element={<Dashboard />}></Route>
            <Route path="/collegestudy" element={<CollegeStudy />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/setavatar" element={<SetAvatar />}></Route>
            <Route path="/checkgmail" element={<SendOTP />}></Route>
            <Route path="/changepass" element={<ChangePass />}></Route>

            {/* mainroad folder routes or Development routes*/}
            <Route path="/frontend" element={<Frontend />}></Route>
            <Route path='/backend' element={<Backend />}></Route>
            <Route path='/flutterdevlopment' element={<Flutter />}></Route>
            <Route path='/androiddevlopment' element={<Android />}></Route>
            <Route path='/devops' element={<Devops />}></Route>
            <Route path='/blockchain' element={<Blockchain />}></Route>
            <Route path='/databaseadmin' element={<DBAdmin />}></Route>
            <Route path='/softwarearchitect' element={<SoftwareAD />}></Route>

            {/* College Study Routes */}
            <Route path='/dsa' element={<DSA />}></Route>
            <Route path='java' element={<Java />}></Route>
            <Route path='/python' element={<Python />}></Route>
            <Route path='/database' element={<Database />}></Route>
            <Route path='/oop' element={<OOP />}></Route>
            <Route path='/os' element={<OS />}></Route>
            <Route path='/cns' element={<CNS />}></Route>
            <Route path='/computerscience' element={<CompScience />}></Route>
            <Route path='/Diary' element={<Diary/>}/>

        </Routes>
    </>)
}

export default AnimatedRoutes;