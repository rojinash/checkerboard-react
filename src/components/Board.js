import React, { useState } from 'react';
import Row from './Row'

export default function Board() {
    const [size, setSize] = useState(8);
    const [board, setBoard] = useState([
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
    ]);
    const handleChange = (event) =>{
        setSize(Number(event.target.value));

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newBoard = [...Array(size)].map(e => Array(size));
        let boardVal = false;
        for(let i=0; i<size; i++){
            for(let j=0; j<size; j++){
                newBoard[i][j]=!boardVal? 0 : 1;
                boardVal = !boardVal;
            }
            if(size %2 === 0){
                boardVal = !boardVal;
            }
        }
        setBoard(newBoard);
        event.target.reset();
    }
    return (
        <div>
            <div className="container">
                {board.map((singleRow, index)=>(
                    <Row key={index} singleRow={singleRow}/>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter size" type="number" onChange={handleChange}/>
                <button >Generate Checkerboard!</button>
            </form>
        </div>
    )
}
