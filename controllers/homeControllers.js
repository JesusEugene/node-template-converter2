exports.index = function (request, response) {
    response.render("index.hbs",{
        title: 'Главная'
    });
};
