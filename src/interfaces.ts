export interface ITodo {
    id: number;
    label: string;
    important: boolean;
    done: boolean;
}

export interface ITodoList extends Array<ITodo>{}