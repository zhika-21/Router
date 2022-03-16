import {useEffect} from 'react'
import {useHistory,Switch,Route,Link,useRouteMatch} from 'react-router-dom'
import EditProfile from './EditProfile'
import Orders from './Orders'

function Profile({theUserIsLog}){


    const history = useHistory()
    useEffect(()=>{
        if(!theUserIsLog){

            history.push('/')
        }

    },[theUserIsLog,history])


    const {path,url} = useRouteMatch()
    
    return(
        <>
        this is my profile
        <ol>
            <li><Link to={`${url}/EditProfile`}>Edit My Profile</Link></li>
            <li><Link to={`${url}/SeeMyOrders`} > See My Orders</Link></li>
        </ol>

        <Switch>
            <Route path={`${path}/EditProfile`} component={EditProfile}/>
            <Route path={`${path}/SeeMyOrders`} component={Orders}/>
        </Switch>

        </>
    )
}

export default Profile