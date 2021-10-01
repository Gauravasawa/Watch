import React, { Component } from 'react';
import styles from './App.module.css';
import ProductPeview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDeatils/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    // currentPreviewImg: "https://imgur.com/iOeUBV7.png",
    currentPreviewImgPos: 0,
    showHeartBeat: false,
  };

  onColorOptionClick= (pos)=>{
    this.setState({ currentPreviewImgPos: pos });
  }

  onFeatureItemClick = (pos)=>{
    console.log(pos);
    let updatedState = false;
    if(pos === 1)
    {
      updatedState = true
    }
    this.setState({showHeartBeat: updatedState});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Topbar />

          <div className={styles.MainContainer}>
            <div className={styles.ProductPre}>
              <ProductPeview
                currentPreviewImg={
                  this.state.productData.colorOptions[
                    this.state.currentPreviewImgPos
                  ].imageUrl
                }
                showHeartBeat={this.state.showHeartBeat}
              />
            </div>
            <div className={styles.ProductDetails}>
              <ProductDetails
                data={this.state.productData}
                onColorOptionClick={this.onColorOptionClick}
                currentPreviewImgPos={this.state.currentPreviewImgPos}
                onFeatureItemClick={this.onFeatureItemClick}
                showHeartBeat={this.state.showHeartBeat}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
