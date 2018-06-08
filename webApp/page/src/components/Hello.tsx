import * as React from 'react';
export interface Props{
    name:string;
    level?: number;
}

function Hello ({name,level = 1}:Props) {
    if (level<0){
        throw new Error("more level");
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(level)}
            </div>
        </div>
    );
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}