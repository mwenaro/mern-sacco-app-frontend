import { API_END } from "../../../../constants/dashboard"



interface IProps {
    params: {
        id: string
    }
}


const getTour = async (id: string) => {
    let res = await fetch(`${API_END}dashboard/tours/${id}`, {cache:"no-store"})
    return  res.json()
  
}


export default async function Tour({ params }: IProps) {
    // const router = useRouter();
    const tour = await getTour(params.id)
   


    return <div className="p-4">
        <div className=" flex gap-5"><link href={`/dashboard/tours`} className=" hover:bg-skin-primary hover:text-2xl"> <span>Go Back</span> </link>
            
        </div>
        <h3>Tour Item</h3>
        <div>{tour.name}</div>
    </div>

}
