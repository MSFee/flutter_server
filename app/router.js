'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/index', controller.home.index);
  router.get('/scenry', controller.scenery.index);
  router.get('/game', controller.game.index);
  router.get('/car', controller.car.index);
  router.get('/animal', controller.animal.index);
  router.get('/getListData', controller.listData.index);
};
