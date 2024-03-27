
import { Fragment } from "react/jsx-runtime";
import "./Products.css";
import { useEffect, useState } from "react";

function ProductsScreen(){
    const [filter, setFilter] = useState("None");
    const [isSoftwareDIVVisible, setSoftwareDIVVisible] = useState(true);
    const [isHardwareDIVVisible, setHardwareDIVVisible] = useState(true);
    const [isGamingDIVVIsible, setGamingDIVVIsible] = useState(true);

    useEffect(() => {
        const ItemHolder = document.getElementById("ItemHolderProducts");
        if (ItemHolder) {
            const type = ItemHolder.getAttribute("data-filter");
            if (type) {
                setFilter(type);
            }
        }

        if(filter){
            if(filter == "software"){
                setSoftwareDIVVisible(true);
                setHardwareDIVVisible(false);
                setGamingDIVVIsible(false);
            } else if (filter == "Hardware"){
                setSoftwareDIVVisible(false);
                setHardwareDIVVisible(true);
                setGamingDIVVIsible(false);
            } else if (filter == "Gaming"){
                setSoftwareDIVVisible(false);
                setHardwareDIVVisible(false);
                setGamingDIVVIsible(true);
            }
        }
    }, [filter]);

    return <Fragment>
        <div className="ProductGUI">
            <h1 id="ProductTitle">Products</h1>
            <div className="ItemHolderProducts" id="ItemHolderProducts" data-filter={filter}>
                {isSoftwareDIVVisible && <div className="ProductsDIV" id="SoftwareDIV">
                
                </div>}
                {isHardwareDIVVisible && <div className="ProductsDIV" id="HardwareDIV">
                    
                </div>}
                {isGamingDIVVIsible && <div className="ProductsDIV" id="GamingDIV">
                    
                </div>}
            </div>
        </div>
    </Fragment>
}

export default ProductsScreen;