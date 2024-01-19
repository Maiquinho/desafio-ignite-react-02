import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { priceFormatter } from '../../utils/formatter'
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

interface CardProps {
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
  const priceFormattedWithCurrency = priceFormatter
    .format(coffee.price)
    .split(' ')
  const currency = priceFormattedWithCurrency[0]
  const price = priceFormattedWithCurrency[1]

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
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </CartDispatchAmount>
          <CartDispatchButton type="button">
            <ShoppingCart size={22} weight="fill" />
          </CartDispatchButton>
        </Actions>
      </Footer>
    </CardWrapper>
  )
}
