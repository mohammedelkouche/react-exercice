import React from 'react' ;
import data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

 function Product() {
   
    
     
  return (
    <div className='container'>
        
        <div className="row">
        {
            data.map((datum)=>{
                // const {name, image, descpription} = props ;
                return( 
                                          
                    //     <div className="col-4 bg-primary">
                    //             <h3 className='text-warning'>{datum.name}</h3>
                    //             <img className="img-thumbnail" src={datum.image} alt =""/>
                    //             <h4>{datum.descpription}</h4>
                    //    </div>
                                <div className="card col-4 text-center" >
                                    <img src={datum.image} className="img-thumbnail" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">{datum.name}</h4>
                                        <h5 className="card-title">{datum.descpription}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="" className=" btn btn-primary justi">Shop Now</a>
                                    </div>
                                </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Product ;

