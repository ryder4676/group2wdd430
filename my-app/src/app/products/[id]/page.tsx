import { ProductById } from '@/app/ui/product';

export default async function Page({ id }: {id: string}){
    return(
        <div className='product-page'>
        <ProductById id={id}/>
        </div>
    )
}