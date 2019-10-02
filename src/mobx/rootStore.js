import DashboardStore from './Dashboard/store';
import AddGoodsStore from './AddGoods/store';
class Store {
    constructor() {
        this.dashboardStore = new DashboardStore();
        this.addGoodsStore = new AddGoodsStore();
    }
}
export default new Store();