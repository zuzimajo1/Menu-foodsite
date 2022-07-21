import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Data} from './data';
import './index.css';
import {Navigation} from './navigation'
import {Contents} from './contents'; 


const allCategories = ["all",...new Set(Data.map((items) => items.category))];
console.log(allCategories)

const Main = ()=>{
     const [Datas,SetDatas] = React.useState(Data);
     const [Navigations, SetNavigations] = React.useState(allCategories);
    
    
      const Navigate = (category)=>{    
      if(category === "all"){
        SetDatas(Data);
        return;
      }
      const DisplayNavigate = Data.filter((items)=> items.category === category);
        SetDatas(DisplayNavigate);
      };
    

    return (
      <main>
        <div className="firstsection">
          <h2 className="maintitle">Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="navigation">
          <Navigation Navigations={Navigations} Navigate={Navigate} />
        </div>
        <div>
          <div>
            <Contents MenuItems={Datas} />
          </div>
        </div>
        <h4 className='author'>Zuzim Ajo &#169; 2021</h4>
      </main>
    );

}




ReactDOM.render(
    <Main />,
  document.getElementById('root')
);


