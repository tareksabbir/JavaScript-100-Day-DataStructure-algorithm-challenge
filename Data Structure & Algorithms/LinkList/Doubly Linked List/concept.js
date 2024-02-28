// doubly linked list 

class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
    }

    addToTheTop(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        if (this.head) {
            this.head.prev = newNode
        }
        this.head = newNode
    }
    addLast(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        newNode.prev = current
        current.next = newNode
    }
    addAt(index, data) {
        if (index < 0 || index > this.size()) {
            console.log('invalid index')
            return
        }
        const newNode = new Node(data)
        if (index === 0) {
            newNode.next = this.head
            if (this.head) {
                this.head.prev = newNode
            }
            this.head = newNode
        }
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        newNode.prev = current
        newNode.next = current.next
        if (current.next) {
            current.next.prev = newNode
        }
        current.next = newNode


    }

    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
        if (this.head) {
            this.head.prev = null
        }
    }

    removeLast() {
        if (!this.head) {
            return
        }
        if (!this.head.next) {
            this.head = null
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.prev.next = null
    }

    removeAt(index) {
        if (index < 0 || index > this.size()) {
            console.log('invalid index')
            return
        }

        if (index === 0) {
            this.head = this.head.next
            if (this.head) {
                this.head.prev = null
            }
        }
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }

        if (current.next) {
            current.next = current.next.next
            if (current.next) {
                current.next.prev = current
            }
        }

    }

    size() {
        let count = 0
        let current = this.head
        while (current) {
            count++
            current = current.next
        }
        return count
    }


}