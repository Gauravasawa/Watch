import React from 'react'
import styles from "./ProductPreview.module.css";

const ProductPeview= (props)=>{

    const currentHour =
      new Date().getHours() > 9
        ? new Date().getHours()
        : "0" + new Date().getHours();
    const currentMinutes =
      new Date().getMinutes() > 9
        ? new Date().getMinutes()
        : "0" + new Date().getMinutes();

    return (
      <div className={styles.ProductPre}>
        <img
          src={props.currentPreviewImg}
          alt="Product Preview Default Black strap"
        />
        {
            props.showHeartBeat ?
            <div className={styles.HeartBeat}>
              <i className="fas fa-heartbeat"></i>
              <p>76</p>
            </div> 
            : 
            <div className={styles.HoursText}>
              <p>{`${currentHour}:${currentMinutes}`}</p>
            </div>
        }
      </div>
    );
}

export default ProductPeview