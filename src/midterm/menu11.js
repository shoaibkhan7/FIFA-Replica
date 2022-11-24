import { Link } from 'react-router-dom';
import './Hovering.css'
function Menu() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light" >
  <div className="container-fluid" >
    <h4 id="xyz"style={{marginLeft:"550px"}}><strong> Fifa</strong></h4>
    <form className="d-flex input-group w-auto" style={{marginRight:"100px"}}>
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
      <button type="button" className="btn btn-light">Store</button>
      <button type="button" className="btn btn-light">Tickets</button>
      <button type="button" className="btn btn-light">Login</button>
    </form>
  </div>
</nav>




<div >
<nav className="navbar navbar-expand-lg navbar-light bg-light"  >
 <div className="container-fluid" >
  
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="main_nav" style={{marginRight:"100px",width:"auto"}} >
	<ul className="navbar-nav nav nav-pills nav-fill" id="abcd">
		 <li className="nav-item ms-4 ps-6" style={{marginRight:"20px"}} > <a className="nav-link" href="#"><b>TOURMENTS</b></a> 
       
        </li> 
         <li className="nav-item" style={{marginRight:"20px"}}> <a className="nav-link" href="#"><b>About</b> </a> 
       
        </li> 
         <li className="nav-item" style={{marginRight:"20px"}}> <a className="nav-link" href="#"><b>Women Football</b> </a>
        
         </li>
        <li className="nav-item" style={{marginRight:"20px"}}> <a className="nav-link" href="#"><b>Social Impact </b></a> 
        
        </li> 
        <li className="nav-item" style={{marginRight:"20px"}}> <a className="nav-link" href="#"><b>Football Development</b> </a> 

        </li>
		<li className="nav-item" style={{marginRight:"20px"}}><a className="nav-link" href="#"> <b>Technical</b> </a>
        </li> 
		<li className="nav-item" style={{marginRight:"20px"}} ><a className="nav-link" href="#"> <b>Legal </b></a>
        <ul className="dropdown-menu" >
			 <Link to="/privacy"> <li><a className="dropdown-item" href="#" >Privacy</a></li></Link>
       <Link to="/terms"> <li><a className="dropdown-item" href="#" >Terms</a></li></Link>
			  
		    </ul> 
        </li> 
		<li className="nav-item">
		   <a className="nav-link" href="#" style={{marginRight:"20px"}} > <b> World Ranking</b>  </a>
		    <ul className="dropdown-menu" >
			  <li><a className="dropdown-item" href="#" >Men's Ranking</a></li>
			  <li><a className="dropdown-item" href="#" >Women's Ranking</a></li>
			  <li><a className="dropdown-item" href="#" > News </a></li>
		    </ul>
		</li>
	</ul>
  </div> 
 </div> 
</nav>
</div>

        </div> 
    );
}

export default Menu;