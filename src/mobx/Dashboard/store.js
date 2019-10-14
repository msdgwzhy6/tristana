import { observable, action, autorun } from 'mobx';
import * as api from '../../servers/table';
class DashBoardStore {
    @observable table = {};
    @observable count = 0;

    constructor() {
        // 这个 autorun 将与当前的命令行实例一起进行垃圾回收
        this.handler = autorun(() => {
            if(this.count > 2) {
            }
            // console.log(this.count);
        });
        // 所以，为了避免细微的内存问题，总是调用清理函数..
        // this.handler();
        // 当 reaction 不再需要时！
    }

    @action
    async getTable() {
        this.table.isLoading = true;
        const table = await api.getTable();
        this.table.isLoading = false;
        this.table.list = table.listData;
    }

    @action
    changeCount() {
        this.count++;
    }
}

export default DashBoardStore;