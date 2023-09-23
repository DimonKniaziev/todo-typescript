import React, { useState } from "react";
import {useTodos} from "../../store";
import "./item-add-form.scss";

const ItemAddForm: React.FC = () => {
    const [label, setLabel] = useState('');
    const addTodo = useTodos(state => state.addTodo)

    const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value);
    };

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        addTodo(label);
        setLabel('');
    }

    return (
        <form className="item-add-form" onSubmit={onSubmitHandler}>
            <input type="text" className="input" onChange={onLabelChange} placeholder="What needs to be done" value={label}>
            </input>
            <input type="submit" value="Add Item" className="submit">
            </input>
        </form>
    );
}

export default ItemAddForm;