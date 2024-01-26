import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  Actions,
  CardWrapper,
  CartDispatchAmount,
  CartDispatchButton,
  Content,
  Footer,
  Price,
  Tags,
} from './styles'

import { useProduct } from '../../hooks/useProduct'

export interface CardProps {
  coffee: {
    id: number
    image: string
    tags: string[]
    name: string
    description: string
    price: number
  }
}

export function Card({ coffee }: CardProps) {
  const {
    currency,
    price,
    cartAmount,
    handleAddCart,
    handleDecreaseCartAmount,
    handleIncreaseCartAmount,
  } = useProduct(coffee)

  return (
    <CardWrapper>
      <img src={coffee.image} alt={`imagem prévia do café ${coffee.name}`} />

      <Tags>
        {coffee.tags.map((tag, i) => (
          <span key={`${tag}-${i}`}>{tag}</span>
        ))}
      </Tags>

      <Content>
        <h3>{coffee.name}</h3>
        <span>{coffee.description}</span>
      </Content>

      <Footer>
        <Price>
          <span>
            {currency} <strong>{price}</strong>
          </span>
        </Price>
        <Actions>
          <CartDispatchAmount>
            <button type="button" onClick={handleDecreaseCartAmount}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{cartAmount}</span>
            <button type="button" onClick={handleIncreaseCartAmount}>
              <Plus size={14} weight="bold" />
            </button>
          </CartDispatchAmount>
          <CartDispatchButton type="button" onClick={handleAddCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartDispatchButton>
        </Actions>
      </Footer>
    </CardWrapper>
  )
}
