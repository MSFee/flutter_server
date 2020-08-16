'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        let resultAnimal = await this.app.mysql.select(
            'animal_info',
            {
                limit: 10,
            }
        );
        let resultCar = await this.app.mysql.select(
            'car_info',
            {
                limit: 10,
            }
        );
        let resultScenery = await this.app.mysql.select(
            'scenery_info',
            {
                limit: 10,
            }
        );
        let resultGame= await this.app.mysql.select(
            'game_info',
            {
                limit: 10,
            }
        );
        ctx.body = [resultAnimal, resultCar, resultScenery, resultGame];
    }
}

module.exports = HomeController;
