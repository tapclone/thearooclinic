import React from 'react'

function GalleryCard({item}) {
    
    return (

        <div className="galleryCard col-md-6" style={{marginTop:'1.5rem'}}>
        <img className='galleryCardImg' style={{width:'100%',height:'100%'}} src={item.image} alt="" />
        </div>
        
    )
}

export default GalleryCard