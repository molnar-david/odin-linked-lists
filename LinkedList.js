import Node from "./Node.js";

export default class LinkedList {
    #size = 0;
    #head = null;
    #tail = null;

    get size() {
        return this.#size;
    }

    get head() {
        return this.#head;
    }

    get tail() {
        return this.#tail;
    }

    append(value) {
        if (this.#size) {
            const node = new Node(value);
            this.#tail.nextNode = node;
            this.#tail = node;
        } else {
            this.#head = new Node(value);
            this.#tail = this.#head;
        }
        this.#size++;
    }

    prepend(value) {
        if (this.#size) {
            this.#head = new Node(value, this.#head);
        } else {
            this.#head = this.#tail = new Node(value)
        }
        this.#size++;
    }

    at(index) {
        if (index === this.#size) return null;
        let node = this.#head;
        for (let i = 0; i < index; i++) {
            node = node.nextNode;
        }
        return node;
    }

    pop() {
        let node = this.#tail;
        if (this.#size === 1) {
            this.#head = this.#tail = null
        } else {
            const node = this.#tail;
            this.#tail = this.at(this.#size - 2);
            this.#tail.nextNode = null;
        }
        this.#size--;
        return node;
    }

    contains(value) {
        let node = this.#head;
        while (node) {
            if (node.value === value) return true;
            node = node.nextNode;
        }
        return false;
    }

    find(value) {
        let node = this.#head;
        let index = 0;
        while (node) {
            if (node.value === value) return index;
            node = node.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let node = this.#head;
        let str = '';
        while (node) {
            str += `( ${node.value} ) -> `;
            node = node.nextNode;
        }
        // One last null
        str += node;
        return str;
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
        } else {
            let prevNode = this.at(index - 1);
            let nextNode = this.at(index);
            prevNode.nextNode = new Node(value, nextNode);
        }
        this.#size++;
    }

    removeAt(index) {
        if (index === 0) {
            this.#head = this.#head.nextNode;
        } else {
            let prevNode = this.at(index - 1);
            prevNode.nextNode = prevNode.nextNode.nextNode;
        }
        this.#size--;
    }
}
