import Inputs from "./Inputs";
import icons from '../src/assets/Group 3054.png'
import logo from '../src/assets/logobicu 1.png'
import line from '../src/assets/Line.png'
import { useState } from "react";
import AddBad from "./AddBad";
import ICU from "./ICU";
function App() {
  
 

    const [addBad, setAddbad] = useState([{ MonitorIP: '', UpperBodyPreset: '', LowerBodyPreset: '', LeftPreset: '',RightPreset: '', HeadPreset:'' }]);

    const [addICU, setICU] = useState([{ ipAddress: '', portNumber: '', Username: '', Password: ''}]);


    const handleAddStepsICU = (e) => {
      e.preventDefault()
      setICU([...addICU, { ipAddress: '', portNumber: '', Username: '', Password: ''}]);
    };
    const handleAddSteps = () => {
      setAddbad([...addBad, { MonitorIP: '', UpperBodyPreset: '', LowerBodyPreset: '', LeftPreset: '',RightPreset: '', HeadPreset:'' }]);
    };

  return (
  
    <div className="">
      
      <section className="p-6 mb-0 bg-[#464646] text-white">
        <div className="">
          <img className="w-44 my-4" src={logo} alt="" />
        </div>
        <div className="my-8">
          <h1 className="text-xl font-semibold"> <i className="fa-solid fa-chevron-left mr-3 "></i> Add Hospital</h1>
         
        </div>
        <form   className="container flex flex-col mx-auto space-y-12  px-5 py-8 rounded bg-[#525252]">
          <h1 className="text-lg font-medium ">Hospital Details</h1>
          <img src={line} alt="" />
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 bg-#525252">
            <div className="col-span-full">
             <Inputs label='Hospital Name' placeholder='Enter Hospital Name' name='hospitalName' type='text'></Inputs>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Hospital Pincode</label>
              <input
                id="city"
                type="text"
                placeholder="Enter Pincode"
                className="w-full rounded-md px-2 py-1  border-gray-700 bg-[#464646] text-white"
              />
            </div>
            <div className="col-span-full py-1 sm:col-span-2">
              <label className="text-sm">Hospital State</label>
              <div className="form-control  w-full max-w-xl">
                <select className="select bg-[#464646] text-white  select-bordered select-sm w-full max-w-xl">
                  <option disabled selected className="text-black">
                    Select State
                  </option>
                  <option className="text-black">Select State</option>
                  <option className="text-black">Small Orange</option>
                  <option className="text-black">Small Tomato</option>
                </select>
              </div>
            </div>
            <div className="col-span-full py-1 sm:col-span-2">
              <label className="text-sm">Hospital City</label>
              <div className="form-control   w-full max-w-xl">
                <select className="select bg-[#464646] text-white  select-bordered select-sm w-full max-w-xl">
                  <option disabled selected className="text-black">
                    Select City
                  </option>
                  <option className="text-black">Select City</option>
                  <option className="text-black">Small Orange</option>
                  <option className="text-black">Small Tomato</option>
                </select>
              </div>
            </div>
          </div>
          {/* step2  */}
          <div className="col-span-full ">
              <label className="text-sm">ICU Name</label>
              <input
                type="text"
                placeholder=" Enter Enter ICU Name"
                className="w-full bg-[#464646] text-white rounded-md py-2 px-2 border-gray-700 "
              />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  w-full gap-8">
              <Inputs label='IP Address of camera' placeholder='Enter IP Address' type='text' name='ipAddress'></Inputs>
              <Inputs label='RTSP Port Number' placeholder='Enter Preset' type='text' name='portNumber'></Inputs>
              <Inputs label='Username' placeholder='Enter Username' type='text' name='Username'></Inputs>
              <Inputs label='Password' placeholder='Enter Password' type='Password' name='Password'></Inputs>
            </div>
           
            <div className="">
              <h1>Bed 1</h1>
              <div className="grid lg:grid-cols-12 md:grid-cols-6 gap-4">
                <div className="col-span-6">
                <Inputs label='Monitor IP' placeholder='Enter IP Address' type='text' name='MonitorIP'></Inputs>
                </div>
               <div className="col-span-3">
               <Inputs label='Upper Body Preset Number' placeholder='Enter Preset' type='text' name='UpperBodyPreset'></Inputs>
               </div>
               <div className="col-span-3">
               <Inputs label='Lower Body Preset Number' placeholder='Enter Preset' type='text' name='LowerBodyPreset'></Inputs>
               </div>
              
              </div>
              <div className="grid mt-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6">
                <Inputs label='Left Preset Number' placeholder='Enter Preset' type='text' name='LeftPreset'></Inputs>
                <Inputs label='Right Preset Number' placeholder='Enter Preset' type='text' name='RightPreset'></Inputs>
                <Inputs label='Head Preset Number' placeholder='Enter Preset' type='text' name='HeadPreset'></Inputs>
              </div>

            </div>
            <div className="">
              {
                addBad.map( (formdata,i) => 
                  <div key='' className="">
                        <AddBad i={i} formdata={formdata}></AddBad>
                  </div>

                  )
              }
            </div>
            <h1>Add New Bad</h1>
             <div className="w-full flex justify-center text-center bg-[#464646]">
                 <img onClick={handleAddSteps} className="py-3 " src={icons} alt="" />
             </div>
             <div className="">
             {
                addICU.map( (formdataICu,i) => 
                  <div key='' className="">
                        <ICU i={i} formdata={formdataICu}></ICU>
                  </div>

                  )
              }
            </div>
             <div>
              <h1 className="mx-1 my-1">ICU Details</h1>
              <button type="submit" onClick={handleAddStepsICU}   className=" bg-[#F3683F] px-6  py-2 rounded border-0 text-white" >+Add ICU</button>
             </div>
        </form>
       <div className="flex justify-end my-4 mx-2">
       <button type="submit"   className="  bg-[#F3683F] px-7  py-2 rounded border-0 text-white" >Register Hospital</button>
       </div>
      </section>
    </div>
  );
}

export default App;
