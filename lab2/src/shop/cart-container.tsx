import React from "react";
import { AnimalContext, PictureInfo } from "../provider/animal-context";
import { ImgContext } from "../provider/img-context";

export const CartContainer: React.FC = () => {
    const imgContext = React.useContext(ImgContext);
    const animalContext = React.useContext(AnimalContext);

    //No lo más óptimo, igual mejor unificar todos los animales y poner un tipo por futuras ampliaciones.
    const getInfo = (a: string):PictureInfo =>
    {
        let data: PictureInfo;
        let animals = [...animalContext.dogs, ...animalContext.cats];
        animals.forEach(
            (animal) => {
                if(animal.id == a)
                {
                    data = animal;
                }
            }
        );
        return data;
    }
    
    return (
        <div className="cart">
            <h2>Carrito</h2>
            {imgContext.cart.map((p) =>
                {
                    const data:PictureInfo = getInfo(p);
                    return (
                        <div key={p} className="cartRow">
                            <img className="miniImg" src={`/assets/img/${data.picUrl}`}/>
                            <span>{data.title}</span>
                            <button onClick={(e) => {
                                const newCart = [...imgContext.cart];
                                newCart.splice(newCart.indexOf(p), 1);
                                imgContext.setCart(newCart);
                            }}>Eliminar</button>
                        </div>
                    ); 
                }
            )}
        </div>
    );
}