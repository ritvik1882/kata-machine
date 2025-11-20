// If pop and push performed on head
// LIFO

type Node<T> = {
    value: T;
    prev?: Node<T>;
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {

        const node = {} as Node<T>;
        node.value = item;
        
        this.length++;
        if (!this.head) {
            this.head = node;
            return
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const temp = this.head;
        this.head = temp.prev; // if length becomes 0, head becomes undefined
        temp.prev = undefined;

        return temp.value;

    }

    peek(): T | undefined {
        if (!this.head) {
            return undefined
        }

        return this.head.value;

    }
}