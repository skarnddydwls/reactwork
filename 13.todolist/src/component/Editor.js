import { useState, useRef } from "react";
import List from './List';
import TodoItem from './TodoItem';

const Editor = ({onCreate}) => {

    const [value, setValue] = useState('');
    const contentRef = useRef();

    return(
        <div>
            <input value={value} ref={contentRef} onChange={(e)=> {setValue(e.target.value)}} ></input> &emsp;
            <button onClick={() => {
                if(value === ""){
                    contentRef.current.focus();
                    return;
                }
                onCreate(value);
                setValue('');
            }}>추가</button>
        </div>
    )
}

export default Editor;