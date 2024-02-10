import { Toy } from '../interface'

export const Reporter = ({ cart }:{
    cart: Toy[]
}) => {
    return <div className='flex w-4/5 mb-4'>
        <span>
            your cart have { cart.length } items 
        </span>
        <div className='flex-grow'></div>
        <span>
            total price { cart.map(stuff => stuff.price).reduce((a,b) => a + b ,0) } THB
        </span>
    </div>
}