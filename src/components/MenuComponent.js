import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText, Breadcrumb,BreadcrumbItem } from "reactstrap";
// import DishDetailComponent from './DishDetailComponent';
import {Link} from "react-router-dom"
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl'
function RenderMenu({dish, onClick}) {

    return(
        <Card>
         <Link to={`menu/${dish.id}`}>
        <CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name}/>
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>  
        </CardImgOverlay>
        </Link>
    </Card>
    );
    
}
const MenuComponent = (props)=>{
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
           <RenderMenu dish={dish}/>
            </div>
        )
    });
    if(props.dishes.isLoading){
        return (
            <div className="container">
              <div className="row">
                  <Loading/>
              </div>
            </div>
            );
          
        }
        else if(props.dishes.errMess){
          return (
            <div className="container">
              <div className="row">
                 <h4>{props.dishes.errMess}</h4>
              </div>
            </div>
            );
        }
        else
        return (
        <div className="container">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Menu</BreadcrumbItem>

               </Breadcrumb>
               <div className="col-12">
                <h3>Menu</h3>
                <hr />
               </div>
            </div>
            <div className="row">
                {menu}
            </div>
    
            {/* <DishDetailComponent dish={this.state.selectedDish} /> */}
    
    
        </div>
    );
    
}

export default MenuComponent;