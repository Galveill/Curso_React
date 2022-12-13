import React from 'react';
import { ImgContext } from '../provider/img-context';

interface Props {
    id: string;
    img_url: string;
    title: string;
    checked: boolean;
}

export const ImageCheck: React.FC<Props> = (props: Props) => {
    const imgContext = React.useContext(ImgContext);
    const [checked, setChecked] = React.useState(props.checked);

    React.useEffect(()=>{
        const index = imgContext.cart.indexOf(props.id);
        setChecked((index != -1));
    }, [imgContext.cart]);

    return (
        <>
            <div className="listpicture">
                <label htmlFor={props.id}>
                    <img src={`/assets/img/${props.img_url}`} />
                    <p>{props.title}</p>
                    <input type="checkbox"
                        id={props.id}
                        checked={checked}
                        onChange={() => {
                            setChecked(!checked);
                            const index = imgContext.cart.indexOf(props.id);
                            if(index == -1)
                            {
                                imgContext.setCart([...(imgContext.cart), props.id]);
                            }else{
                                const newCart = [...(imgContext.cart)];
                                newCart.splice(index, 1);
                                imgContext.setCart(newCart);
                            }
                        }}
                    />
                </label>
            </div>
        </>
    );
};