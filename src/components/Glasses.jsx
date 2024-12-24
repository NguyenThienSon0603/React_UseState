import React, { useState } from 'react'
import data from '../data/dataGlasses.json'

export const Glasses = () => {
    
    const [useGlasses, setGlasses] = useState('../../public/images/v1.png');

  return (
    <div className='container'>
        <div className='overlay'>
            {/* header */}
            <div className='header'>
                <h1>try glasses app online</h1>
            </div>

            {/* show result */}
            <div className='resultGlasses'>
                <img className='model' src="../../public/images/model.jpg" alt="Model" />
                <img className='glass' src={useGlasses} alt="Glass" />
            </div>

            {/* Option glass */}
            <div className='optionGlasses'>
                {
                    data.map(item => {
                        return (
                            <button key={item.id} onClick={() => {
                                setGlasses(item.url)
                            }}>
                                <img src={item.url} alt={item.name} />
                            </button>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
