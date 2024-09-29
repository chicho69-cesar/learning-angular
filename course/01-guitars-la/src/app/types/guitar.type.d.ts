export interface Guitar {
  id: number
  name: string
  image: string
  description: string
  price: number
}

export interface Cart extends Guitar {
  quantity: number
}
