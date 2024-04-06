import { api } from "../../Constants";
import { productquery } from "../hygraphquery/grapqlquery";

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
