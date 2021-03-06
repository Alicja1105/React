import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {FilterableProductTable} from './FilterableProductTable.js'

//import{nazwa clasy bez rozszerzenia}  from './index. import {App} from './app.js'
// class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }


// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.author}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable extends React.Component {
//   render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;

//     const rows = [];
//     let lastCategory = null;

//     this.props.products.forEach((product) => {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name}
//         />
//       );
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Kategoria</th>
//             <th>Autor</th>
//             <th>Cena</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }
  
//   handleFilterTextChange(e) {
//     this.props.onFilterTextChange(e.target.value);
//   }
  
//   handleInStockChange(e) {
//     this.props.onInStockChange(e.target.checked);
//   }
  
//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           onChange={this.handleFilterTextChange}
//         />
//         <p>
//           <input
//             type="checkbox"
//             checked={this.props.inStockOnly}
//             onChange={this.handleInStockChange}
//           />
//           {' '}
//           Poka?? przedmioty na stanie
//         </p>
//       </form>
//     );
//   }
// }

// class FilterableProductTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterText: '',
//       inStockOnly: false
//     };
    
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }

//   handleFilterTextChange(filterText) {
//     this.setState({
//       filterText: filterText
//     });
//   }
  
//   handleInStockChange(inStockOnly) {
//     this.setState({
//       inStockOnly: inStockOnly
//     })
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//           onFilterTextChange={this.handleFilterTextChange}
//           onInStockChange={this.handleInStockChange}
//         />
//         <ProductTable
//           products={this.props.products}
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//       </div>
//     );
//   }
// }


const PRODUCTS = [
  {category: 'Fantasy', author: 'J.R.R. Tolkien', price: '39,90 z??', stocked: true, name: 'W??adca Pier??cieni'},
  {category: 'Fantasy', author: 'Andrzej Sapkowski', price: '25,99 z??', stocked: true, name: 'Wied??min'},
  {category: 'Fantasy', author: 'J.K. Rowling', price: '35,99 z??', stocked: true, name: 'Harry Potter'},
  {category: 'Fantasy', author: 'Holly Black', price: '45,99 z??', stocked: false, name: 'Okr??tny ksi????e'},
  {category: 'Fantasy', author: 'Stephen King', price: '30,00 z??', stocked: false, name: 'Mroczna wie??a'},
  {category: 'Horror', author: 'Stephen King',price: '22,55 z??', stocked: true, name: 'L??nienie'},
  {category: 'Horror', author: 'Stephen King', price: '21,99 z??', stocked: false, name: 'Miasteczko Salem'},
  {category: 'Horror', author: 'Bram Stoker', price: '24,99 z??', stocked: true, name: 'Drakula'},
  {category: 'Science Fiction', author: 'George Orwell', price: '16,99 z??', stocked: true, name: 'Rok 1984'},
  {category: 'Science Fiction', author: 'Dmitrij G??uchowski', price: '26,99 z??', stocked: true, name: 'Metro 2033'},
  {category: 'Science Fiction', author: 'Orson Scott Card', price: '55,00 z??', stocked: true, name: 'Gra Endera'},
  {category: 'Science Fiction', author: 'Jaros??aw Grz??dowicz', price: '61,99 z??', stocked: false, name: 'Hel'},
  {category: 'Bajki dla dzieci', author: 'Jan Brzechwa', price: '24,99 z??', stocked: false, name: 'Brzechwa dzieciom'},
  {category: 'Bajki dla dzieci', author: 'Charles Perrault', price: '19,99 z??', stocked: true, name: '??pi??ca kr??lewna'},
  {category: 'Bajki dla dzieci', author: 'Sebastian Braun', price: '9,99 z??', stocked: false, name: 'Stra??ak'},
  {category: 'Bajki dla dzieci', author: 'Sebastian Braun', price: '15,00 z??', stocked: true, name: 'Gucio na tropie'}
];
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);

