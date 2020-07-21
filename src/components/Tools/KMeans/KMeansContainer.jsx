import React, { useState } from 'react';
import { KMeans } from './KMeans';
import { clusterData } from './clusterData';
import './KMeans.scss';

const KMeansContainer = () => {
  const [values, setValues] = useState({
    numberOfClusters: '3',
    maxClusterPoints: 50,

    // ==============================
    // Chart data stuff
    // ==============================
    chartWidth: 600,
    chartHeight: 600,
    chartType: 'ScatterChart',
    chartData: clusterData,
    chartOptions: {
      title: 'K-means clustering',
      hAxis: { title: 'x', minValue: -1, maxValue: 1 },
      vAxis: { title: 'y', minValue: -1, maxValue: 1 },
      legend: 'none',
    }
  });

  // ========================================
  // Helper functions for
  // cluster data point generation
  // ========================================
  const normalRandom = () => ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 3) / 3;
  const getRandCoord = (min, max) => Math.random() * (max - min) + min;

  // ========================================
  // Set clusters based on input value
  // ========================================
  const setClusters = (e) => {
    setValues({ ...values, numberOfClusters: e.target.value })
  }

  // ========================================
  // Creating clusters randomly
  // ========================================
  const generateClusters = () => {
    const clusterData = []; // chart data array
    let clusterPoint = []; // single coordinate
    let clusterCenterX; // x coordinate of cluster center
    let clusterCenterY; // y coordinate of cluster center
    // Initialize coordinate array with coordinate labels
    clusterData.push(['x', 'y']);

    // Iterate number of clusters
    for (let i = 0; i < values.numberOfClusters; i += 1) {
      // Get cluster center
      clusterCenterX = getRandCoord(-1, 1);
      clusterCenterY = getRandCoord(-1, 1);
      // Populate cluster
      for (let j = 0; j < values.maxClusterPoints; j += 1) {
        clusterPoint.push(normalRandom() + clusterCenterX);
        clusterPoint.push(normalRandom() + clusterCenterY);
        clusterData.push(clusterPoint);
        // Empty coordinate arrays for next iteration
        clusterPoint = [];
      }
    }
    setValues({ ...values, chartData: clusterData });
  }

  // ========================================
  // The K-means algorithm
  // ========================================
  const kMeans = () => {
    console.log('kMeans');
  }

  // ========================================
  // Render
  // ========================================
  return (
    <KMeans
      setClusters={setClusters}
      generateClusters={generateClusters}
      numberOfClusters={values.numberOfClusters}
      chartWidth={values.chartWidth}
      chartHeight={values.chartHeight}
      chartType={values.chartType}
      chartData={values.chartData}
      chartOptions={values.chartOptions}
    />
  );
}

export { KMeansContainer };
