import Inputs from "./Inputs";


const ICU = ({formdataICu,i}) => {
    return (
        <div>
              <div className="col-span-full my-6">
              <label className="text-sm">ICU Name</label>
              <input
                type="text"
                placeholder=" Enter Enter ICU Name"
                className="w-full bg-[#464646] text-white rounded-md py-2  border-gray-700 "
              />
            </div>
            <div className="grid lg:grid-cols-4 w-full pt-6 gap-8">
              <Inputs label='IP Address of camera' placeholder='Enter IP Address' type='text' name='ipAddress'></Inputs>
              <Inputs label='RTSP Port Number' placeholder='Enter Preset' type='text' name='portNumber'></Inputs>
              <Inputs label='Username' placeholder='Enter Username' type='text' name='Username'></Inputs>
              <Inputs label='Password' placeholder='Enter Password' type='Password' name='Password'></Inputs>
            </div> 
        </div>
    );
};

export default ICU;