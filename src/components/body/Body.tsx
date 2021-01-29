import {Switch, Route} from 'react-router-dom'
import MainMenu from "./mainmenu/MainMenu";
import MotoList from "./motolist/MotoList";
import CreateNewObject from "./createnewobject/CreateNewObject";
import CarList from "./carlist/cartList";
import CarDiscription from "./carlist/carsdiscription/CarDiscription";


const Body = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainMenu}/>
            <Route exact path='/carlist' component={CarList}/>
            <Route exact path='/motolist' component={MotoList}/>
            <Route exact path='/createmewobject' component={CreateNewObject}/>
            <Route exact path='/carlist/cardiscription/:carId?' component={CarDiscription}/>
        </Switch>
    )
}

export default Body