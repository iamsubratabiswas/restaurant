import React from 'react';

const MenuCard = ({menuData1}) => {
    // console.log(menuData1);
  return (
    <>
      <section className="main-card--cointainer">
       {menuData1.map((curElem)=>{
        // destructruing
        const {id,name,category,image,description }=curElem;
        return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle" style={{color:"red"}}>{name}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">Read</div>
                    <img src={image} alt="" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>  
            </>
          )
        })}
      </section>
    </>
  );
}

export default MenuCard