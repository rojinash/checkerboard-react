import React from 'react'

export default function Piece({color, num, newLine}) {
    return (
        <div>{newLine ? <div>
            <div className="yellow-piece"></div> <p>Add a new line here?</p>
        </div>: <div className={color}>{newLine}</div>}    
        </div>
    )
}
