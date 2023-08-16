
import { Item } from './Item';



export const ItemList = ({clothes}) => {
    return(
        clothes.map(product => (
                <Item key={product.id} product={product}
                />
            )
        )
    )
  }
  