import React, {useState} from 'react';
import Modal from "../components/Modal";

const POSTER_PATH = process.env.NEXT_PUBLIC_POSTER_IMG;

const Gallery = ({images}) => {
    return(
        <div className="gallery">
            <Backdrops backdrops={images.backdrops} id={images.id}/>
            <Poster posters={images.posters} id={images.id}/>
        </div>
    );
}

const Poster = ({posters, id}) => {
    const [isOpen, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);

    const openModal = (key) => {
        setCurrentItem(key);
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return(
        <div className="poster">
            <div className="poster_title">
                <h2>Постеры</h2>
                <span>{posters.length} элементов</span>
            </div>
            <div className="poster_items">
                {posters.map((poster, key) => (
                    <div key={key} className="poster_item" onClick={() => openModal(key)}>
                        <img src={POSTER_PATH+poster.file_path} alt=""/>
                    </div>
                ))}
            </div>
            <Modal 
                items={posters}
                isOpen={isOpen}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                close={closeModal}/>
        </div>
    );
}

const Backdrops = ({backdrops, id}) => {
    const [isOpen, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);

    const openModal = (key) => {
        setCurrentItem(key);
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return(
        <div className="backdrops">
            <div className="backdrops_title">
                <h2>Задники</h2>
                <span>{backdrops.length} элементов</span>
            </div>
            <div className="backdrops_items">
                {backdrops.map((backdrop, key) => (
                    <div key={key} className="backdrops_item" onClick={() => openModal(key)}>
                        <img src={POSTER_PATH+backdrop.file_path} alt=""/>
                    </div>
                ))}
            </div>
            <Modal 
                items={backdrops}
                isOpen={isOpen}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                close={closeModal}/>
        </div>
    );
}

export default Gallery;