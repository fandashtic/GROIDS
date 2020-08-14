import React from "react";
import { Col, Row } from "antd";

import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { increamentData, lineData } from "../../Metrics/data";
import ChartCard from "../../../../components/dashboard/Stores/ChartCard";
import Auxiliary from "util/Auxiliary";
import Portfolio from "../../../../components/dashboard/Stores/Portfolio";

const Store = () => {
  return (
    <Auxiliary>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="15480" title="" icon="user"
            children={<ResponsiveContainer width="100%" height={75}>
              <AreaChart data={increamentData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip />
                <defs>
                  <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <Area dataKey='price' strokeWidth={0} stackId="2" stroke='#4D95F3' fill="url(#color3)"
                  fillOpacity={1} />
              </AreaChart>
            </ResponsiveContainer>}
            styleName="up" desc="Happy Consumers" />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="1568" title="" icon="etherium"
            children={<ResponsiveContainer width="100%" height={75}>
              <AreaChart data={increamentData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip />
                <defs>
                  <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#06BB8A" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <Area dataKey='price' type='monotone' strokeWidth={0} stackId="2" stroke='#4D95F3'
                  fill="url(#color4)"
                  fillOpacity={1} />
              </AreaChart>
            </ResponsiveContainer>}
            styleName="up" desc="Available Stores" />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="57" title="" icon="ripple"
            children={<ResponsiveContainer width="100%" height={75}>
              <AreaChart data={increamentData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip />
                <defs>
                  <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FEEADA" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
                <Area dataKey='price' strokeWidth={0} stackId="2" stroke='#FEEADA' fill="url(#color5)"
                  fillOpacity={1} />
              </AreaChart>
            </ResponsiveContainer>}
            styleName="down" desc="Available Cities" />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="148759" title="" icon="litcoin"
            children={<ResponsiveContainer width="100%" height={75}>

              <LineChart data={lineData}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <Tooltip />
                <Line dataKey="price" stroke="#038FDE" dot={{ stroke: '#FEA931', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>}
            styleName="down" desc="Available Products" />
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <Portfolio />
        </Col>
      </Row>
    </Auxiliary>
  );
};

export default Store;
