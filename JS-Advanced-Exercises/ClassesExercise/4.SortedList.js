class List {
    list = [];
    size = 0;

    add(element) {
        this.list.push(element);
        this.size++;
    }

    get(index) {
        if (index >= this.list.length || index < 0) {
            return;
        }
        this.list.sort((a, b) => a - b);
        return this.list[index];
    }

    remove(index) {
        if (index >= this.list.length || index < 0) {
            return;
        }
        this.list.splice(index, 1);
        this.size--;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
