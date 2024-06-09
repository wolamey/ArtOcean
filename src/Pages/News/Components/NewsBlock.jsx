import React from 'react';
import newsImage1 from '../../../../public/newsImage1.jpg';
import './NewsBlock.css';

export default function NewsBlock() {
  return (
    <>
        <div className="nBlock">
            <div className="imageBlock">
                <img className='nImage' src={newsImage1} alt="there is image of this news" />
                <p className='nTitleInsideImage'>News title bla bla bla bla bla bla bla bla</p>
            </div>
            <p className='nParagraph'>Some news paragraph. Here we will tell you about some news in this block theme Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus quibusdam porro ad harum, cupiditate aspernatur eius nostrum numquam, doloremque dignissimos provident saepe aperiam! Adipisci possimus molestias atque autem quisquam fugit.</p>
            <button className='continueReading'>Continue reading</button>
        </div>
    </>
  )
}