import {
    message 
} from 'antd';

export const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

export const data = [
    [1, 4, 5, 7, 3],
    [11, 22, 33, 43, 23, 45,18],
    [2, 6, 9, 10, 88, 76],
    [20, 37, 90, 15],
];

export const option = {
    color: ['rgba(255, 255, 255, .7)'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            
            type : 'shadow'        
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : data.map((d, i) => `${i + 1}簇`),
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, .7)'
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, .7)'
                }
            }
        }
    ],
    series : [
        {
            name:'节点数量',
            type:'bar',
            barWidth: '60%',
            data: data.map(d => d.length)
        }
    ]
};

    