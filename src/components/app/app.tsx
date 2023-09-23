import React from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from "../item-status-filter";
import TodoList from '../todo-list';
import ItemAddForm from "../item-add-form";
import { useTodos, useFilter } from "../../store";
import { ITodo, ITodoList } from "../../interfaces";
import "./app.scss";

const App: React.FC = () => {
  const todos = useTodos((state) => state.todos);
  const term = useFilter((state) => state.searchTerm);
  const filter = useFilter((state) => state.filter);
  
  const search = (items: ITodoList, term: string) => {
    if (term?.length === 0) {
      return items;
    }
    
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term?.toLowerCase()) > -1;
    })
  }

  const filterItems = (items: ITodoList, filter: string) => {
    switch(filter) {
      case 'all':
        return items;
      case 'active': 
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default: 
        return items;  
    }
  };

  const visibleItems = filterItems(search(todos, term), filter);
  const doneCount = todos.filter((el: ITodo) => el.done).length;
  const todoCount = todos.length - doneCount;

  return (
    <div className="app">        
      <div>
        <AppHeader todo={todoCount} done={doneCount}/>
      </div>
      <div className="search-filter">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
        <TodoList todos={visibleItems}/>
        <ItemAddForm/>
    </div>
  );
}
export default App;