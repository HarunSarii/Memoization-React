import React from 'react';
import ListItem from './ListItem';


const List = ({students, add}) => {
    console.log("Rendering: List Comp!");
    return (
        <div className="list">
            {students?.map(student => {
                return <ListItem key={student.id} student={student} add={add} />
            })}
        </div>
    )
}

export default List;

