const EditForm=() =>{
    return (
        <div>
          <input
          
            placeholder="TODOを入力"
          />
          <button>
            編集して追加
          </button>
        </div>
      );
  };


export const List = (props:any ) =>{
    const {todo,index, onClickComplete, onClickDelete , onClickEdit} = props
    // useStateをどこかで使う
    //編集のインプットフォームを出す関数
    const onClickEditFormOpen = () => {
        // エディットフォームを出す関数
         
      }

    return (
            <li key={todo}>
              <div className="list-row">
                {/* 編集中じゃない場合はpタグ */}
                <p className="todo-item">{todo}</p>
                {/* 編集中はinput form(内容はtodo) + button */}
                 <EditForm ></EditForm> 
                {/*  */}
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
                <button onClick={() => onClickEditFormOpen()}>編集フォームを開く</button>
              </div>
            </li>
    )
    
}