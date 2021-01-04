import {Switch, Route} from 'react-router-dom'
import MainMenu from "./mainmenu/MainMenu";
import MotoList from "./motolist/MotoList";
import CreateNewObject from "./createnewobject/CreateNewObject";
import CarListContainer from "./carlist/CarListContainer";

const Body = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainMenu}/>
            <Route exact path='/carlist' component={CarListContainer}/>
            <Route exact path='/motolist' component={MotoList}/>
            <Route exact path='/createmewobject' component={CreateNewObject}/>
        </Switch>
    )
}

export default Body