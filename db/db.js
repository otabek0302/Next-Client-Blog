const mongoose = require('mongoose');


const createConnect = () => {
    try {
        const connect = mongoose.connect('mongodb://localhost:27017/next-blog')
        console.log(`Database connected Successfully !!!`);
    } catch (error) {
        // throw new Error(error)
        console.log('Database Error')
    }
}

module.exports = createConnect;