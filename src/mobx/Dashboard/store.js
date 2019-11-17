import { observable, action, runInAction } from 'mobx';
import * as api from '../../servers/table';
class DashBoardStore {
    @observable table = {};

    @action
    async getTable() {
        this.table.isLoading = true;
        const table = await api.getTable();
        runInAction(() => {
            this.table.isLoading = false;
            this.table.list = table.listData;
        });
        return true;
    }
}

export default DashBoardStore;