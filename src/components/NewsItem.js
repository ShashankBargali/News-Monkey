// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export class NewItem extends Component {
//     handleClick = (element)=>{
//         console.log(element)
        
//     }
//     render() {
//         let ele = {
//             title = '',
//             description = '',
//             imgUrl = '',
//             url = '',
//             content = ''
//         }
//         ele: this.props;
//         return (
//             <>
//                 <div className="xl:w-1/3 md:w-1/2 p-4" >
//                     <div className="bg-gray-100 p-6 rounded-lg" style={{boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
//                         <img className="h-40 rounded w-full object-cover object-center mb-6" src={ele.imgUrl} alt="content" />
//                         <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//                         <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{ele.title}...</h2>
//                         <p className="leading-relaxed text-base">{ele.description}...</p>

//                         <button onClick={()=>{this.handleClick()}} className="py-2 px-4 my-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleClick}>Read More</button>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// export default NewItem
