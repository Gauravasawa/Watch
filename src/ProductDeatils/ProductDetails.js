import React from "react";
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [styles.ProductImg];
    if (pos === props.currentPreviewImgPos) {
      classArr.push(styles.SeletedProductImg);
    }
    return (
      <img
        key={pos}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
        onClick={() => props.onColorOptionClick(pos)}
      />
    );
  });

  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [styles.Featurebutton];

    if (pos === 1 && props.showHeartBeat) {
      classArr.push(styles.SelectedFeaturebutton);
    } else if (pos === 0 && !props.showHeartBeat) {
      classArr.push(styles.SelectedFeaturebutton);
    }
    return (
      <button
        onClick={() => props.onFeatureItemClick(pos)}
        key={pos}
        className={classArr.join(" ")}
      >
        {item}
      </button>
    );
  });

  return (
    <div className={styles.ProductDetails}>
      <h1 className={styles.ProductTitle}>{props.data.title}</h1>
      <p className={styles.Productinfo}>{props.data.description}</p>

      <h3 className={styles.SectionHeading}>Select Color</h3>
      <div>{colorOptions}</div>
      <h3 className={styles.SectionHeading}>Features</h3>
      <div>{featureList}</div>
      <div>
        <button className={styles.BuyNowbutton}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
