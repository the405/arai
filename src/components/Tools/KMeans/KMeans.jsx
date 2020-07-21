import React from 'react';
import Chart from 'react-google-charts';
import { Description } from '../common/Description';
import { descriptionData } from './descriptionData';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import './KMeans.scss';

const KMeans = ({
  setClusters,
  generateClusters,
  numberOfClusters,
  chartWidth,
  chartHeight,
  chartType,
  chartData,
  chartOptions
}) => {
  return (
    <div className="kmeans">
      <h1>UNDER CONSTRUCTION</h1>
      <Description {...descriptionData} />
      <div className="cluster-input">
        <Input
          className="input die__count"
          type="number"
          name="input"
          value={numberOfClusters}
          placeholder="1"
          handleChange={setClusters}
        />
        <Button
          label="Generate clusters"
          handleClick={generateClusters}
          className="button button--generate"
        />
      </div>
      {/* <Button
        label="Start algorithm"
        handleClick={kMeans}
        className="button button--start"
      /> */}
      <Chart
        width={chartWidth}
        height={chartHeight}
        chartType={chartType}
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={chartOptions}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}

export { KMeans };
