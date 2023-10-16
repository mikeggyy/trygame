import { defineStore } from 'pinia';

// 在這裡引入各個 store 的定義
import { config } from './configStore';
import { navBar } from './navBarStore';
import { profession } from './professionStore';
import { popupState } from './popupStateStore';
import { product } from './productStore';
import { people } from './peopleStore';
import { port } from './portStore';
import { select } from './selectStore';
import { talking } from './talkingStore';

export { config, navBar, profession, popupState, product, people, port, select, talking };