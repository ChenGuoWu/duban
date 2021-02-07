//树结构数据转化
function listToTree(list) {
    if (list.length) {
        // 删除 所有 children,以防止多次调用
        list.forEach((item) => {
            delete item.children;
        });
        let map = {};
        list.forEach((item) => {
            map[item.id] = item;
        });
        let val = [];
        list.forEach((item) => {
            if (item.pId == 0) {
                item.expand = true;
            }
            // 以当前遍历项，的pid,去map对象中找到索引的id
            let parent = map[item.pId];
            // 如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
            if (parent) {
                (parent.children || (parent.children = [])).push(item);
            } else {
                //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
                val.push(item);
            }
        });
        return val;
    }
}

export default listToTree;