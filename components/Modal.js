import React, { useState } from 'react';

const YOUTUBE_LINK = "https://www.youtube.com/embed/";
const POSTER_PATH = process.env.NEXT_PUBLIC_POSTER_IMG;

const Modal = ({ items = [], type = 'image', isOpen, currentItem, close, setCurrentItem }) => {

    const changeItem = (step) => {
        if (currentItem + step >= 0 && currentItem + step < items.length) {
            setCurrentItem(currentItem + step);
        }
    }

    return (isOpen ?
        <div className='modal'>
            <div className="modal_bg" onClick={close}></div>
            <div className="modal_close" onClick={close}>
                <img src="/close.svg" alt="" />
            </div>
            <div className="modal_inner">
                <button className="modal_button_prev" onClick={() => changeItem(-1)}>
                    <img src="/arrow_left.svg" alt="" />
                </button>
                <div className="modal_content">
                    {type === 'image' ? <img src={POSTER_PATH+items[currentItem].file_path} alt="" /> : null}
                    {type === 'video' ? <iframe
                        title={items[currentItem].key}
                        src={YOUTUBE_LINK + items[currentItem].key + "?rel=0&showinfo=0&autoplay=1"}
                        allowFullScreen
                        allow="autoplay; encrypted-media"
                        frameBorder="0" /> : null}
                        {console.log(items[currentItem].key)}
                </div>
                <button className="modal_button_next" onClick={() => changeItem(1)}>
                    <img src="/arrow_right.svg" alt="" />
                </button>
            </div>
        </div> : null
    );
}

export default Modal;