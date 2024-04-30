import { api } from "../../Constants";
import {
  getTishirts,
  productdetail,
  productquery,
} from "../hygraphquery/grapqlquery";

export async function getProducts() {
  const response = await fetch(`${api.url}`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: productquery,
    }),
  });
  const json = await response.json();

  return json.data.products;
}

export async function getProductsdetail(slug: any) {
  console.log(slug);
  const response = await fetch(`${api.url}`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query MyQuery {
        products(where: {slug:"${slug}"}) {
          id
          name
          description
          price
         images{
          url
         }
        }
       
      }
      `,
    }),
  });
  const json = await response.json();

  return json?.data?.products;
}

export async function getSearchResults(query: string) {
  const response = await fetch(`${api.url}`, {
    method: "POST",
    cache: "no-store",
    next: {
      tags: ["search"],
    },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query MyQuery {
        products(where: {_search: "${query}"}){
          name
          id
          price
          slug
          images{
            url

          }
        
        }
      }
      
       
      
      `,
    }),
  });
  const json = await response.json();
  console.log(json);

  return json?.data?.products;
}

export async function getShirts() {
  const response = await fetch(`${api.url}`, {
    method: "POST",
    cache: "no-store",
    next: {
      tags: ["search"],
    },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        
        
      ${getTishirts}
      
       
      
      `,
    }),
  });
  const json = await response.json();
  console.log(json);

  return json?.data?.categories;
}
