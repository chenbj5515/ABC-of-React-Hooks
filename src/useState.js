/* eslint-disable */
import React, {useState} from 'react';


function Example1() {
    const [interest, setInterest] = useState({
        game: [
            {
                name: '三国：全面战争',
                duration: '120h'
            }
        ]
    })
    return (
        <div>
            {interest.game[0].name}
            <button onClick={
                () => {
                    let obj = JSON.parse(JSON.stringify(interest))
                    obj.game[0].name = '侠隐阁'
                    setInterest(obj)
                }
            }>Click Me</button>
        </div>

    )
}

export default Example1