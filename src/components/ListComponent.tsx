import { BsCheck2Circle, BsTrashFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

type ListTodo = {
  listTodo: { _id: number; todo: string; isDone: boolean }[];
  onDelete: (idToDelete: number) => void;
  onMark: (idToMark: number) => void;
};

function ListComponent(props: ListTodo) {
  return (
    <div className=' flex flex-col lg:flex-row mx-4 gap-8 mb-20 lg:w-2/3'>
      <div className='w-full lg:w-2/3 h-80 bg-white shadow border p-3 rounded overflow-y-auto overflow-x-hidden'>
        <div className='font-medium text-lg text-center text-blue-400'>
          Todo List
        </div>

        <div className='flex flex-col gap-2 mt-4'>
          <AnimatePresence>
            {props.listTodo.map((Todo) =>
              Todo.isDone ? (
                <></>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: 200 }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                  className='flex items-center border-b p-3'
                  key={Todo._id}>
                  <div className='flex-grow'>{Todo.todo}</div>
                  <div className='shrink-0 flex gap-3'>
                    <BsCheck2Circle
                      className='text-green-700'
                      onClick={() => {
                        props.onMark(Todo._id);
                      }}
                    />
                    <BsTrashFill
                      className='text-red-700'
                      onClick={() => {
                        props.onDelete(Todo._id);
                      }}
                    />
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className='w-full lg:w-2/3 h-80 bg-white shadow border p-3 rounded overflow-y-auto overflow-x-hidden'>
        <div className='font-medium text-lg text-center text-green-400'>
          Complete List
        </div>

        <div className='flex flex-col gap-2 mt-4'>
          <AnimatePresence>
            {props.listTodo.map((Todo) =>
              !Todo.isDone ? (
                <></>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: 200 }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                  className='flex items-center border-b p-3'
                  key={Todo._id}>
                  <div className='flex-grow'>{Todo.todo}</div>
                  <div className='shrink-0'>
                    <BsTrashFill
                      className='text-red-700'
                      onClick={() => {
                        props.onDelete(Todo._id);
                      }}
                    />
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default ListComponent;
