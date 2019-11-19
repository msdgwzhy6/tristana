import { observable, action, runInAction } from 'mobx';
import BasicLoading, { initLoading } from '../basicLoading';
import * as api from '../../servers/table';
class DashBoardStore extends BasicLoading {
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