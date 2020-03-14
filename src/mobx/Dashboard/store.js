import { observable, action, runInAction } from 'mobx';
import BasicStore, { initLoading } from '../basicStore';
import { isResultError } from '../../utils/index';
import * as api from '../../servers/dashboard';
class DashBoardStore extends BasicStore {
    @observable list = [];

    @initLoading
    @action
    async getTable() {
        const list = await api.getTable();
        runInAction(() => {
            this.list = isResultError(list);
        });
    }
}

export default DashBoardStore;