import React, { useState } from 'react';
import Modal from './Modal';


const Videos = ({ videos }) => {
    const [isOpen, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);


    const openModal = (key) => {
        setCurrentItem(key);
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <div className="videos">
            {videos.map((video, key) => (
                <div key={key} className="videos_item" onClick={() => openModal(key)}>
                    {console.log(key)}
                    <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                    <span>
                        <img src="/play.svg" alt="" />
                    </span>
                </div>
            ))
            }
            <Modal
                isOpen={isOpen}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                close={closeModal}
                type="video"
                items={videos} />
        </div >
    );
}

export default Videos;