function Expert ({label, scorce}: {label: string, scorce: number}){

    const arrs = [1,2,3,4,5];
  
    return (
      <div className='flex items-center justify-between'>
        <div className="text-[16px] font-light">{label}</div>
        <div className='flex gap-x-1'>
          {
            arrs.map((item)=>{
              return (
                <>
                {
                  item > scorce ? (
                    <span className='w-[7px] h-[7px] rounded-full flex bg-white mr-[5px]'></span>
                  ) : (
                    <span className='w-[7px] h-[7px] rounded-full flex bg-orange-300 mr-[5px]'></span>
                  )
                }
                </>               
              )
            })
          }         
        </div>
      </div>
    )
  }
  
export default Expert