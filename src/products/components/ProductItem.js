import React from 'react'

function ProductItem({ product }) {
  return (
    <li className="Product-item">
      <header>
        <img src={Product.urlImage} alt={Product.title} />
        <div className="user-info">
          <strong>{Product.title}</strong>
          {/* <span>{Product.techs.join(', ')}</span> */}
        </div>
      </header>
      <p>{Product.description}</p>
      {/* <a href={`https://github.com/${Product.github_username}`}>Acessar perfil no Github</a> */}
    </li>
  )
}

export default ProductItem
