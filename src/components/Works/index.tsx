

interface Edtype {
    title: string;
    desc: string;
    time: string;
    txt: string;

}

const Works = ({title, desc, time, txt}: Edtype)=>{
    return (
        <div>
            <div>
                <div className="content flex justify-between flex-1 my-[10px]">
                    <div className="content_wrapper">
                        <h3 className="text-gray-400 font-bold text-[15px]">{title}</h3>
                        <p className="text-gray-400 font-bold text-[15px]">{desc}</p>
                    </div>
                    <div className="text-gray-400 text-[15px]">
                        {time}
                    </div>
                </div>
            </div>
            <div className="text-gray-400 text-[15px]">{txt}</div>
        </div>
        
             
    )
}

export default Works