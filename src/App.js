//react
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';

//hoc
import WithAuth from './hoc/withAuth'

//pages
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home'
import Liveevent from './components/pages/Liveevent/Liveevent'
import Pastwork from './components/pages/Pastwork/Pastwork';
import Dashboard from './components/pages/Dashboard/Dashboard'
import SignIn from './components/pages/SignIn/SignIn';
import Recover from './components/pages/SignIn/Recovery/Recover';

//redux
import {setCurrentUser} from './redux/User/user.actions'

//firebase
import {auth, handleUserProfile} from './firebase/utils'



const App = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }))
        })
      }
      dispatch(setCurrentUser(userAuth))
    })

    return () => {
      authListener();
    }
  }, [])

  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component= {Home}/>
          
          <Route path='/live-event' exact component= {Liveevent}/>

          <Route path='/past-work' exact component= {Pastwork} />

          <Route path='/sign-in' render={() =>  ( 
            <SignIn/> 
          )}/> 

          <Route path='/recover' render={() => ( 
            <Recover /> 
          )} />

          <Route path='/dashboard' render={() => ( 
            <WithAuth>
              <Dashboard /> 
            </WithAuth>
          )} />

        </Switch>
      </Router>
    </>
  );
}
  

export default App;
