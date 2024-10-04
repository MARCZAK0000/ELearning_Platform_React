import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NotificationItemType } from '../../utilis/NotificationContextTypes';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ProfileImgUrlBaseLink } from '../../utilis/Links';
const NotificationCard = ({params, key, handleClick}: {params: NotificationItemType, key: number, handleClick: (id:string)=>Promise<boolean>})=>{
    const ConvertToDate = (): string =>{
        const date : Date = new Date(params.timeSent)
        return date.toLocaleString('pl-PL', {year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',})
    }
    return(
    <>
        <div key={key} className={params.isUnRead==true?'p-3 border-b-2 bg-red-300 hover:bg-blue-400 duration-700': 'p-3 border-b-2 hover:bg-blue-400 duration-700'}>
            <div className='grid grid-cols-10'>
                <div className='col-span-3 flex items-center'>
                    <div className='box-border p-2'>
                        <img className='rounded-xl' src={`${ProfileImgUrlBaseLink}/${params.sender.accountID}`}/>
                    </div>
                </div>
                <div className='col-span-6 me-10 flex justify-center flex-col'>
                    <div className='text-sm'>{params.sender.firstName.concat(" "+ params.sender.surname)}</div>
                    <div className='text-sm'>{params.title}</div>
                    <div className='text-xs'>{params.description}</div>
                    <div className='text-xs'>
                    <div className='text-xsm'>{ConvertToDate()}</div> 
                    </div>
                </div>
                <div className='col-span-1 flex items-center'>
                    <button onClick={ async ()=>
                    {
                        const result:boolean = await handleClick(params.notificationID)
                        if(result){
                            params.isUnRead = false
                        }
                    }}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default NotificationCard