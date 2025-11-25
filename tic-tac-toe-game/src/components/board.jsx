import React from 'react';
import Square from './square.jsx';
const Board = () =>
{
    return (
        <div className='board-container'>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>

        </div>
    );
}
export default Board;