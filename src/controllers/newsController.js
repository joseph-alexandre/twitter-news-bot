const { News } = require('../database/models');

/**
 * @param {string} description 
 * @param {string} url 
 * Faz a inserção do registro na tabela news.
 */
const add = async (description, url) => {
    return News.create({
        description,
        url
    });
}

/**
 * @param {integer} id
 * Faz a remoção do registro pelo id na tabela news.
 */
const removeById = async (id) => {
    return News.destroy({
        where: {
            id
        }
    });
}

/**
 * Pega todos os registros da tabela até então.
 */
const getAllNews = async () => {
    const news = await News.findAll();
    return JSON.stringify(news, null, 2);
}

module.exports = {
    add, removeById, getAllNews
}