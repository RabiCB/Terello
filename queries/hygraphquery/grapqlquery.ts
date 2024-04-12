export const productquery = `query MyQuery {
    products {
      name
      id
      price
      slug
      images{
        url
        id
      }
    }
  }
  
    `;

    export const productdetail=`query MyQuery {
      products(where: {slug: "unisex-long-sleeve-tee"}) {
        id
        name
        description
      }
     
    }
    `
