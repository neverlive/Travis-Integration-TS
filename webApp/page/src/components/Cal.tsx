import * as React from 'react';

export interface Props {
    x:number;
    y:number;
}
function Cal({x,y}:Props) {
    return (
        <div className = "hello">
            {Multi({x,y})};
        </div>
    );
}
function Multi ({x,y}:Props){
    return x*y;
}
export default Cal;