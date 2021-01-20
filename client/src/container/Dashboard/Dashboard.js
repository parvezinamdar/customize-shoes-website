import React , { Component } from 'react';
import {storage} from '../../components/config/firebaseConfig';

import { connect } from 'react-redux';

import firebase from '../../firebase';

import ColorPicker from '../../components/colorPicker/colorPicker';
import './Dashboard.css';
 
import Classic from '../../assets/img/Shoes/Classic/Classic.png';
import Nike from '../../assets/img/Shoes/Nike/Nike.png';
import Reebok from '../../assets/img/Shoes/Reebok/Reebok.png';
import Vintage from '../../assets/img/Shoes/Vintage/Vintage.png';
import Adidas from '../../assets/img/Shoes/Adidas/Adidas.png';

//Classic Display and Settings
import ClassicDisplay from '../Categories/Classic/Display/ClassicDisplay';
import ClassicSettings from '../Categories/Classic/Settings/ClassicSettings';

//Nike Display and Settings
import NikeDisplay from '../Categories/Nike/Display/NikeDisplay';
import NikeSettings from '../Categories/Nike/Settings/NikeSettings';

//Reebok Display and Settings
import ReebokDisplay from '../Categories/Reebok/Display/ReebokDisplay';
import ReebokSettings from '../Categories/Reebok/Settings/ReebokSettings';

//Vintage Display and Settings
import VintageDisplay from '../Categories/Vintage/Display/VintageDisplay';
import VintageSettings from '../Categories/Vintage/Settings/VintageSettings';

//Vintage Display and Settings
import AdidasDisplay from '../Categories/Adidas/Display/AdidasDisplay';
import AdidasSettings from '../Categories/Adidas/Settings/AdidasSettings';

//Modal
import Modal from '../../components/UI/Modal/Modal';

//Button
import Button from '../../components/UI/Button/Button';

//Axios
import axios from '../../axios-orders';

//Spinner
import Spinner from '../../components/UI/Spinner/Spinner';

//WithErrorHandler
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import * as actions from '../../store/actions/index';

// import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const URL = "https://teachablemachine.withgoogle.com/models/_EBLerk80/";
let model, webcam, maxPredictions;

class Dashboard extends Component {
    state = {
        shoes: {
            categories: "classic",
            shoesSize: "7",
            text: "",
            textSize: "14",
            textColor: "black",
            textStyle: "Roboto Slab",
            url: "",
            shoesImage: `${Classic}`
        },
        colorPicker:"ffffff",
        pathId: "id1",
        purchasing: false,
        loading: false,
        touched: false,
        mlTitle: 'Classic',
        shoesName: 'Classic',
        recommendationShoes: [],
        recommendationLoading: false
    }
    
    componentDidMount(){
        const ref = firebase.database().ref('reccomendation');
            ref.on('value', (snapshot) => {
                let dataShoes = snapshot.val();
                console.log('dataShoes', dataShoes)
                let shoes = [];
                for(let shoe in dataShoes){
                    shoes.push({
                        id: shoe,
                        name: dataShoes[shoe],   
                    });
                }
                this.setState({recommendationShoes: shoes})
            })

    }
    handleShoesCat = (e) => {
        this.setState({shoesCategories: e.target.src});
    }

    handleText = (e) => {
        let newObj = {...this.state};
        newObj.shoes.text = e.target.value;
        this.setState({text: e.target.value, touched: true}); 
    }

    handleImageUpload = (e) => {
        if(e.target.files[0]){
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    console.log(snapshot)
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        let imgObj = {...this.state};
                        imgObj.shoes.url = url;
                        this.setState({url: url, touched:true});
                        console.log("url",url)
                    })
                }
            )
        }
    }

    handleTextSize = (e) => {
        console.log('Radio',e.target.value);
        let sizeObj = {...this.state};
        sizeObj.shoes.textSize = e.target.value;
        if(e.target.value === '12'){
            this.setState({textSize: e.target.value});
            console.log("12", e.target.value);
        }
        if(e.target.value === '14'){
            this.setState({textSize: e.target.value});
            console.log("14", e.target.value);
        }
        if(e.target.value === '20'){
            this.setState({textSize: e.target.value});
            console.log("20", e.target.value);
        }
    }
    handleShoesSize = (e) => {
        console.log('Radio',e.target.value);
        let sizeObj = {...this.state};
        sizeObj.shoes.shoesSize = e.target.value;
        if(e.target.value === '7'){
            this.setState({shoesSize: e.target.value});
            console.log("7", e.target.value);
        }
        if(e.target.value === '8'){
            this.setState({shoesSize: e.target.value});
            console.log("8", e.target.value);
        }
        if(e.target.value === '9'){
            this.setState({shoesSize: e.target.value});
            console.log("9", e.target.value);
        }
        if(e.target.value === '10'){
            this.setState({shoesSize: e.target.value});
            console.log("10", e.target.value);
        }
        if(e.target.value === '11'){
            this.setState({shoesSize: e.target.value});
            console.log("11", e.target.value);
        }
    }

    handleTextStyle = (e) => {
        console.log('Radio',e.target.value);
        let styleObj = {...this.state};
        styleObj.shoes.textStyle = e.target.value;

        if(e.target.value ===  "Roboto"){
            this.setState({textStyle: e.target.value})
        }
        if(e.target.value ===  "Roboto Slab"){
            this.setState({textStyle: e.target.value})
        }
        if(e.target.value ===  "Poppins"){
            this.setState({textStyle: e.target.value})
        }
        if(e.target.value ===  "Open Sans"){
            this.setState({textStyle: e.target.value})
        }
        if(e.target.value === "Montserrat"){
            this.setState({textStyle: e.target.value})
        }
        if(e.target.value ===  "Oswald"){
            this.setState({textStyle: e.target.value})
        }
    }

    formatText = () => {
        const size = this.state.shoes.textSize;
        return parseInt(size,10);
    }

    handleTextColor = (e) => {
        let textObj = {...this.state};
        textObj.shoes.textColor = e.target.value;
        this.setState({textColor:textObj.shoes.textColor});
    }

    handleBase = (e) => {
        console.log('id',e.target.id)
        let baseObj = {...this.state};
        baseObj.shoes.pathId = e.target.value;
        if(e.target.id ===  "id1"){
            this.setState({pathId: e.target.id, colorPicker: "ffffff"})
        }
        if(e.target.id ===  "id2"){
            this.setState({pathId: e.target.id,colorPicker: "ffffff"})
        }
        if(e.target.id ===  "id3"){
            this.setState({pathId: e.target.id,colorPicker: "ffffff"})
        }
        if(e.target.id ===  "id4"){
            this.setState({pathId: e.target.id,colorPicker: "ffffff"})
        }
        if(e.target.id ===  "id5"){
            this.setState({pathId: e.target.id,colorPicker: "ffffff"})
        }
        if(e.target.id ===  "id6"){
            this.setState({pathId: e.target.id,colorPicker: "ffffff"})
        }
        if(e.target.id ===  "id7"){
            this.setState({pathId: e.target.id,colorPicker: "ffffff"})
        }
    }

    handleChangeColor = (e) => {
        let newHeader = e.target.id;
        this.setState({colorPicker: newHeader, touched:true})
    }

    handleChangeCat = (e) => {
        this.setState({loading:true});
        let catObj = {...this.state};
        catObj.shoes.categories = e.target.value;
        catObj.shoes.text = "";
        catObj.shoes.url = "";
        catObj.shoes.shoesSize = "7";
        catObj.shoes.textColor = "black";
        catObj.shoes.textSize = "14";
        if(e.target.value === "classic"){
            catObj.shoes.shoesImage = `${Classic}`;
            this.setState({
                categories: catObj.shoes.categories, 
                text: catObj.shoes.text,
                shoesSize: catObj.shoes.shoesSize,
                colorPicker: "ffffff",
                pathId: "id1",
                textSize: catObj.shoes.textSize,
                url: "",
                textColor: catObj.shoes.textColor,
                shoesImage: `${Classic}`,
                loading: false,
                touched: false,
                mlTitle: '',
                shoesName: 'Classic'
            });
            console.log('[Classic]',e.target.value);
            this.init();
        }
        if(e.target.value === "vintage"){
            catObj.shoes.shoesImage = `${Vintage}`;
            this.setState({
                categories: catObj.shoes.categories, 
                text: catObj.shoes.text,
                shoesSize: catObj.shoes.shoesSize,
                colorPicker: "ffffff",
                pathId: "id1",
                textSize: catObj.shoes.textSize,
                url: "",
                textColor: catObj.shoes.textColor,
                shoesImage: `${Vintage}`,
                loading: false,
                touched: false,
                mlTitle: '',
                shoesName: 'Vintage'
            });
            console.log('[Vintage]',e.target.value);
            this.init();
        }
        if(e.target.value === "nike"){
            catObj.shoes.shoesImage = `${Nike}`;
        
            this.setState({
                categories: catObj.shoes.categories,
                text: catObj.shoes.text, 
                shoesSize: catObj.shoes.shoesSize,
                colorPicker: "ffffff", 
                pathId: "id1",
                url: "",
                textSize: catObj.shoes.textSize,
                textColor: catObj.shoes.textColor,
                shoesImage: `${Nike}`,
                loading: false,
                touched: false,
                mlTitle: '',
                shoesName: 'Nike'
            });
            console.log('[Nike]',e.target.value);
            this.init();
        }
        if(e.target.value === "reebok"){
            catObj.shoes.shoesImage = `${Reebok}`;
            this.setState({
                categories: catObj.shoes.categories, 
                text: catObj.shoes.text,
                shoesSize: catObj.shoes.shoesSize,
                colorPicker: "ffffff",
                pathId: "id1",
                url: "",
                textSize: catObj.shoes.textSize,
                textColor: catObj.shoes.textColor,
                shoesImage: `${Reebok}`,
                loading: false,
                touched: false,
                mlTitle: '',
                shoesName: 'Reebok'
            });
            console.log('[Reebok]',e.target.value);
            this.init();
        }
        if(e.target.value === "adidas"){
            catObj.shoes.shoesImage = `${Adidas}`;
            this.setState({
                categories: catObj.shoes.categories, 
                text: catObj.shoes.text,
                shoesSize: catObj.shoes.shoesSize,
                colorPicker: "ffffff",
                pathId: "id1",
                url: "",
                textSize: catObj.shoes.textSize,
                textColor: catObj.shoes.textColor,
                shoesImage: `${Adidas}`,
                loading: false,
                touched: false,
                mlTitle: '',
                shoesName: 'Adidas'
            });
            console.log('[Adidas]',e.target.value);
            this.init();
        }
        
    }

    init = async() => {
        // this.setState({recommendationLoading: true});
        try{
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";
        
            model = await tmImage.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();
        
            webcam = new Image();
            webcam.src = `${Reebok}`;
    
            this.predict();
        }catch(e){
            console.log('[ERROR]', e);
        }
    }

    predict = async() => {
        try{
            let v1;
            const prediction1 = await model.predict(webcam);
            const prediction2 = await model.predict(webcam);
            for (let i = 0; i < maxPredictions; i++) {
                const prediction = await model.predict(webcam);
                console.log(prediction[i].className + ": " + prediction[i].probability);
                if(prediction[i].probability >= 0.80)
                {
                        v1 = prediction[i].className;
                }
                // console.log('[prediction]',prediction);
            }
            this.setState({mlTitle: v1});
            // console.log('[V1]',v1);
            // this.setState({recommendationLoading: false});
            
            // console.log('[prediction1]',prediction1);
            // console.log('[prediction2]',prediction2);
        }
        catch(e){
            console.log('[ERROR1]',e);
            // this.setState({recommendationLoading: false});
        }
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true});   
    }
    
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false});
    }
    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        const queryParams = [];
        for(let i in this.state.shoes){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.shoes[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search:'?' + queryString
        });
    }
    
    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return(
            <div>
                {
                    this.state.loading ? <Spinner /> :  
                        <React.Fragment>
                            <Modal 
                                modalClosed={this.purchaseCancelHandler}
                                purchaseContinued={this.purchaseContinueHandler}
                                show={this.state.purchasing} >
                                {
                                    this.state.shoes.categories === "classic" ? 
                                        <ClassicDisplay 
                                            display={this.state.shoes}
                                            colorPicker={this.state.colorPicker} 
                                            pathId={this.state.pathId} 
                                            textFormat={this.formatText()} 
                                            dragging={false}
                                            /> : null
                                }
                                {
                                    this.state.shoes.categories === "vintage" ? 
                                        <VintageDisplay 
                                            display={this.state.shoes}
                                            colorPicker={this.state.colorPicker} 
                                            pathId={this.state.pathId} textFormat={this.formatText()} /> : null 
                                }
                                {
                                    this.state.shoes.categories === "nike" ? 
                                        <NikeDisplay 
                                            display={this.state.shoes}
                                            colorPicker={this.state.colorPicker} 
                                            pathId={this.state.pathId} textFormat={this.formatText()} /> : null 
                                }
                                {
                                    this.state.shoes.categories === "reebok" ? 
                                        <ReebokDisplay 
                                            display={this.state.shoes}
                                            colorPicker={this.state.colorPicker} 
                                            pathId={this.state.pathId} textFormat={this.formatText()} /> : null
                                }  
                                {
                                    this.state.shoes.categories === "adidas" ? 
                                        <AdidasDisplay 
                                            display={this.state.shoes}
                                            colorPicker={this.state.colorPicker} 
                                            pathId={this.state.pathId} textFormat={this.formatText()} /> : null
                                } 
                                <OrderSummary 
                                    modalClosed={this.purchaseCancelHandler}
                                    purchaseContinued={this.purchaseContinueHandler}/> 
                            </Modal> 
                            <div className="container-fluid p-5 dashboard">
                    
                                <div className="row">
                                    {/* Settings Section*/}
                                    <div className="col-lg-3 col-md-4">
                                        {/* ClassicSettings */}
                                        { 
                                            this.state.shoes.categories === "classic" ? <ClassicSettings 
                                                    pathId={this.state.pathId}
                                                    textSizeVal={this.state.shoes.textSize}
                                                    textStyleVal={this.state.shoes.textStyle}
                                                    text={this.handleText}
                                                    shoesCat={this.handleShoesCat}
                                                    uploadImage={this.handleImageUpload}
                                                    textSize={this.handleTextSize}
                                                    textStyle={this.handleTextStyle}
                                                    textColor={this.handleTextColor}
                                                    handleBase={this.handleBase}
                                                /> 
                                            : null
                                        }
                                        {/* VintageSettings */}
                                        { 
                                            this.state.shoes.categories === "vintage" ? <VintageSettings 
                                                    pathId={this.state.pathId}
                                                    textSizeVal={this.state.shoes.textSize}
                                                    textStyleVal={this.state.shoes.textStyle}
                                                    text={this.handleText}
                                                    shoesCat={this.handleShoesCat}
                                                    uploadImage={this.handleImageUpload}
                                                    textSize={this.handleTextSize}
                                                    textStyle={this.handleTextStyle}
                                                    textColor={this.handleTextColor}
                                                    handleBase={this.handleBase}
                                                /> 
                                            : null
                                        }

                                        {/* NikeSettings */}
                                        { 
                                            this.state.shoes.categories === "nike" ? <NikeSettings 
                                                    pathId={this.state.pathId}
                                                    textSizeVal={this.state.shoes.textSize}
                                                    textStyleVal={this.state.shoes.textStyle}
                                                    text={this.handleText}
                                                    shoesCat={this.handleShoesCat}
                                                    uploadImage={this.handleImageUpload}
                                                    textSize={this.handleTextSize}
                                                    textStyle={this.handleTextStyle}
                                                    textColor={this.handleTextColor}
                                                    handleBase={this.handleBase}
                                                /> 
                                            : null
                                        }

                                        {/* ReebokSettings */}
                                        { 
                                            this.state.shoes.categories === "reebok" ? <ReebokSettings 
                                                    pathId={this.state.pathId}
                                                    textSizeVal={this.state.shoes.textSize}
                                                    textStyleVal={this.state.shoes.textStyle}
                                                    text={this.handleText}
                                                    shoesCat={this.handleShoesCat}
                                                    uploadImage={this.handleImageUpload}
                                                    textSize={this.handleTextSize}
                                                    textStyle={this.handleTextStyle}
                                                    textColor={this.handleTextColor}
                                                    handleBase={this.handleBase}
                                                /> 
                                            : null
                                        }
                                        { 
                                            this.state.shoes.categories === "adidas" ? <AdidasSettings 
                                                    pathId={this.state.pathId}
                                                    textSizeVal={this.state.shoes.textSize}
                                                    textStyleVal={this.state.shoes.textStyle}
                                                    text={this.handleText}
                                                    shoesCat={this.handleShoesCat}
                                                    uploadImage={this.handleImageUpload}
                                                    textSize={this.handleTextSize}
                                                    textStyle={this.handleTextStyle}
                                                    textColor={this.handleTextColor}
                                                    handleBase={this.handleBase}
                                                /> 
                                            : null
                                        }
                                    </div>{/* Settings Section End Here*/}

                                    {/* Display Section */}
                                    <div className="col-lg-7 col-md-8 display-padding">
                                        
                                        {
                                            this.state.shoes.categories === "classic" ? 
                                                <ClassicDisplay 
                                                    display={this.state.shoes}
                                                    colorPicker={this.state.colorPicker} 
                                                    pathId={this.state.pathId} textFormat={this.formatText()} /> : null
                                        }
                                        {
                                            this.state.shoes.categories === "vintage" ? 
                                                <VintageDisplay 
                                                    display={this.state.shoes}
                                                    colorPicker={this.state.colorPicker} 
                                                    pathId={this.state.pathId} textFormat={this.formatText()} /> : null 
                                        }
                                        {
                                            this.state.shoes.categories === "nike" ? 
                                                <NikeDisplay 
                                                    display={this.state.shoes}
                                                    colorPicker={this.state.colorPicker} 
                                                    pathId={this.state.pathId} textFormat={this.formatText()} /> : null 
                                        }
                                        {
                                            this.state.shoes.categories === "reebok" ? 
                                                <ReebokDisplay 
                                                    display={this.state.shoes}
                                                    colorPicker={this.state.colorPicker} 
                                                    pathId={this.state.pathId} textFormat={this.formatText()} /> : null
                                        }
                                        {
                                            this.state.shoes.categories === "adidas" ? 
                                                <AdidasDisplay 
                                                    display={this.state.shoes}
                                                    colorPicker={this.state.colorPicker} 
                                                    pathId={this.state.pathId} textFormat={this.formatText()} /> : null
                                        }

                                        <div className="mobile-content">
                                            <div className="color-picker-content">
                                                <ColorPicker color={this.handleChangeColor}/>
                                                <div className="shoes-size-content mt-4">
                                                    <div>
                                                        <h5 className="mb-3">Shoes Size:</h5>
                                                    </div>
                                                    <div className="shoes-size">
                                                        <span className="small-size">
                                                            <h5 className="ml-1">7</h5>
                                                            <input onChange={this.handleShoesSize} type="radio" id="small"  value="7" checked={this.state.shoes.shoesSize === '7' ? true : false} />
                                                        </span>
                                                        <span className="medium-size">
                                                            <h5 className="ml-1">8</h5>
                                                            <input onChange={this.handleShoesSize} type="radio" id="medium" value="8"  checked={this.state.shoes.shoesSize === '8' ? true : false}/>
                                                        </span>
                                                        <span className="medium-size">
                                                            <h5 className="ml-1">9</h5>
                                                            <input onChange={this.handleShoesSize} type="radio" id="large" value="9"  checked={this.state.shoes.shoesSize === '9' ? true : false}/>
                                                        </span>
                                                        <span className="small-size">
                                                            <h5 className="ml-1">10</h5>
                                                            <input onChange={this.handleShoesSize} type="radio" id="small"  value="10"  checked={this.state.shoes.shoesSize === '10' ? true : false}/>
                                                        </span>
                                                        <span className="medium-size">
                                                            <h5 className="ml-1">11</h5>
                                                            <input onChange={this.handleShoesSize} type="radio" id="medium" value="11" checked={this.state.shoes.shoesSize === '11' ? true : false}/>                                                      
                                                        </span>
                                                    </div>
                                                    <div className="shoes-size-content mt-5">
                                                        <div>
                                                            <h5 className="mb-3">Price: Rs 999 /-</h5>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="choose-item">
                                                <select onChange={this.handleChangeCat} className="form-control form-control-sm mb-2">
                                                    <option>classic</option>
                                                    {/* <option>vintage</option> */}
                                                    <option>nike</option>
                                                    <option>reebok</option>
                                                    {/* <option>adidas</option> */}
                                                </select>
                                            </div>  
                                        </div>
                                    </div>{/* Display Section End Here*/}

                                    <div className="col-lg-2 col-md-2 mobile-button">
                                        <Button btnType="lightblue" clicked={this.purchaseHandler} disabled={!this.state.touched} >Add To Cart</Button>
                                    </div>
                                    
                                </div>  
                            </div>
                            <div className="container-recommendation container-fluid px-5 mb-4">
                                <h3 className="mb-4">Recommended for you</h3>
                                <Slider {...settings}>
                                    {
                                                    
                                        this.state.recommendationShoes.map(el => {
                                            console.log('NAME', el.id);
                                            if(el.id === this.state.shoesName){
                                                // console.log('EL',el.name)
                                            
                                                let name = Object.values(el.name);
                                                
                                                return name.map((element, i) => {
                                                    // console.log('element.name',element.name);
                                                    return  <div key={i} className="card-shoes">
                                                                <div className="card-shoes-image">
                                                                    <img src={element.img} alt="Nike" />
                                                                </div>
                                                                <div className="card-shoes-details">
                                                                    <h6>{element.category}</h6>
                                                                    <p>{element.name}</p>
                                                                    <span>Shoes</span>
                                                                    <p className="price">$ {element.price}</p>
                                                                </div>
                                                            </div>
                                                    
                                                })
                                            }
                                            return true;
                                        })
                                    }
                                </Slider>
                                
                        </div>
                    </React.Fragment>
                }
               
            </div>
                
            
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Dashboard,axios)); 