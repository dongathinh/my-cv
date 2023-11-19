import { contacts } from "../../data/contact"

type ContactItemType = {
  title:string;
  desc:string;
}

const ContactItem = ({title, desc} : ContactItemType) => {
    return (
        <li>
            <strong className="text-[15px]">{title}</strong>
            <p className="font-light text-[15px]">{desc}</p>                       
        </li>
    )
  }

const Contacts = () => {
  return (
    contacts.map((item)=>{
        return <ContactItem key={item.id} title={item.title} desc={item.desc}/>
      })
  )
}

export default Contacts