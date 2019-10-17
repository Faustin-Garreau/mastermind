import React from 'react';
import "../App.css";
import Case from "./Case.js";
import Button from "./Button.js";


class Controle extends React.Component {

    idcolor = (id) => {
        console.log(id);
    }

    render() {
        return (     
            <footer>
            <div className="select p-2 flex justify-around md:px-32 lg:px-64">
                <div className="palette flex justify-around w-4/5">
                 <Case colorSelect={this.idcolor} color="red"></Case>
                 <Case colorSelect={this.idcolor} color="orange"></Case>
                 <Case colorSelect={this.idcolor} color="yellow"></Case>
                 <Case colorSelect={this.idcolor} color="green"></Case>
                 <Case colorSelect={this.idcolor} color="blue"></Case>
                 <Case colorSelect={this.idcolor} color="purple"></Case>
                </div>
                  <Button></Button>
             </div>
         </footer>
        );
    }
  }
  
  export default Controle;
  



