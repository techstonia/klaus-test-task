import {Server} from 'miragejs';
import users from './users.js';

const startMockAPI = () => new Server({
  routes() {
    this.namespace = "/api";
    this.get("/users", () => users);
  },
});

export default startMockAPI;
