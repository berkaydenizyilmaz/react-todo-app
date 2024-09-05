export interface TodoIntialState {
  todos: TodoType[];
}

export interface TodoType {
  id: number;
  content: string;
}
