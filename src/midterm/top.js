import "./style.css";


import {useState} from "react";
function Top() {
  const[card,setcard]= useState([
   { picture1:"https://dailysportsupdates.com/wp-content/uploads/2019/01/FIFA-World-Cup.jpg/Portugal-s-players-celebrate?io=transform:fill,aspectratio:16x9,width:404&quality=100",title:"Football Unites the world", description:"Matuidi:Football has the power to create a better world.",date:"18 Nov 2022"}
  ,{ picture2:"https://digitalhub.fifa.com/transform/75223765-8827-4d30-b9ae-55089e256bfe/WOMEN-S-FOOTBALL-DEVELOPMENT?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Mario Yepes:Football needs to provide a 'bridge' education",date:"15 Nov 2022"}
  ,{ picture3:"https://digitalhub.fifa.com/transform/75223765-8827-4d30-b9ae-55089e256bfe/WOMEN-S-FOOTBALL-DEVELOPMENT?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Mario Yepes:Football needs to provide a 'bridge' education",date:"15 Nov 2022"}
  ,{ picture4:"https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Lylod: Every Worldcup has its own highs and lows.",date:"14 Nov 2022"}
  
  ,{ picture5:"https://digitalhub.fifa.com/transform/75223765-8827-4d30-b9ae-55089e256bfe/WOMEN-S-FOOTBALL-DEVELOPMENT?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Mario Yepes:Football needs to provide a 'bridge' education",date:"15 Nov 2022"}
  ,{ picture6:"https://digitalhub.fifa.com/transform/75223765-8827-4d30-b9ae-55089e256bfe/WOMEN-S-FOOTBALL-DEVELOPMENT?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Mario Yepes:Football needs to provide a 'bridge' education",date:"15 Nov 2022"}
  
   
  ])
  //  const handledelete =(picture4)=>{
  //  console.log("Deleting...." + picture4);
  //  const newdata = state.filter(picture) =>item !=(picture4); 
  

 
    return (
        <div style={{backgroundColor:" rgb(86, 10, 228)",height:0,marginTop:"10px"}}>

  
        <div className="row-cols-3">
<div className="col-1">

</div>
<div className="col-10">
  <div className="card-group">
{card.map((item)=>
(
  
  
<div className="card mt-4 ms-2 w-70" style={{backgroundColor:"white"}} >
<img className="card-img-top"   src={item.picture} alt="Card  cap"/>
<div className="card-body">
    <p className="card-text" style={{fontFamily:"serif"}}>{item.title}</p>
    <h2 style={{ fontFamily:"Serif" , fontSize:"14px"}}>{item.description}</h2>
    <h3 style={{marginLeft:"8%" ,fontSize:"14px"}}>{item.date}</h3>
     <button className="btn btn-danger" >DELETE</button> 
  </div> 
</div>
))
}

</div>
</div>
<div className="col-1">

</div>
</div>
</div>
      );
}
  {/* <h1 className="More">MORE</h1>
  <h2 className="line">______________________</h2>

  <div style={{display:"inline-block",backgroundColor:"white",height:100,width:505,position:"relative",marginTop:"0px",marginLeft:"30%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="fourth.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%"}}>Foootball United the World</p>
<h3 style={{marginLeft:"23%",marginTop:"-2%"}}>Global stars join FIFA in launching Football unites the World campaign.</h3>

</div>
<div style={{display:"inline-block",backgroundColor:"white",height:100,width:505,position:"relative",marginTop:"0px",marginLeft:"65%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="sixth.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%"}}>Foootball Unites the World</p>
<h3 style={{marginLeft:"23%",marginTop:"-2%"}}>Benatia: The world Cup is the most watched event on the planet.</h3>
</div>
<div  style={{display:"inline-block",backgroundColor:"white",height:100,width:505,position:"relative",marginTop:"8.5%",marginLeft:"30%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="seventh.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%"}}>Foootball Unites the World</p>
<h3 style={{marginLeft:"23%",marginTop:"-2%"}}>Paulo Wanchope:"The world Cup is a magical event"</h3>
</div>
<div style={{display:"inline-block",backgroundColor:"white",height:100,width:505,position:"relative",marginTop:"8.5%",marginLeft:"65%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="fifth.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%"}}>Foootball Unites the World</p>
<h3 style={{marginLeft:"23%",marginTop:"-2%"}}>Alex Lalas:The World Cup is something that is above, beyond everything that you do kicking the ball.</h3>
</div> */}
     

export default Top;