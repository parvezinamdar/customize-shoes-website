import React, { Component } from 'react';
import './ReebokSettings.css';
import '../../../../assets/css/settings.css';

// Bases
import Base1 from '../../../../assets/img/Shoes/Reebok/base1.png';
import Base2 from '../../../../assets/img/Shoes/Reebok/base2.png';
import Base3 from '../../../../assets/img/Shoes/Reebok/base3.png';
import Base4 from '../../../../assets/img/Shoes/Reebok/base4.png';
import Base5 from '../../../../assets/img/Shoes/Reebok/base5.png';
import Base6 from '../../../../assets/img/Shoes/Reebok/base6.png';

class ReebokSettings extends Component {
    render(){
        return (
            <div className="card settings">
                {/* Upper Setting */}
                <div className="upper-settings">
                    <h3 className="mt-3 mb-2 text-center" >CLASSIC SHOES</h3>
    
                    {/* Logo */}
                    <h4 className="ml-3 mt-4 mb-2 upload-logo" >BRAND IT!</h4>
                    <div className="form-group px-3">
                        <input onChange={this.props.uploadImage} type="file" name="file" id="file" className="inputfile form-control-file mb-2"/>
                        <label htmlFor="file"><i className="fas fa-upload"></i>Choose a Logo</label>
                    </div>
    
                    {/* Style Color */}
                    <h4 className="ml-3 my-3">YOUR STYLE COLOR</h4>
                    <div className="img-shoes-categories">
                        <div onClick={this.props.handleBase} className="shoes-img mb-1" >
                            <span className={`${this.props.pathId === "id1" ? 'spanactive' : ''}`}></span>
                            <img src={Base1} alt="classic" id="id1"/>
                        </div>
                        <div onClick={this.props.handleBase} className="shoes-img mb-1" >
                            <span className={`${this.props.pathId === "id2" ? 'spanactive' : ''}`}></span>
                            <img src={Base2} alt="nike" id="id2"/>
                        </div>
                        <div onClick={this.props.handleBase} className="shoes-img mb-1" >
                            <span className={`${this.props.pathId === "id3" ? 'spanactive' : ''}`}></span>
                            <img src={Base3} alt="reebok" id="id3"/>
                        </div>
                        <div onClick={this.props.handleBase} className="shoes-img mb-1" >
                            <span className={`${this.props.pathId === "id4" ? 'spanactive' : ''}`}></span>
                            <img src={Base4} alt="adidas" id="id4"/>
                        </div>
                        <div onClick={this.props.handleBase} className="shoes-img mb-1" >
                            <span className={`${this.props.pathId === "id5" ? 'spanactive' : ''}`}></span>
                            <img src={Base5} alt="adidas" id="id5"/>
                        </div>
                        <div onClick={this.props.handleBase} className="shoes-img mb-1" >
                            <span className={`${this.props.pathId === "id6" ? 'spanactive' : ''}`}></span>
                            <img src={Base6} alt="adidas" id="id6"/>
                        </div>
                    </div>
                </div>
                
                {/* Lower Setting */}
                <div className="lower-settings">
                    <div className="cool-text">
                        <h4 id="addText" className="text-center">ADD A COOL TEXT</h4>
                    </div>   
                    <div className="input-text">
                        <p className="text-danger">Note: You can drag your text</p>
    
                        {/* Input Text */}
                        <input onChange={this.props.text} type="text" className="form-control form-control-sm mb-2" placeholder="Enter Text" />
                        <h4 className=" mt-3 mb-3">TEXT COLOR</h4>
                        <select onChange={this.props.textColor} className="form-control form-control-sm mb-2">
                            <option>Black</option>
                            <option>White</option>
                            <option>Red</option>
                            <option>Blue</option>
                        </select> 
    
                        {/* Text Size*/}
                        <h4 className="mt-4 mb-3">TEXT SIZE</h4>
                        <div className="text-size">
                        <span className="small-size">
                            <input onChange={this.props.textSize} type="radio" id="small"  value="12" checked={this.props.textSizeVal === '12' ? true : false}/>
                            <span>aa</span>
                        </span>
                        <span className="medium-size">
                            <input onChange={this.props.textSize} type="radio" id="medium" value="14"  checked={this.props.textSizeVal === '14' ? true : false }/>
                            <span>aA</span>
                        </span>
                        <span className="medium-size">
                            <input onChange={this.props.textSize} type="radio" id="large" value="20"  checked={this.props.textSizeVal === '20' ? true : false }/>
                            <span>AA</span>
                        </span>
                        </div>
                        
                        {/* Text Style*/}
                        <h4 className="mt-4 mb-3">TEXT STYLE</h4>
                        <select style={{ fontFamily: `${this.props.textStyleVal}`}} onChange={this.props.textStyle} className="form-control form-control-sm mb-2">
                            <option id="roboto-slab">Roboto Slab</option>
                            <option id="roboto">Roboto</option>
                            <option id="poppins">Poppins</option>
                            <option id="open-sans">Open Sans</option>
                            <option id="montserrat">Montserrat</option>
                            <option id="oswald">Oswald</option>
                        </select> 
                    </div> 
                </div>
                
            </div>
        );
    }
    
}

export default ReebokSettings;