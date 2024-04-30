
import { Carousel } from "flowbite-react";

export function HomeCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-6 max-md:my-4">
      <Carousel slideInterval={300} slide={true}>
        <img  src="https://www.meme-arsenal.com/memes/0e311f030ab84d928faa0663c1b6a9bd.jpg" alt="..." />
        <img src="https://cdn.shopify.com/s/files/1/1038/1798/products/T-Shirt-Mockup_8a20ae15-6046-4475-ac6a-9e8b5013b42c.jpg?v=1567970252" alt="..." />
        <img src="https://avatars.mds.yandex.net/i?id=1bd7377d59d08a8089fabdbe80ec786f8f1c4840-9233261-images-thumbs&n=13" alt="..." />
        <img src="https://i.pinimg.com/originals/ec/9d/b1/ec9db16f9d2516dc02ec3bfc3b85eabb.jpg" alt="..." />
        <img src="https://i.pinimg.com/originals/5e/cd/f4/5ecdf47514d9fd13a78c99eee70ff7f0.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
