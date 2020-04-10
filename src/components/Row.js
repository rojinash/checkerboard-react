import React from 'react'
import Piece from './Piece'

export default function Row({singleRow}) {
    return (
        <div className="board-row">
            {singleRow.map((piece, index) => (
                <Piece key={index}
                color={piece ? 'black-piece' : 'white-piece'}/>
            ))}
        </div>
    )
}
