import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Item = {
  id: number
  name: string
  daysLeft: number
  currentAmount: number
  targetAmount: number
}

type ItemState = {
  items: Item[]
  addItemToGoals: (item: Item) => void
  removeItemFromGoals: (id: number) => void
  removeAll: () => void
}

export const useGoalsStore = create<ItemState>()(
  persist(
    (set) => ({
      items: [],

      addItemToGoals: (item: Item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromGoals: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== +id),
        })),

      removeAll: () => set({ items: [] }),
    }),

    { name: 'GoalsStore', storage: createJSONStorage(() => localStorage) }
  )
)
