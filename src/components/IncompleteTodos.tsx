import { List } from "./list";

export const IncompleteTodos = (props:{
  todos:string[]
  onClickComplete:(index:number)=>void
  onClickDelete:(index:number)=>void
  onClickEdit:(index:number)=>void
}) => {
    const { todos, onClickComplete, onClickDelete ,onClickEdit} = props;


    return (
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => (
            <List key={index} todo={todo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} onClickEdit={onClickEdit} index={index} />
          ))}
        </ul>
      </div>
    );
  };