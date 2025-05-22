import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Item = {
  id: number
  name: string
  type: string
  expense: number
  date:string
}

type ItemState = {
  itemsExpense: Item[]
  addItemToExpense: (item: Item) => void
  removeItemFromExpense: (id: number) => void
  removeAll: () => void
}

export const useExpenseStore = create<ItemState>()(
  persist(
    (set) => ({
      itemsExpense: [],

      addItemToExpense: (item: Item) =>
        set((state) => ({
          itemsExpense: [item, ...state.itemsExpense],
        })),

      removeItemFromExpense: (id) =>
        set((state) => ({
          itemsExpense: state.itemsExpense.filter((item) => item.id !== +id),
        })),

      removeAll: () => set({ itemsExpense: [] }),
    }),

    { name: 'ExpenseStore', storage: createJSONStorage(() => localStorage) }
  )
)