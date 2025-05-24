import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Item = {
  id: number
  name: string
  income: number
  date:string
  type:string
}

type ItemState = {
  items: Item[]
  addItemToIncome: (item: Item) => void
  removeItemFromIncome: (id: number) => void
  removeAll: () => void
}

export const useIncomeStore = create<ItemState>()(
  persist(
    (set) => ({
      items: [],

      addItemToIncome: (item: Item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromIncome: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== +id),
        })),

      removeAll: () => set({ items: [] }),
    }),

    { name: 'IncomeStore', storage: createJSONStorage(() => localStorage) }
  )
)
