const { News } = require('../database/models');

const add = async (description, url) => {
    return News.create({
        description,
        url
    });
}

const removeById = async () => {
    return News.destroy({
        where: {
            id
        }
    });
}

const getAllNews = async () => {
    const news = await News.findAll();
    return JSON.stringify(news, null, 2);
}

module.exports = {
    add, removeById, getAllNews
}