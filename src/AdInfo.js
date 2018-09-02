import React from 'react';
import { Button, Collapse, Badge, Timeline, Tag } from 'antd';

const Panel = Collapse.Panel;

const ReactInfo = () => (
  <div>
    <div style={{textAlign: 'right'}}>
      <Button type="primary" shape="circle" icon="bulb" style={{marginRight: 8}} />
      <Button type="primary" shape="circle" icon="reload" />
    </div>
    <div>
      <table className="infos" style={{marginLeft: 16}}>
        <tr><td>Account</td><td>/10518929/tmnp.iMore/forum_thread</td></tr>
        <tr><td>Placement</td><td>1234</td></tr>
      </table>
      <Collapse defaultActiveKey={['1', '2']} bordered={false}>
        <Panel header="Targeting Attributes" key="1">
          <table className="infos">
            <tr><td>partner</td><td>y</td></tr>
            <tr><td>site</td><td>tmnp.iMore.com</td></tr>
            <tr><td>TUUID</td><td>de49bdd3e81c4a479246e6abd8129427</td></tr>
            <tr><td>_rid</td><td>925932393963100320</td></tr>
            <tr><td>stype</td><td>forum</td></tr>
            <tr><td>ctype</td><td>forum_thread</td></tr>
            <tr><td>_c</td><td>1</td></tr>
            <tr><td>kw</td><td><Tag>general_apple_news_amp_discussion</Tag><Tag>imore_community_discussions</Tag></td></tr>
            <tr><td>_pgid</td><td>66dcaa27</td></tr>
            <tr><td>mcat</td><td><Tag>Smartphone Processors (p33)</Tag></td></tr>
            <tr><td>scat</td><td><Tag>Technology & Computing (i328)</Tag><Tag>Cell Phones (i334)</Tag><Tag>Smartphone (p31), Portable Entertainment (i358)</Tag></td></tr>
            <tr><td>urlhash</td><td>G4OvlPoHscM</td></tr>
            <tr><td>fr</td><td>false</td></tr>
            <tr><td>adt</td><td>veryLow</td></tr>
            <tr><td>alc</td><td>veryLow</td></tr>
            <tr><td>tablem</td><td>veryLow</td></tr>
            <tr><td>drg</td><td>veryLow</td></tr>
            <tr><td>hat</td><td>veryLow</td></tr>
            <tr><td>off</td><td>veryLow</td></tr>
            <tr><td>vio</td><td>veryLow</td></tr>
            <tr><td>_rf</td><td>1</td></tr>
            <tr><td>_sw1600</td><td>1</td></tr>
            <tr><td>_sh0</td><td>1</td></tr>
            <tr><td>_ex</td><td>|4|79|78|51|49|</td></tr>
          </table>
        </Panel>
        <Panel header={<Badge count="5">Adunits</Badge>} key="2">
          <Collapse>
            <Panel header="Adunit: topic-pencil-rt" key="2">
              <div style={{marginBottom: 16, textAlign: 'right'}}>
                <Button shape="circle" icon="bulb" type="primary" style={{marginRight: 8}}/>
                <Button shape="circle" icon="reload" type="primary" style={{marginRight: 8}}/>
                <Button shape="circle" icon="code-o" type="primary" style={{marginRight: 8}}/>
                <Button type="primary">Clone</Button>
              </div>
              <Timeline>
                <Timeline.Item>
                  <Tag color="#108ee9">2018-06-09 17:17:00</Tag>
                  <table className="infos">
                    <tr><td>Div</td><td>topic-pencil-rt</td></tr>
                    <tr><td>Account</td><td>/25586680/imore/article</td></tr>
                    <tr><td>Sizes</td><td><Tag>fluid</Tag><Tag>386x50</Tag></td></tr>
                    <tr><td>Latency</td><td>N/A</td></tr>
                    <tr><td>Fetch count</td><td>N/A</td></tr>
                  </table>
                  <h4>Targeting Attributes</h4>
                  <table className="infos">
                    <tr><td>adunit</td><td>header_pencil_ad</td></tr>
                    <tr><td>site</td><td>im</td></tr>
                  </table>
                </Timeline.Item>
                <Timeline.Item>
                  <Tag color="#108ee9">2018-06-09 17:17:00</Tag>
                  <table className="infos">
                    <tr><td>Div</td><td>topic-pencil-rt</td></tr>
                    <tr><td>Account</td><td>/25586680/imore/article</td></tr>
                    <tr><td>Sizes</td><td><Tag>fluid</Tag><Tag>386x50</Tag></td></tr>
                    <tr><td>Latency</td><td>N/A</td></tr>
                    <tr><td>Fetch count</td><td>N/A</td></tr>
                  </table>
                  <h4>Targeting Attributes</h4>
                  <table className="infos">
                    <tr><td>adunit</td><td>header_pencil_ad</td></tr>
                    <tr><td>site</td><td>im</td></tr>
                  </table>
                  <h4>Bids Analysis</h4>
                </Timeline.Item>
              </Timeline>
            </Panel>
            <Panel header="Adunit: adunit2" key="3">
              Panel content
            </Panel>
            <Panel header="Adunit: adunit3" key="4">
              Panel content
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>
    </div>
  </div>
);

export default ReactInfo;