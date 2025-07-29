export interface cartItem{
    id: string;
    name: string;
    quantity: number;
    price: number;
    image?: string;
}

export interface cartContextType {
    cartItems: cartItem[];
    addToCart: (item: cartItem) => void;
    increaseQty: (id: string) => void;
    decreaseQty: (id: string) => void;
    removeFromCart: (id: string) => void;
    cartCount: number;
    isInCart: (id: string) => boolean;
    clearCart: () => void;
    cartTotal: number;
  }
