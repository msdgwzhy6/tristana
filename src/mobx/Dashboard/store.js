import { observable, action } from 'mobx';
import * as api from '../../servers//table';
class DashBoardStore {
    @observable table = {};

    @action
    async getTable() {
        this.table.isLoading = true;
        const table = await api.getTable();
        this.table.isLoading = false;
        this.table.list = table.listData;
    }
}

export default DashBoardStore;