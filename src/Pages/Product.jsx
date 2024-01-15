import React from 'react';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { useParams } from 'react-router-dom';
import all_product from '../Components/Assets/all_product';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const params = useParams();
    const product = all_product.find((e)=> e.id === +params.productId )
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    )
}

export default Product