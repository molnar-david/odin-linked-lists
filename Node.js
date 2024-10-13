export default class Node {
    #value = null;
    #nextNode = null;

    constructor(value, nextNode = null) {
        this.#value = value;
        this.#nextNode = nextNode;
    }

    get value() {
        return this.#value;
    }

    get nextNode() {
        return this.#nextNode;
    }

    set value(value) {
        this.#value = value;
    }

    set nextNode(node) {
        this.#nextNode = node;
    }
}
