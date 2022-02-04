const AddTask = ({ close, setClose }: any) => {
  return (
    close && (
      <div className="flex h-full w-full absolute bg-slate-50/50  top-0 justify-center items-center">
        <div className="bg-sky-200 px-5 py-10 rounded-xl ">
          <h2 className="text-xl mb-5">Add item</h2>
          <input type="text" className="w-full h-10 rounded-md py-1 px-2" placeholder="Type a task" />
          <div className="mt-5">
            {close ? (
              <button type="button" className="btn bg-gray-50 py-1 px-3 rounded-md mr-5 w-40 hover:bg-gray-100" onClick={() => setClose(!close)}>
                Close
              </button>
            ) : (
              "nada"
            )}
            <button className="btn px-3 py-1 bg-[#01A8FF] text-white rounded-md w-40">Add</button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddTask;
