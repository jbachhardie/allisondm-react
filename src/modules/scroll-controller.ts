import { Controller } from './scrollmagic';

const singletonController = new Controller({
  globalSceneOptions: { triggerHook: 'onEnter', duration: '200%' }
});

export default singletonController;
