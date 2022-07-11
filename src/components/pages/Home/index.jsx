


import SliderPublicity from '../../layout/SliderPublicity'


export default function Home() {
    
    const publicity = SliderPublicity()
    
    return ( 
    
        <div className="col-12 d-flex" >           
            
                  <div className="row">  
                             

           <div className="col-12 container-xl container-sm col-sm col-xl ">
               {publicity}
           </div>       
                 
               
           </div>
                                 

           

        </div>
        );
      
    
}