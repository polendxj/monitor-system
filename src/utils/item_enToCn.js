/**
 * Created by Captain on 2016/6/20.
 */
enToCn_data = {
    "常规状态": {
        "vmware.eventlog[{$URL}]": {
            key: "vmware.eventlog[{$URL}]",
            name: "Event log",
            name_cn: "事件日志",
            position: "center",
            priority: 3
        },
        "vmware.fullname[{$URL}]": {
            key: "vmware.fullname[{$URL}]",
            name: "Full name",
            name_cn: "全名",
            position: "center",
            priority: 1
        },
        "vmware.hv.fullname[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.fullname[{$URL},{HOST.HOST}]",
            name: "Full name",
            name_cn: "全名",
            position: "center",
            priority: 1
        },
        "vmware.version[{$URL}]": {
            key: "vmware.version[{$URL}]",
            name: "Version",
            name_cn: "版本",
            position: "center",
            priority: 2
        },
        "vmware.hv.hw.vendor[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.hw.vendor[{$URL},{HOST.HOST}]",
            name: "Vendor",
            name_cn: "品牌",
            position: "center",
            priority: 4
        },
        "vmware.hv.uptime[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.uptime[{$URL},{HOST.HOST}]",
            name: "Uptime",
            name_cn: "运行时长",
            position: "center",
            priority: 8,
            type: "timestamp"
        },
        "vmware.vm.uptime[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.uptime[{$URL},{HOST.HOST}]",
            name: "Uptime",
            name_cn: "运行时长",
            position: "center",
            priority: 8,
            type: "timestamp"
        },
        "mysql.status[Uptime]": {
            key: "mysql.status[Uptime]",
            name: "MySQL uptime",
            name_cn: "运行时长",
            position: "center",
            priority: 8,
            type: "timestamp"
        },
        "vmware.hv.vm.num[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.vm.num[{$URL},{HOST.HOST}]",
            name: "Number of guest VMs",
            name_cn: "VM数量",
            position: "center",
            priority: 9
        },
        "vmware.hv.hw.model[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.hw.model[{$URL},{HOST.HOST}]",
            name: "Model",
            name_cn: "机器型号",
            position: "center",
            priority: 5
        },
        "vmware.hv.cluster.name[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.cluster.name[{$URL},{HOST.HOST}]",
            name: "Cluster name",
            name_cn: "集群名",
            position: "center",
            priority: 6
        },
        "vmware.vm.cluster.name[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.cluster.name[{$URL},{HOST.HOST}]",
            name: "Cluster name",
            name_cn: "集群名",
            position: "center",
            priority: 6
        },
        "vmware.hv.hw.uuid[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.hw.uuid[{$URL},{HOST.HOST}]",
            name: "Bios UUID",
            name_cn: "BIOS号",
            position: "center",
            priority: 7
        },
        "vmware.hv.status[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.status[{$URL},{HOST.HOST}]",
            name: "Overall status",
            name_cn: "总体状态",
            position: "center",
            priority: 10
        },
        "vmware.hv.version[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.version[{$URL},{HOST.HOST}]",
            name: "Version",
            name_cn: "版本",
            position: "center",
            priority: 10
        },
        "vmware.vm.hv.name[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.hv.name[{$URL},{HOST.HOST}]",
            name: "Hypervisor name",
            name_cn: "宿主",
            position: "center",
            priority: 10
        },
        "vmware.vm.powerstate[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.powerstate[{$URL},{HOST.HOST}]",
            name: "Power state",
            name_cn: "电源状态",
            position: "center",
            priority: 10
        },
        internalPriority: 1
    },
    CPU: {
        "vmware.hv.hw.cpu.num[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.hw.cpu.num[{$URL},{HOST.HOST}]",
            name: "CPU cores",
            name_cn: "cpu核数",
            position: "center",
            priority: 4
        },
        "vmware.hv.hw.cpu.freq[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.hw.cpu.freq[{$URL},{HOST.HOST}]",
            name: "CPU frequency",
            name_cn: "cpu主频",
            position: "center",
            priority: 3,
            type: "hz"
        },
        "vmware.hv.hw.cpu.model[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.hw.cpu.model[{$URL},{HOST.HOST}]",
            name: "CPU model",
            name_cn: "cpu型号",
            position: "center",
            priority: 1
        },
        "vmware.hv.hw.cpu.threads[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.hw.cpu.threads[{$URL},{HOST.HOST}]",
            name: "CPU threads",
            name_cn: "cpu线程数",
            position: "center",
            priority: 2
        },
        "vmware.hv.cpu.usage[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.cpu.usage[{$URL},{HOST.HOST}]",
            name: "CPU usage",
            name_cn: "cpu使用率",
            position: "center",
            priority: 5,
            type: "hz"
        },
        "calc.vmware.hv.hw.cpu.all": {
            key: "calc.vmware.hv.hw.cpu.all",
            name: "CPU all",
            name_cn: "cpu总大小",
            position: "center",
            priority: 5,
            type: "hz"
        },
        "vmware.vm.cpu.ready[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.cpu.ready[{$URL},{HOST.HOST}]",
            name: "CPU ready",
            name_cn: "cpu ready",
            position: "center",
            priority: 5
        },
        "vmware.vm.cpu.usage[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.cpu.usage[{$URL},{HOST.HOST}]",
            name: "CPU usage",
            name_cn: "cpu使用率",
            position: "center",
            type: "hz",
            priority: 5
        },
        "vmware.vm.cpu.num[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.cpu.num[{$URL},{HOST.HOST}]",
            name: "Number of virtual CPUs",
            name_cn: "cpu数量",
            position: "center",
            priority: 5
        },

        internalPriority: 2
    },
    DataStore: {
        "vmware.hv.datastore.read[{$URL},{HOST.HOST},datastore1,latency]": {
            key: "vmware.hv.datastore.read[{$URL},{HOST.HOST},datastore1,latency]",
            name: "Average read latency of the datastore $3",
            name_cn: "读延迟",
            position: "center",
            priority: 1
        },
        "vmware.hv.datastore.write[{$URL},{HOST.HOST},datastore1,latency]": {
            key: "vmware.hv.datastore.write[{$URL},{HOST.HOST},datastore1,latency]",
            name: "Average write latency of the datastore $3",
            name_cn: "写延迟",
            position: "center",
            priority: 2
        },
        internalPriority: 4
    },
    "网络流量": {
        "vmware.hv.network.in[{$URL},{HOST.HOST},bps]": {
            key: "vmware.hv.network.in[{$URL},{HOST.HOST},bps]",
            name: "Number of bytes received",
            name_cn: "流入字节速率(单位: byte/秒)",
            position: "center",
            priority: 1
        },
        "vmware.hv.network.out[{$URL},{HOST.HOST},bps]": {
            key: "vmware.hv.network.out[{$URL},{HOST.HOST},bps]",
            name: "Number of bytes transmitted",
            name_cn: "流出字节速率(单位: byte/秒)",
            position: "center",
            priority: 2
        },
        "vmware.vm.net.if.in[{$URL},{HOST.HOST},4000,bps]": {
            key: "vmware.vm.net.if.in[{$URL},{HOST.HOST},4000,bps]",
            name: "Number of bytes received on interface Network adapter 1",
            name_cn: "接口获取速率(单位: byte/秒)",
            position: "center",
            priority: 2
        },
        "vmware.vm.net.if.out[{$URL},{HOST.HOST},4000,bps]": {
            key: "vmware.vm.net.if.out[{$URL},{HOST.HOST},4000,bps]",
            name: "Number of bytes transmitted on interface Network adapter 1",
            name_cn: "接口传输速率(单位: byte/秒)",
            position: "center",
            priority: 2
        },
        "vmware.vm.net.if.in[{$URL},{HOST.HOST},4000,pps]": {
            key: "vmware.vm.net.if.in[{$URL},{HOST.HOST},4000,pps]",
            name: "Number of packets received on interface Network adapter 1",
            name_cn: "包获取速率(单位: byte/秒)",
            position: "center",
            priority: 2
        },
        "vmware.vm.net.if.out[{$URL},{HOST.HOST},4000,pps]": {
            key: "vmware.vm.net.if.out[{$URL},{HOST.HOST},4000,pps]",
            name: "Number of packets transmitted on interface Network adapter 1",
            name_cn: "包传输速率(单位: byte/秒)",
            position: "center",
            priority: 2
        },
        "mysql.status[Bytes_received]": {
            key: "mysql.status[Bytes_received]",
            name: "MySQL bytes received per second",
            name_cn: "接收字节",
            position: "center",
            type: "memory",
            priority: 1,
        },
        "mysql.status[Bytes_sent]": {
            key: "mysql.status[Bytes_sent]",
            name: "MySQL bytes sent per second",
            name_cn: "发送字节",
            position: "center",
            type: "memory",
            priority: 2,
        },
        internalPriority: 5
    },
    "内存": {
        "vmware.hv.hw.memory[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.hw.memory[{$URL},{HOST.HOST}]",
            name: "Total memory",
            name_cn: "总内存",
            position: "center",
            priority: 1,
            type: "memory"
        },
        "vmware.hv.memory.size.ballooned[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.memory.size.ballooned[{$URL},{HOST.HOST}]",
            name: "Ballooned memory",
            name_cn: "膨胀内存",
            position: "center",
            priority: 2,
            type: "memory"
        },
        "vmware.vm.memory.size.ballooned[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.memory.size.ballooned[{$URL},{HOST.HOST}]",
            name: "Ballooned memory",
            name_cn: "膨胀内存",
            position: "center",
            priority: 2,
            type: "memory"
        },
        "vmware.hv.memory.used[{$URL},{HOST.HOST}]": {
            key: "vmware.hv.memory.used[{$URL},{HOST.HOST}]",
            name: "Used memory",
            name_cn: "使用内存",
            position: "center",
            priority: 3,
            type: "memory"
        },
        "vmware.vm.memory.size.compressed[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.memory.size.compressed[{$URL},{HOST.HOST}]",
            name: "Compressed memory",
            name_cn: "压缩内存",
            position: "center",
            priority: 3,
            type: "memory"
        },
        "vmware.vm.memory.size[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.memory.size[{$URL},{HOST.HOST}]",
            name: "Memory size",
            name_cn: "内存大小",
            position: "center",
            priority: 1,
            type: "memory"
        },
        "vmware.vm.memory.size.usage.guest[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.memory.size.usage.guest[{$URL},{HOST.HOST}]",
            name: "Guest memory usage",
            name_cn: "内存使用率",
            position: "center",
            priority: 5,
        },
        "vmware.vm.memory.size.usage.host[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.memory.size.usage.host[{$URL},{HOST.HOST}]",
            name: "Host memory usage",
            name_cn: "宿主机内存使用率",
            position: "center",
            priority: 5,
            type: "memory"
        },
        "vmware.vm.memory.size.private[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.memory.size.private[{$URL},{HOST.HOST}]",
            name: "Private memory",
            name_cn: "私有内存",
            position: "center",
            priority: 5,
            type: "memory"
        },
        "vmware.vm.memory.size.shared[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.memory.size.shared[{$URL},{HOST.HOST}]",
            name: "Shared memory",
            name_cn: "共享内存",
            position: "center",
            priority: 5,
            type: "memory"
        },
        "vmware.vm.memory.size.swapped[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.memory.size.swapped[{$URL},{HOST.HOST}]",
            name: "Swapped memory",
            name_cn: "交换内存",
            position: "center",
            priority: 5,
            type: "memory"
        },
        internalPriority: 3
    },
    "磁盘": {
        "vmware.vm.vfs.dev.read[{$URL},{HOST.HOST},scsi0:0,bps]": {
            key: "vmware.vm.vfs.dev.read[{$URL},{HOST.HOST},scsi0:0,bps]",
            name: "Average number of bytes read from the disk Hard disk 1",
            name_cn: "平均读取bps",
            position: "center",
            priority: 1,
        },
        "vmware.vm.vfs.dev.write[{$URL},{HOST.HOST},scsi0:0,bps]": {
            key: "vmware.vm.vfs.dev.write[{$URL},{HOST.HOST},scsi0:0,bps]",
            name: "Average number of bytes written to the disk Hard disk 1",
            name_cn: "平均写入bps",
            position: "center",
            priority: 1,
        },
        "vmware.vm.vfs.dev.read[{$URL},{HOST.HOST},scsi0:0,ops]": {
            key: "vmware.vm.vfs.dev.read[{$URL},{HOST.HOST},scsi0:0,ops]",
            name: "Average number of reads from the disk Hard disk 1",
            name_cn: "平均读取ops",
            position: "center",
            priority: 1
        },
        "vmware.vm.vfs.dev.write[{$URL},{HOST.HOST},scsi0:0,ops]": {
            key: "vmware.vm.vfs.dev.write[{$URL},{HOST.HOST},scsi0:0,ops]",
            name: "Average number of writes to the disk Hard disk 1",
            name_cn: "平均写入ops",
            position: "center",
            priority: 1
        },

        internalPriority: 3
    },
    "存储空间": {
        "vmware.vm.storage.committed[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.storage.committed[{$URL},{HOST.HOST}]",
            name: "Committed storage space",
            name_cn: "已提交存储空间",
            position: "center",
            type: "memory",
            priority: 1,
        },
        "vmware.vm.storage.uncommitted[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.storage.uncommitted[{$URL},{HOST.HOST}]",
            name: "Uncommitted storage space",
            name_cn: "未提交存储空间",
            position: "center",
            type: "memory",
            priority: 1,
        },
        "vmware.vm.storage.unshared[{$URL},{HOST.HOST}]": {
            key: "vmware.vm.storage.unshared[{$URL},{HOST.HOST}]",
            name: "Unshared storage space",
            name_cn: "未共享存储空间",
            position: "center",
            type: "memory",
            priority: 1,
        },
        internalPriority: 3
    },
    "操作统计": {
        "mysql.status[Slow_queries]": {
            key: "mysql.status[Slow_queries]",
            name: "MySQL slow queries",
            name_cn: "慢查询",
            position: "center",
            priority: 1,
        },
        "mysql.status[Com_begin]": {
            key: "mysql.status[Com_begin]",
            name: "MySQL begin operations per second",
            name_cn: "Begin",
            position: "center",
            priority: 2,
        },
        "mysql.status[Com_commit]": {
            key: "mysql.status[Com_commit]",
            name: "MySQL commit operations per second",
            name_cn: "Commit",
            position: "center",
            priority: 3,
        },
        "mysql.status[Com_delete]": {
            key: "mysql.status[Com_delete]",
            name: "MySQL delete operations per second",
            name_cn: "Delete",
            position: "center",
            priority: 4,
        },
        "mysql.status[Com_insert]": {
            key: "mysql.status[Com_insert]",
            name: "MySQL insert operations per second",
            name_cn: "Insert",
            position: "center",
            priority: 5,
        },
        "mysql.status[Questions]": {
            key: "mysql.status[Questions]",
            name: "MySQL queries per second",
            name_cn: "Query",
            position: "center",
            priority: 6,
        },
        "mysql.status[Com_update]": {
            key: "mysql.status[Com_update]",
            name: "MySQL update operations per second",
            name_cn: "Update",
            position: "center",
            priority: 7,
        },
        "mysql.status[Com_rollback]": {
            key: "mysql.status[Com_rollback]",
            name: "MySQL rollback operations per second",
            name_cn: "Rollback",
            position: "center",
            priority: 8,
        },
        "mysql.status[Com_select]": {
            key: "mysql.status[Com_select]",
            name: "MySQL select operations per second",
            name_cn: "Select",
            position: "center",
            priority: 9,
        },
        "mysql.status[Innodb_rows_inserted]": {
            key: "mysql.status[Innodb_rows_inserted]",
            name: "MySQL innodb rows inserted per second",
            name_cn: "Innodb Inserted",
            position: "center",
            priority: 10,
        },
        "mysql.status[Innodb_rows_read]": {
            key: "mysql.status[Innodb_rows_read]",
            name: "MySQL innodb rows read per second",
            name_cn: "Innodb Read",
            position: "center",
            priority: 11,
        },
        "mysql.status[Innodb_rows_updated]": {
            key: "mysql.status[Innodb_rows_updated]",
            name: "MySQL innodb rows updated per second",
            name_cn: "Innodb Update",
            position: "center",
            priority: 12,
        },
        "mysql.status[Innodb_rows_deleted]": {
            key: "mysql.status[Innodb_rows_deleted]",
            name: "MySQL innodb rows deleted per second",
            name_cn: "Innodb Delete",
            position: "center",
            priority: 13,
        },
        internalPriority: 3
    },
    "Innodb缓冲池": {
        "mysql.status[Innodb_buffer_pool_pages_total]": {
            key: "mysql.status[Innodb_buffer_pool_pages_total]",
            name: "MySQL-Innodb buffer pool pages total",
            name_cn: "Total Pages",
            position: "center",
            priority: 1,
        },
        "mysql.status[Innodb_buffer_pool_pages_data]": {
            key: "mysql.status[Innodb_buffer_pool_pages_data]",
            name: "MySQL-Innodb buffer pool pages data",
            name_cn: "Data Pages",
            position: "center",
            priority: 2,
        },
        "mysql.status[Innodb_buffer_pool_pages_flushed]": {
            key: "mysql.status[Innodb_buffer_pool_pages_flushed]",
            name: "MySQL-Innodb buffer pool pages flushed",
            name_cn: "Flush Pages",
            position: "center",
            priority: 3,
        },
        "mysql.status[Innodb_buffer_pool_pages_free]": {
            key: "mysql.status[Innodb_buffer_pool_pages_free]",
            name: "MySQL-Innodb buffer pool pages free",
            name_cn: "Free Pages",
            position: "center",
            priority: 4,
        },
        "mysql.status[Com_delete]": {
            key: "mysql.status[Com_delete]",
            name: "MySQL delete operations per second",
            name_cn: "Delete",
            position: "center",
            priority: 5,
        },
        "mysql.status[Com_insert]": {
            key: "MySQL-Innodb buffer pool pages misc",
            name: "mysql.status[Innodb_buffer_pool_pages_misc]",
            name_cn: "Misc Pages",
            position: "center",
            priority: 6,
        },
        "mysql.status[Innodb_buffer_pool_read_requests]": {
            key: "mysql.status[Innodb_buffer_pool_read_requests]",
            name: "MySQL-Innodb buffer pool read requests per second",
            name_cn: "缓冲池读请求数",
            position: "center",
            priority: 7,
        },
        "mysql.status[Innodb_buffer_pool_write_requests]": {
            key: "mysql.status[Innodb_buffer_pool_write_requests]",
            name: "MySQL-Innodb buffer pool write requests per second",
            name_cn: "缓冲池写请求数",
            position: "center",
            priority: 8,
        },
        internalPriority: 3
    },
    "连接数": {
        "mysql.status[Threads_connected]": {
            key: "mysql.status[Threads_connected]",
            name: "MySQL-链接数",
            name_cn: "链接数",
            position: "center",
            priority: 1,
        },
        "mysql.status[Threads_running]": {
            key: "mysql.status[Threads_running]",
            name: "MySQL-活跃链接数",
            name_cn: "活跃链接数",
            position: "center",
            priority: 2,
        },
        internalPriority: 3
    },
    "存储": {
        "perf_counter[\"\\SQLServer:Buffer Manager\\Database pages\"]": {
            key: "perf_counter[\"\\SQLServer:Buffer Manager\\Database pages\"]",
            name: "SQL Default Instance:Database Pages",
            name_cn: "数据页",
            position: "center",
            priority: 1,
        },
        "perf_counter[\"\\SQLServer:Databases(_Total)\\Data File(s) Size (KB)\"]": {
            key: "perf_counter[\"\\SQLServer:Databases(_Total)\\Data File(s) Size (KB)\"]",
            name: "SQL Default Instance:Data File Size",
            name_cn: "数据文件大小",
            position: "center",
            type: "memory",
            priority: 2,
        },
        "perf_counter[\"\\SQLServer:Databases(_Total)\\Log File(s) Size (KB)\"]": {
            key: "perf_counter[\"\\SQLServer:Databases(_Total)\\Log File(s) Size (KB)\"]",
            name: "SQL Default Instance:Log File Size",
            name_cn: "日志文件大小",
            position: "center",
            type: "memory",
            priority: 3,
        },
        internalPriority: 3
    },
    "锁情况": {
        "perf_counter[\"\\SQLServer:Locks(_Total)\\Average Wait Time (ms)\"]": {
            key: "perf_counter[\"\\SQLServer:Locks(_Total)\\Average Wait Time (ms)\"]",
            name: "SQL Default Instance:Locks:Average Wait Time",
            name_cn: "平均等待时长",
            position: "center",
            type: "timestamp",
            priority: 1,
        },
        "perf_counter[\"\\SQLServer:Locks(_Total)\\Number of Deadlocks/sec\"]": {
            key: "perf_counter[\"\\SQLServer:Locks(_Total)\\Number of Deadlocks/sec\"]",
            name: "SQL Default Instance:Locks:Number of Deadlocks per second",
            name_cn: "死锁数",
            position: "center",
            priority: 2,
        },
        "perf_counter[\"\\SQLServer:Locks(_Total)\\Lock Waits/sec\"]": {
            key: "perf_counter[\"\\SQLServer:Locks(_Total)\\Lock Waits/sec\"]",
            name: "SQL Default Instance:Locks:Waits per second",
            name_cn: "等待数",
            position: "center",
            priority: 3,
        },
        internalPriority: 3
    },
    "处理": {
        "perf_counter[\"\\SQLServer:SQL Statistics\\Batch Requests/sec\"]": {
            key: "perf_counter[\"\\SQLServer:SQL Statistics\\Batch Requests/sec\"]",
            name: "SQL Default Instance:Batch Requests per second",
            name_cn: "批处理请求数",
            position: "center",
            priority: 1,
        },
        "perf_counter[\"\\SQLServer:General Statistics\\Processes blocked\"]": {
            key: "perf_counter[\"\\SQLServer:General Statistics\\Processes blocked\"]",
            name: "SQL Default Instance:Blocked Processes",
            name_cn: "阻塞进程数",
            position: "center",
            priority: 2,
        },
        "perf_counter[\"\\SQLServer:Buffer Manager\\Buffer cache hit ratio\"]": {
            key: "perf_counter[\"\\SQLServer:Buffer Manager\\Buffer cache hit ratio\"]",
            name: "SQL Default Instance:Buffer cache hit ratio",
            name_cn: "缓存命中率",
            position: "center",
            priority: 3,
        },
        internalPriority: 3
    },
    "事务": {
        "perf_counter[\"\\SQLServer:Databases(_Total)\\Transactions/sec\"]": {
            key: "perf_counter[\"\\SQLServer:Databases(_Total)\\Transactions/sec\"]",
            name: "SQL Default Instance:Transactions per second",
            name_cn: "事务总数",
            position: "center",
            priority: 1,
        },
        "perf_counter[\"\\SQLServer:Transactions\\Longest Transaction Running Time\"]": {
            key: "perf_counter[\"\\SQLServer:Transactions\\Longest Transaction Running Time\"]",
            name: "SQL Default Instance:Longest Running Transaction",
            name_cn: "最长事务处理",
            position: "center",
            type: "timestamp",
            priority: 2,
        },
        "perf_counter[\"\\SQLAgent:Jobs(_Total)\\Failed jobs\"]": {
            key: "perf_counter[\"\\SQLAgent:Jobs(_Total)\\Failed jobs\"]",
            name: "SQL Default Instance:Number Failed Jobs",
            name_cn: "失败Job数",
            position: "center",
            priority: 3,
        },
        internalPriority: 3,
    },
    noTab: {
        empty: {
            key: "未知",
            name: "未知",
            name_cn: "未知",
            position: "center"
        }
    }

};