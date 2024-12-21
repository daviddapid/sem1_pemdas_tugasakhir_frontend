import { create } from "zustand";

export type Order = {
   id: number
   name: string
   products: ProductOrder[]
}
export type ProductOrder = {
   id: number
   name: string
   qty: number
   price: number
   sugar: number
   coffe: number
   milk: number
   img: string
   createdAt: number
}


interface CartHook {
   products: ProductOrder[],
   add: (product: ProductOrder) => void
   updateQty: (createdAt: number, qty: number) => void
   remove: (createdAt: number) => void
}

export const useCart = create<CartHook>(
   set => ({
      products: [],
      add: (product: ProductOrder) => set((state) => {
         const updatedProducts = [
            ...state.products,
            product,
         ]
         return { products: updatedProducts }
      }),
      updateQty: (createdAt, qty) => set((state) => {
         const products = state.products.map(p => {
            if (p.createdAt == createdAt && qty > 0) {
               p.qty = qty
            }
            return p
         })

         return {
            products: products
         }
      }),
      remove: (createdAt) => set(state => {

         return {
            products: state.products.filter(p => p.createdAt != createdAt)
         }
      })


   })
)