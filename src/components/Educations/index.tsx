
interface Edtype {
    title: string;
    desc: string;
    time: string;

}

const Educations = ({title, desc, time}: Edtype)=>{
    return (
             <div className="content flex justify-between flex-1 my-[20px]">
                    <div className="content_wrapper">
                        <h3 className="text-gray-400 font-bold text-[15px]">{title}</h3>
                        <p className="text-gray-400 italic text-[15px]">{desc}</p>
                    </div>
                    <div className="text-gray-400 text-[15px]">
                        {time}
                    </div>
             </div>
    )
}

export default Educations