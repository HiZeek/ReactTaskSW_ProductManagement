import First_Image from '../Img/Image1.png';
import Second_Image from '../Img/Image2.png';
import Third_Image from '../Img/Image5.png';
import Fourth_Image from '../Img/Image4.png';
import Cart1 from '../Img/Empty_Cart_1.png';

const ProductArray = [
    {
        title: "Apollo Running Short",
        price: "50",
        image: First_Image,
        carting: Cart1
    },
    {
        title: "Apollo Running Short",
        price: "50",
        image: Second_Image,
        carting: Cart1
    },
    {
        title: "Apollo Running Short",
        price: "50",
        image: Fourth_Image,
        carting: Cart1
    },
    {
        title: "Apollo Running Short",
        price: "50",
        image: First_Image,
        carting: Cart1
    },
]

export function Products() {
    return ProductArray
}