import './menuitem.scss'
const MenuItem = (props) => {
    return(
        <div className="item-res">
            <div className="col-auto">
                <div className="item-res__img">
                    <img src={props.data.image} />
                </div>
            </div>
            <div className="col">
                <div className="flex-row">
                    <div className="col">
                        <div className="item-res__content">
                            <h4 className="item-res__name">{props.data.name}</h4>
                            <div className="item-res__note">{props.data.note}</div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="prices">
                            {!!props.data.currentPrice &&
                                <div className="prices__sale-price">
                                    {props.data.currentPrice}
                                </div>
                            }
                            
                            {!!props.data.salePrice &&
                                <div className="prices__sale-price">
                                    {props.data.salePrice}
                                </div>
                            }
                            
                            {!!props.data.oldPrice &&
                                <div className="prices__old-price">
                                    {props.data.oldPrice}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {!!props.data.edit &&
                    <div className="item-res__edit">
                        <span className="textlink item-res__link">Chỉnh sửa</span>
                        <span className="textlink item-res__link">x2</span>
                    </div>
                }
            </div>
            
            {/* <div className="flex-row"></div> */}
        </div>
    )
}
export default MenuItem