'use strict';

const { getAllData } = require('../paicong.js');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let result = await this.app.mysql.select(
      'animal_info',
      {
        limit: 10,
      }
    );
    ctx.body = result;
  }
}

module.exports = HomeController;
