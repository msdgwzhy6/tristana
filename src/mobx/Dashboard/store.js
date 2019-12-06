import { observable, action, runInAction } from '../../mobx-source/mobx';
import BasicStore, { initLoading } from '../basicStore';
import { isResultError } from '../../utils/index';
import * as api from '../../servers/table';
class DashBoardStore extends BasicStore {
    @observable table = {};

    @initLoading
    @action
    async getTable() {
        const table = await api.getTable();
        runInAction(() => {
            this.table.list = isResultError(table);
        });
    }
}

export default DashBoardStore;