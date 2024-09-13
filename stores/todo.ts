import { defineStore } from "pinia";

interface TodoItem {
    date: Date,
    title: string
}

interface State {
    items: TodoItem[],
    completed: TodoItem[]
}

export const todoStore = defineStore("todo", {
    state: (): State => ({
        items: [],
        completed: []
    }),
    actions: {
        addItem(date: Date, title: string) {
            this.items.push({date: date, title: title});
        },
        completeItem(index: number) {
            const removedItem: TodoItem = this.items.splice(index, 1)[0];
            this.completed.push({date:removedItem.date, title:removedItem.title});
            //this.add_item(removedItem.date, removedItem.title);
        },
        unCompleteItem(index: number) {
            const removedItem: TodoItem = this.completed.splice(index, 1)[0];
            this.items.push({date:removedItem.date, title:removedItem.title});
        }
    }
})