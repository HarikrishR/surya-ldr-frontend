// import React from 'react';
// import './serviceCarousel.css';
// import { Button } from 'primereact/button';
// import { Carousel } from 'primereact/carousel';
// import { Tag } from 'primereact/tag';
// // import { ProductService } from './service/ProductService';
// import { ProductService } from './products';

// class ServiceCarousel extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             products: ProductService,
//             responsiveOptions : [
//                 {
//                     breakpoint: '1199px',
//                     numVisible: 3,
//                     numScroll: 1
//                 },
//                 {
//                     breakpoint: '991px',
//                     numVisible: 2,
//                     numScroll: 1
//                 },
//                 {
//                     breakpoint: '767px',
//                     numVisible: 1,
//                     numScroll: 1
//                 }
//             ]
//         }
//     }

//     productTemplate = (product) => {
//         return (
//             <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
//                 <div className="mb-3">
//                     <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
//                 </div>
//                 <div>
//                 <h4 className="mb-1">{product.name}</h4>
//                     <h6 className="mt-0 mb-3">${product.price}</h6>
                    
//                     <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
//                         <Button icon="pi pi-search" rounded />
//                         <Button icon="pi pi-star-fill" rounded severity="success" />
//                     </div>

//                 </div>
//             </div>
//         );
//     };

//     render(){
//         return(
//             <>
//                 <div className="card">
//                     <Carousel value={this.state.products} numVisible={3} numScroll={3} responsiveOptions={this.state.responsiveOptions} itemTemplate={this.productTemplate} />
//                 </div>
//             </>
//         )
//     }
// }

// export default ServiceCarousel;