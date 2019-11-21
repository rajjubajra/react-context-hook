import React, { Component } from 'react'
import {ThemeContext} from '../contexts/ThemeContext';


class Navbar extends Component {

  render() {
    return(
      <ThemeContext.Consumer>{(context) => {
        
        console.log(context);
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <nav style={{background: theme.bg, color: theme.syntex}}>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo left" style={{color: theme.syntex }}>Logo</a>
                <ul id="nav-mobile" className="right">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
          </nav>
        );
        }}

      </ThemeContext.Consumer>
    );
  }


/** DIFFERENT OPTION OF CONSUMING CONTEXT-API */

  // static contextType = ThemeContext;

  // render() {
  //   console.log(this.context);
  //   const { isLightTheme, light, dark } = this.context;
  //   const theme = isLightTheme ? light : dark;
  //   return (
  //     <nav style={{background: theme.bg, color: theme.syntex}}>
  //       <div className="nav-wrapper">
  //         <a href="#" className="brand-logo left" style={{color: theme.syntex }}>Logo</a>
  //         <ul id="nav-mobile" className="right">
  //           <li>Home</li>
  //           <li>About</li>
  //           <li>Contact</li>
  //         </ul>
  //       </div>
  //   </nav>
  //   )
  // }


}

export default Navbar;
