const pizzaData = [
    {
        id: '1',
        title: 'Pizza capricciosa',
        description: 'Italian pizza made with baked ham, mushrooms.',
        priceNew: '10',
        oldPrice: '17',
        isNew: true, 
        shareLink: 'https://example.com/share/1',
        image: require('../../assets/pizza.png')
    },
    {
      id: '2',
      title: 'Pepperoni',
      description: 'Pizza with spicy pepperoni, tomato sauce, and mozzarella cheese.',
      priceNew: '14',
      oldPrice: '18',
      isNew: false,
      image: require('../../assets/pizza.png')
    },
    {
      id: '3',
      title: 'Vegetarian',
      description: 'Vegetarian pizza with fresh vegetables and cheese.',
      priceNew: '13',
      oldPrice: '16',
      isNew: true,
      image: require('../../assets/pizza.png')
    },
    {
      id: '4',
      title: 'BBQ Chicken',
      description: 'Pizza with barbecue chicken, red onions, and mozzarella cheese.',
      priceNew: '16',
      oldPrice: '20',
      isNew: false,
      image: require('../../assets/pizza.png')
    },
    {
      id: '5',
      title: 'Hawaiian',
      description: 'Hawaiian pizza with ham, pineapple, and mozzarella cheese.',
      priceNew: '15',
      oldPrice: '19',
      isNew: true,
      image: require('../../assets/pizza.png')
    },
    {
      id: '6',
      title: 'Supreme',
      description: 'Supreme pizza with pepperoni, sausage, bell peppers, and olives.',
      priceNew: '18',
      oldPrice: '23',
      isNew: false,
      image: require('../../assets/pizza.png')
    },
    {
      id: '7',
      title: 'Mushroom Delight',
      description: 'Pizza with a variety of mushrooms and cheese.',
      priceNew: '14',
      oldPrice: '17',
      isNew: true,
      image: require('../../assets/pizza.png')
    },
    {
      id: '8',
      title: 'Spinach and Feta',
      description: 'Pizza with spinach, feta cheese, and tomatoes.',
      priceNew: '13',
      oldPrice: '16',
      isNew: false,
      image: require('../../assets/pizza.png')
    },
    {
      id: '9',
      title: 'Meat Lovers',
      description: 'Pizza for meat lovers with a mix of different meats and cheese.',
      priceNew: '20',
      oldPrice: '25',
      isNew: true,
      image: require('../../assets/pizza.png')
    },
    {
      id: '10',
      title: 'Four Cheese',
      description: 'Pizza with a blend of four cheeses: mozzarella, cheddar, feta, and parmesan.',
      priceNew: '17',
      oldPrice: '21',
      isNew: false,
      image: require('../../assets/pizza.png')
    },
]

const sliderPizza = [
    {
        shareLink: 'https://example.com/share/1',
        imageLink: 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-and-olives_140725-1200.jpg?w=996&t=st=1707077253~exp=1707077853~hmac=07b0a92e94f63685f7b1e6636fa041f1a5d407197143f2bcfe3d111a2d20c846'
    },
    {
        shareLink: 'https://example.com/share/2',
        imageLink: 'https://img.freepik.com/free-photo/close-up-on-delicious-pizza_23-2150852113.jpg?w=740&t=st=1707077285~exp=1707077885~hmac=ff8862918f32a7ef4f45b5d0fde2aeff4a52cce6114ac09b53152870d8bb6771'
    },
]

const sliderPizzaAll = [
    {
        shareLink: 'https://example.com/share/3',
        imageLink: 'https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873878.jpg?w=996&t=st=1707077298~exp=1707077898~hmac=6680cb65199b8a994e2c7e1e03b163bae38ad5b4c13eee6fd1b31ab4377c8811'
    },
    {
        shareLink: 'https://example.com/share/4',
        imageLink: 'https://img.freepik.com/free-photo/top-view-cheese-pizza-with-ingredients_23-2148765287.jpg?w=740&t=st=1707077312~exp=1707077912~hmac=a57d38bf7a0ecd724d747ec9ef0f2888b2a0b30eb92e7fb669d48032633c8175'
    },
    {
        shareLink: 'https://example.com/share/5',
        imageLink: 'https://img.freepik.com/free-photo/chicken-pizza-with-bell-peppers-tomato-cheese-on-round-wooden-board_140725-10493.jpg?w=996&t=st=1707077333~exp=1707077933~hmac=a7b839c20bdb397700c153f9b3242385b6977c2a7f51fba24a1b035dd958b187'
    },
    {
        shareLink: 'https://example.com/share/6',
        imageLink: 'https://img.freepik.com/free-photo/a-slice-of-crispy-pizza-with-meat-and-cheese_140725-6974.jpg?w=740&t=st=1707077347~exp=1707077947~hmac=6723a57d789d9ebe4a3c03beb2adbbf47aa347cf2165610d96c34c1cc278cfc2'
    },
    {
        shareLink: 'https://example.com/share/7',
        imageLink: 'https://img.freepik.com/free-photo/delicious-traditional-pizza-arrangement_23-2148921320.jpg?w=740&t=st=1707077369~exp=1707077969~hmac=ef4353c146b3220efc52032885b6a8cd0ace140406cde7d2321d2d37a0dc7d2a'
    },
    {
        shareLink: 'https://example.com/share/8',
        imageLink: 'https://img.freepik.com/free-photo/top-view-delicious-pizza-indoors_23-2150901093.jpg?w=740&t=st=1707077383~exp=1707077983~hmac=0dc207714b83ece6d5ad325439ff9a19ceb01c943907205ca8c4b7197dc5661c'
    },
    {
        shareLink: 'https://example.com/share/9',
        imageLink: 'https://img.freepik.com/free-photo/pepperoni-pizza-with-mushrooms-on-the-table_140725-997.jpg?w=740&t=st=1707077395~exp=1707077995~hmac=7f281382219b4cb804b2ed52e590b6b7a4d3d565dec5471bfe20f0a3f23660b3'
    },
]

export {pizzaData, sliderPizza, sliderPizzaAll};

