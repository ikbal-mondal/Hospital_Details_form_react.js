
const Inputs = ({label, type,name,placeholder}) => {
    return (
        <div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">{label}</label>
              <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className="w-full rounded-md py-2 px-2  border-gray-700 bg-[#464646] text-white"
              />
            </div> 
        </div>
    );
};

export default Inputs;