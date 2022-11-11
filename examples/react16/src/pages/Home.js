import React from 'react';
import { Drawer, Button } from 'antd';

export default function () {
  const [visible, toggleVisible] = React.useState(false);
  return (
    <div style={{ height: '1000px'}}>
      <Button onClick={() => toggleVisible(true)}>打开抽屉</Button>
      <Drawer open={visible} onClose={() => toggleVisible(false)}>内容</Drawer>
    </div>
  );
}
