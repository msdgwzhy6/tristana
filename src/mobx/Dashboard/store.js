import { observable, action, runInAction } from 'mobx';
import BasicStore, { initLoading } from '../basicStore';
import * as api from '../../servers/table';
class DashBoardStore extends BasicStore {
    @observable table = {};

    @initLoading
    @action
    async getTable() {
        const table = await api.getTable();
        runInAction(() => {
            this.table.list = table.listData;
        });
    }

    @initLoading
    @action
    async test() {
        const table = await api.getTable();
        runInAction(() => {
            this.table.list = table.listData;
        });
    }
}

export default DashBoardStore;