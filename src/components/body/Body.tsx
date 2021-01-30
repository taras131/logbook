import {Switch, Route} from 'react-router-dom'
import MainMenu from "./mainmenu/MainMenu";
import MotoList from "./motolist/MotoList";
import CreateNewObject from "./createnewobject/CreateNewObject";
import CarList from "./carlist/cartList";
import CarDiscription from "./carlist/carsdiscription/CarDiscription";
import Consumables from "./records/Consumables";
import CreateNewConsumables from "./createnewobject/CreateNewConsumales";


const Body = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainMenu}/>
            <Route exact path='/carlist' component={CarList}/>
            <Route exact path='/motolist' component={MotoList}/>
            <Route exact path='/createmewobject' component={CreateNewObject}/>
            <Route exact path='/carlist/cardiscription/:carId?' component={CarDiscription}/>
            <Route exact path='/carlist/cardiscription/consumables/:carId?' component={Consumables}/>
            <Route exact path='/createnewconsumables/:carId?' component={CreateNewConsumables}/>
        </Switch>
    )
}

export default Body