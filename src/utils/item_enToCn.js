/**
 * Created by Captain on 2016/6/20.
 */
enToCn_data = {
    normal_status: {
        "vmware.eventlog[{$URL}]": {
            key:"vmware.eventlog[{$URL}]",
            name: "Event log",
            name_cn: "事件日志",
            position: "center",
            priority: 3
        },
        "vmware.fullname[{$URL}]": {
            key:"vmware.fullname[{$URL}]",
            name: "Full name",
            name_cn: "全名",
            position: "center",
            priority: 1
        },
        "vmware.version[{$URL}]": {
            key:"vmware.version[{$URL}]",
            name: "Version",
            name_cn: "版本",
            position: "center",
            priority: 2
        },
        "vmware.hv.hw.vendor[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.hw.vendor[{$URL},{HOST.HOST}]",
            name: "Vendor",
            name_cn: "宿主",
            position: "center",
            priority: 4
        },
        "vmware.hv.uptime[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.uptime[{$URL},{HOST.HOST}]",
            name: "Uptime",
            name_cn: "启动时间",
            position: "center",
            priority: 8
        },
        "vmware.hv.vm.num[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.vm.num[{$URL},{HOST.HOST}]",
            name: "Number of guest VMs",
            name_cn: "VM数量 (单位:个)",
            position: "center",
            priority: 9
        },
        "vmware.hv.hw.model[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.hw.model[{$URL},{HOST.HOST}]",
            name: "Model",
            name_cn: "机器型号",
            position: "center",
            priority: 5
        },
        "vmware.hv.cluster.name[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.cluster.name[{$URL},{HOST.HOST}]",
            name: "Cluster name",
            name_cn: "集群名称",
            position: "center",
            priority: 6
        },
        "vmware.hv.hw.uuid[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.hw.uuid[{$URL},{HOST.HOST}]",
            name: "Bios UUID",
            name_cn: "BIOS编号",
            position: "center",
            priority: 7
        },
        "vmware.hv.status[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.status[{$URL},{HOST.HOST}]",
            name: "Overall status",
            name_cn: "总体状态",
            position: "center",
            priority: 10
        }
    },
    cpu: {
        "vmware.hv.hw.cpu.num[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.hw.cpu.num[{$URL},{HOST.HOST}]",
            name: "CPU cores",
            name_cn: "cpu核数",
            position: "center",
            priority: 4
        },
        "vmware.hv.hw.cpu.freq[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.hw.cpu.freq[{$URL},{HOST.HOST}]",
            name: "CPU frequency",
            name_cn: "cpu主频",
            position: "center",
            priority: 3
        },
        "vmware.hv.hw.cpu.model[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.hw.cpu.model[{$URL},{HOST.HOST}]",
            name: "CPU model",
            name_cn: "cpu型号",
            position: "center",
            priority: 1
        },
        "vmware.hv.hw.cpu.threads[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.hw.cpu.threads[{$URL},{HOST.HOST}]",
            name: "CPU threads",
            name_cn: "cpu线程数",
            position: "center",
            priority: 2
        },
        "vmware.hv.cpu.usage[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.cpu.usage[{$URL},{HOST.HOST}]",
            name: "CPU usage",
            name_cn: "cpu使用率",
            position: "center",
            show_method: "scroll",
            priority: 5
        }
    },
    dataStore:{
        "vmware.hv.datastore.read[{$URL},{HOST.HOST},datastore1,latency]": {
            key:"vmware.hv.datastore.read[{$URL},{HOST.HOST},datastore1,latency]",
            name: "Average read latency of the datastore $3",
            name_cn: "读延迟",
            position: "center",
            priority: 1
        },
        "vmware.hv.datastore.write[{$URL},{HOST.HOST},datastore1,latency]": {
            key:"vmware.hv.datastore.write[{$URL},{HOST.HOST},datastore1,latency]",
            name: "Average write latency of the datastore $3",
            name_cn: "写延迟",
            position: "center",
            priority: 2
        }
    },
    networkFlow:{
        "vmware.hv.network.in[{$URL},{HOST.HOST},bps]": {
            key:"vmware.hv.network.in[{$URL},{HOST.HOST},bps]",
            name: "Number of bytes received",
            name_cn: "流入字节速率(单位: byte/秒)",
            position: "center",
            priority: 1
        },
        "vmware.hv.network.out[{$URL},{HOST.HOST},bps]": {
            key:"vmware.hv.network.out[{$URL},{HOST.HOST},bps]",
            name: "Number of bytes transmitted",
            name_cn: "流出字节速率(单位: byte/秒)",
            position: "center",
            priority: 2
        }
    },
    memory:{
        "vmware.hv.hw.memory[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.hw.memory[{$URL},{HOST.HOST}]",
            name: "Total memory",
            name_cn: "总内存 (单位:M)",
            position: "center",
            priority: 1
        },
        "vmware.hv.memory.size.ballooned[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.memory.size.ballooned[{$URL},{HOST.HOST}]",
            name: "Ballooned memory",
            name_cn: "膨胀内存 (单位:M)",
            position: "center",
            priority: 2
        },
        "vmware.hv.memory.used[{$URL},{HOST.HOST}]": {
            key:"vmware.hv.memory.used[{$URL},{HOST.HOST}]",
            name: "Used memory",
            name_cn: "使用内存 (单位:M)",
            position: "center",
            priority: 3
        }
    },
    noTab: {
        empty: {
            key:"未知",
            name: "未知",
            name_cn: "未知",
            position: "center"
        }
    }

};