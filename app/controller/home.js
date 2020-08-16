'use strict';

const { getAllData } = require('../paicong.js');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // const data = await  getAllData();
    // for(let i = 0; i < data.length; i++) {
    //      await this.app.mysql.insert('girlsList_info', {
    //        imageUrl: data[i].imgUrl,
    //        desc: data[i].desc,
    //        much: data[i].much
    //      })
    // }

    let result = await this.app.mysql.select(
      'girlsList_info',
      {
        limit: 5,
      }
    );
    ctx.body = result;
  }
}

module.exports = HomeController;
