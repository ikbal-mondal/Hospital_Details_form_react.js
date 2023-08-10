import Inputs from "./Inputs";


const AddBad = ({formdata,i}) => {
   console.log(formdata);
    return (
        <div>
             <div className="my-5 bg-[#4c4c4c] rounded p-6">
              <h1>Bed {i+1}</h1>
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
              <div className="grid mt-5 lg:grid-cols-3 gap-6">
                <Inputs label='Left Preset Number' placeholder='Enter Preset' type='text' name='LeftPreset'></Inputs>
                <Inputs label='Right Preset Number' placeholder='Enter Preset' type='text' name='RightPreset'></Inputs>
                <Inputs label='Head Preset Number' placeholder='Enter Preset' type='text' name='HeadPreset'></Inputs>
              </div>

            </div>
        </div>
    );
};

export default AddBad;