export const Uploader = () => {
  return (
    <div className="mb-2"> 
        <span>Attachments</span>
        <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
            <div className="absolute">
                <div className="flex flex-col items-center "> 
                    <i className="fa fa-cloud-upload fa-3x text-gray-200"></i> 
                    <span className="block text-gray-400 font-normal">Attach you files here</span> 
                    <span className="block text-gray-400 font-normal">or</span>
                
                    <span className="block text-blue-400 font-normal">Browse files</span>
                
                </div>
            </div> <input type="file" className="h-full w-full opacity-0" name=""/>
        </div>
        <div className="flex justify-between items-center text-gray-400">
            <span>Accepted file type:.doc only</span>
            <span className="flex items-center "><i className="fa fa-lock mr-1"></i> secure</span>
        </div>
    </div>
  );
};
