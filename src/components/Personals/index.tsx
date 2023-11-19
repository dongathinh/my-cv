import { personals } from "../../data/personal"

const PersonItem = ({person}:{person: string}) => {
    return (
      <li className="container mx-auto text-[16px] font-light">
          {person}                 
      </li>
    )
  }

const Personals = () => {
  return (
    personals.map((item)=>{
        return <PersonItem key={item.id} person={item.person} />
      })
  )
}

export default Personals