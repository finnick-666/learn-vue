const app = new Vue({
    el: '#app',
    data: {
        books: [{
            id: 1,
            name: '《西游记》',
            date: '2006-9',
            price: 85.00,
            count: 1,
        },
        {
            id: 2,
            name: '《三国演义》',
            date: '2006-2',
            price: 59.00,
            count: 1,
        },
        {
            id: 3,
            name: '《红楼梦》',
            date: '2008-10',
            price: 39.00,
            count: 1,
        },
        {
            id: 4,
            name: '《水浒传》',
            date: '2009-9',
            price: 128.00,
            count: 1,
        }]
    },
    methods: {
        increase(item) {
            item.count++;
        },
        decrease(item) {
            item.count--;
        },
        remove(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice () {
            return this.books.reduce((prev, book) => {
                return prev + book.price * book.count
            }, 0);
        }
    }
})