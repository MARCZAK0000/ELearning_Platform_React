import { NotificationItemType } from '../../utilis/NotificationContextTypes';
const NotificationCard = ({params}: {params: NotificationItemType})=>{
    return(
    <>
        <div className='p-5 border-b-2'>
            <div className='flex'>
                <div className='flex items-center pe-3'>
                    <div>IMAGE</div>
                </div>
                <div>
                    <div className='text-sm'>{params.sender.firstName.concat(" "+ params.sender.surname)}</div>
                    <div className='text-sm'>{params.title}</div>
                    <div className='text-xs'>{params.describtion}</div>
                   
                </div>
            </div>
        </div>
    </>
    )
}

export default NotificationCard