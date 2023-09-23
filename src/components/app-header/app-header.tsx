import React from "react";
import './app-header.scss';

interface AppHeaderProps {
    todo: number,
    done: number
}

const AppHeader: React.FC<AppHeaderProps> = ({todo, done}) => {
    return (
        <div className="app-header">            
            <h1>
                Todo List
            </h1>             
            <h2>
                {todo} more to do, {done} done
            </h2>            
        </div>
    );
};

export default AppHeader;