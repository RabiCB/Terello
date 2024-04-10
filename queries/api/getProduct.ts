import { api } from "../../Constants";
import { productdetail, productquery } from "../hygraphquery/grapqlquery";

export async function getProducts() {
  const response = await fetch(`${api.url}`, {
    method: "POST",
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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query MyQuery {
        products(where: {slug:"${slug}"}) {
          id
          name
          description
        }
       
      }
      `,
    }),
  });
  const json = await response.json();

  return json?.data?.products;
}
