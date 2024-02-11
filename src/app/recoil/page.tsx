'use client';

import { Toaster } from 'react-hot-toast'
import { Reporter } from './component/Reporter'
import { ToyTable } from './component/TableWithRecoil'
import Total from './component/Total'
import { Controller } from './component/Controller'
import { useRecoilState } from 'recoil';
import { userState } from './store'

const Page = () => {
    const [ username ] = useRecoilState(userState)
    return <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div><Toaster /></div>
        <div >this is playground</div>
        <div className='text-blue-400 text-3xl mb-5' >hello <span className='underline capitalize font-bold italic'>{username}</span>  👪</div>
        <Reporter />
        <Total />
        <ToyTable />
        <Controller />
    </div> 
}

export default Page