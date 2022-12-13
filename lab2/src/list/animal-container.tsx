import React from 'react';
import { Link } from 'react-router-dom';
import { AnimalContext } from '../provider/animal-context';
import { ImgContext } from '../provider/img-context';
import { imgRoutes } from '../routes/routes';
import { ImageCheck } from '../components/image';

interface Props {
    name: string;
    animal: ("dogs" | "cats");
}

export const AnimalContainer: React.FC<Props> = (props: Props) => {
    const imgContext = React.useContext(ImgContext);
    const animalContext = React.useContext(AnimalContext);

    const imgs = animalContext[props.animal];
    
    return (
        <div className="section">
            <nav>
                <Link to={imgRoutes.dogs}>Perros</Link>
                <Link to={imgRoutes.cats}>Gatos</Link>
            </nav>
            <h2>{props.name}</h2>
            <div className="listcontainer">
                {imgs.map((p) =>
                    {
                        return (
                            <ImageCheck
                                key={p.id}
                                id={p.id}
                                img_url={p.picUrl}
                                title={p.title}
                                checked={imgContext.cart.includes(p.id)}
                            />
                        ); 
                    }
                )}
            </div>
        </div>
    );
};