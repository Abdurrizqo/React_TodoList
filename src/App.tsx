import { useState } from "react";
import ListComponent from "./components/ListComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Todo = {
  _id: number;
  todo: string;
  isDone: boolean;
};

function App() {
  const [addTodo, setAddTodo] = useState<string>("");
  const [listTodo, setListTodo] = useState<Todo[]>([]);

  function addToList() {
    if (addTodo === "") {
      toast.error("List Wajib Di Isi", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const newItem: Todo = {
      _id: listTodo.length + Math.ceil(Math.random() * 100),
      todo: addTodo,
      isDone: false,
    };
    setListTodo([newItem, ...listTodo]);

    setAddTodo("");
  }

  function deleteItem(idToDelete: number): void {
    const updatedTodos = listTodo.filter((todo) => todo._id !== idToDelete);
    setListTodo(updatedTodos);
  }

  function markItem(idToMark: number): void {
    const updatedTodos = listTodo.map((todo) => {
      return todo._id === idToMark ? { ...todo, isDone: !todo.isDone } : todo;
    });

    setListTodo(updatedTodos);
  }

  return (
    <div className='lg:flex lg:justify-center lg:items-center lg:flex-col'>
      <div className='mt-20 mx-4 mb-8 flex justify-center items-center lg:w-1/3'>
        <div className='w-full'>
          <div className='flex justify-center items-center gap-3'>
            <ToastContainer
              position='top-center'
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />
            <input
              type='text'
              value={addTodo}
              onChange={(event) => {
                setAddTodo(event.target.value);
              }}
              className='flex-grow border rounded outline-orange-200 px-3 py-1'
            />
            <button
              onClick={addToList}
              className='flex-shrink-0 rounded bg-orange-500 px-3 py-1 text-white font-medium'>
              Simpan
            </button>
          </div>
        </div>
      </div>

      <ListComponent
        listTodo={listTodo}
        onDelete={deleteItem}
        onMark={markItem}
      />
    </div>
  );
}

export default App;
