import React from "react";
import { useFilter } from "../../store";
import './item-status-filter.scss';


const ItemStatusFilter: React.FC = () => {
    const filter = useFilter((state) => state.filter);
    const setFilter = useFilter((state) => state.setFilter);
    const buttonsParams = [
        {name: 'all', label: 'All', borderStyle: ' border-r-2 rounded-l-md'},
        {name: 'active', label: 'Active', borderStyle: 'border-r-2'},
        {name: 'done', label: 'Done', borderStyle: 'rounded-r-md'}
    ];
    const buttons = buttonsParams.map(({name, label, borderStyle}) => {
        const isActive = filter === name;
        const fontStyle = isActive ? 'active' : '';
        return (
            <button type="button" className={`${fontStyle} ${borderStyle}`} key={name} onClick={() => setFilter(name)}>
                {label}
            </button>
        );
    });

    return (
        <div className="item-status-filter">
            {buttons}
        </div>
    );
}

export default ItemStatusFilter;