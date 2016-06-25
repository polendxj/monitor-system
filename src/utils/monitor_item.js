/**
 * Created by Captain on 2016/6/22.
 */
monitorItems=
    {
        hypervisor:{
            "cpu使用率":{
                items:[
                    "'vmware.hv.hw.cpu.threads[{$URL},{HOST.HOST}]'"
                    /*"vmware.hv.cpu.usage[{$URL},{HOST.HOST}]"*/
                ],
                graphType:0,
                convertDataType:"memory"
            },
            "内存使用率":{
                items:[
                    "'vmware.hv.hw.memory[{$URL},{HOST.HOST}]'"
                    /*"'vmware.hv.memory.size.ballooned[{$URL},{HOST.HOST}]'",
                    "'vmware.hv.memory.used[{$URL},{HOST.HOST}]'"*/
                ],
                graphType:1,
                convertDataType:"memory"
            }

        },
        vms:{
            "cpu使用率":{
                items:[
                    {"vmware.vm.cpu.ready[{$URL},{HOST.HOST}]":""},
                    {"vmware.vm.cpu.usage[{$URL},{HOST.HOST}]":"cpu使用率"}
                ],
                graphType:"pieCharts"
            },
            "内存使用率":{
                items:[
                    {"vmware.vm.memory.size.ballooned[{$URL},{HOST.HOST}]":"膨胀内存"},
                    {"vmware.vm.memory.size.compressed[{$URL},{HOST.HOST}]":"压缩内存"},
                    {"vmware.vm.memory.size.private[{$URL},{HOST.HOST}]":"私有内存"},
                    {"vmware.vm.memory.size.shared[{$URL},{HOST.HOST}]":"共享内存"},
                    {"vmware.vm.memory.size.swapped[{$URL},{HOST.HOST}]":"交换内存"},
                    {"vmware.vm.memory.size.usage.guest[{$URL},{HOST.HOST}]":"guest使用量"},
                    {"vmware.vm.memory.size.usage.host[{$URL},{HOST.HOST}]":"host使用量"},
                    {"vmware.vm.memory.size[{$URL},{HOST.HOST}]":"内存总大小"}
                ],
                graphType:"lineCharts"
            }

        }
    };
