import React from 'react';
import { Graph } from '@antv/x6';
import './App.css';

const data = {
  // 节点
  nodes: [
    {
      id: 'start', // String，可选，节点的唯一标识
      shape: 'rect', // rect | ellipse ... 图形类型
      x: 40,       // Number，必选，节点位置的 x 值
      y: 40,       // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'START', // String，节点标签
    },
    {
      id: 'rs1', // String，节点的唯一标识
      shape: 'ellipse', // rect | ellipse ... 图形类型
      x: 140,      // Number，必选，节点位置的 x 值
      y: 40,      // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'RuleSet_1', // String，节点标签
    },
    {
      id: 'end', // String，节点的唯一标识
      shape: 'rect', // rect | ellipse ... 图形类型
      x: 240,      // Number，必选，节点位置的 x 值
      y: 40,      // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'END', // String，节点标签
    },
  ],
  // 边
  edges: [
    {
      source: 'start', // String，必须，起始节点 id
      target: 'rs1', // String，必须，目标节点 id
    },
    {
      source: 'rs1', // String，必须，起始节点 id
      target: 'end', // String，必须，目标节点 id
    },
  ],
};

function App() {
  React.useEffect(() => {
    const graph = new Graph({
      container: document.getElementById('App'),
      width: 800,
      height: 600,
      background: {
        color: '#999',
      },
      // grid: {
      //   size: 10,      // 网格大小 10px
      //   visible: true, // 渲染网格背景
      // },
    }); 
    graph.fromJSON(data);
    // graph.zoom(-0.5); // 缩放
    // graph.translate(80, 40);
  }, [])
  return (
    <div className="App" id="App">
      
    </div>
  );
}

export default App;
